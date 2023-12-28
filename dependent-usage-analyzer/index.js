/* eslint-disable no-console */
const fs = require('fs');
const { Command } = require('commander');
const { findProjectsToAnalyze, analyzeProject } = require('./tools');

const program = new Command();

program
  .version('1.0.0')
  .arguments('<projectsDir>')
  .description('Analyze projects that include Paragon as a dependency.')
  .option('-o, --out <outFilePath>', 'output filepath')
  .action((projectsDir, options) => {
    const outputFilePath = options.out || 'out.json';
    const projectDirectories = findProjectsToAnalyze(projectsDir);
    console.log(`Found ${projectDirectories.length} projects to analyze`);
    const analyzedProjects = projectDirectories.map((dir) => analyzeProject(dir, { projectsDir }));
    const analysis = {
      lastModified: Date.now(),
      projectUsages: analyzedProjects,
    }
    fs.writeFileSync(outputFilePath, JSON.stringify(analysis, null, 2));
    console.log(`Analyzed ${projectDirectories.length} projects:`);
    console.log(analysis);
  });

program.parse(process.argv);
