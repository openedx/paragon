const { program } = require('commander');
const { execSync } = require('child_process');
const fs = require('fs');

program
  .requiredOption('--repoUrl <name>', 'Provide a git repo url', 'https://github.com/openedx/paragon')
  .action((options) => {
    if (fs.existsSync('CHANGELOG.md')) {
      fs.unlink('CHANGELOG.md', (err) => {
        if (err) {
          throw err;
        }
      });
    }

    const { repoUrl } = options;
    const cmd = 'git log --pretty=format:"%h|%H|%ad|%s|%d|%b||" --date=short';
    const commitLog = execSync(cmd, { encoding: 'utf8' }).split('||\n');

    const replaceCurlyBraces = (breakingChangesData) => breakingChangesData.replace(/<(?=[A-Z])|(\s)\/>/g, '`');

    // store information of the current release while we go over all
    // commits between this release and previous one
    let bugFixes = '';
    let features = '';
    let header = '';
    let breakingChanges = '';
    let currentTag;

    commitLog.forEach(entry => {
      const [shaShort, shaFull, date, commitSubject, refNames, body] = entry.split('|');

      if (!header) {
        header = `## %RELEASE_LINK% (${date})\n\n`;
      }

      // check if commit has a tag attached which would indicate a new release
      let prevTag = refNames && refNames.match(/tag: (.*?)(,|\))/g);
      if (prevTag) {
        prevTag = prevTag[0].split(':')[1].trim().slice(0, -1);
      }

      // we found a previous release! time to add an entry to CHANGELOG.md
      // with all the collected changes between releases
      if (prevTag && currentTag) {
        fs.appendFileSync('./CHANGELOG.md', header.replace('%RELEASE_LINK%', `[${currentTag}](${repoUrl}/compare/${prevTag}...${currentTag})`));
        if (features) {
          fs.appendFileSync('./CHANGELOG.md', `### Features\n${features}\n\n`);
          features = '';
        }
        if (bugFixes) {
          fs.appendFileSync('./CHANGELOG.md', `### Bug Fixes\n${bugFixes}\n\n`);
          bugFixes = '';
        }
        if (breakingChanges) {
          fs.appendFileSync('./CHANGELOG.md', `### BREAKING CHANGES\n${breakingChanges}\n\n`);
          breakingChanges = '';
        }
        fs.appendFileSync('./CHANGELOG.md', '\n\n');
        header = `## %RELEASE_LINK% (${date})\n\n`;
      }

      if (commitSubject) {
        let commitMsgToAdd = commitSubject.trim();
        const issue = commitSubject && commitSubject.match(/\(#\d+\)$/g);

        if (issue && issue.length > 0) {
          const issueId = issue[0].trim().slice(1, -1);
          commitMsgToAdd = commitMsgToAdd.replace(issue[0], `([${issueId}](${repoUrl}/issues/${issueId.slice(1)}))`);
        }

        // add link to the commit
        commitMsgToAdd = `${commitMsgToAdd} ([${shaShort}](${repoUrl}/commit/${shaFull}))`;

        if (commitMsgToAdd.startsWith('feat:')) {
          features += `\n* ${commitMsgToAdd.slice(5)}`;
        } else if (commitMsgToAdd.startsWith('fix:')) {
          bugFixes += `\n* ${commitMsgToAdd.slice(4)} `;
        }
      }

      if (body && body.includes('BREAKING CHANGE')) {
        breakingChanges = replaceCurlyBraces(body.split('BREAKING CHANGE').pop().slice(2));
      }

      if (prevTag) {
        currentTag = prevTag;
      }
    });
  });

program.parse(process.argv);
