const path = require('path');
const fs = require('fs');
const async = require('async');

function getFiles(dirPath, callback) {
  fs.readdir(dirPath, (err, files) => {
    if (err) { return callback(err); }

    let filePaths = [];
    async.eachSeries(files, (fileName, eachCallback) => {
      const filePath = path.join(dirPath, fileName);

      fs.stat(filePath, (err, stat) => {
        if (err) { return eachCallback(err); }

        if (stat.isDirectory()) {
          getFiles(filePath, (err, subDirFiles) => {
            if (err) { return eachCallback(err); }

            filePaths = filePaths.concat(subDirFiles);
            eachCallback(null);
          });
        } else {
          if (stat.isFile() && /\.json$/.test(filePath)) {
            filePaths.push(filePath);
          }

          eachCallback(null);
        }
      });
    }, (err) => {
      callback(err, filePaths);
    });
  });
}

getFiles('./src/', (err, files) => {
  files.forEach(filePath => {
    let data = fs.readFileSync(filePath, 'utf-8');

    data = data.replaceAll('"value": "{color.', '"type": "color", "value": "{color.');
    data = data.replaceAll('"value": "#', '"type": "color", "value": "#');
    data = data.replaceAll('px",', 'px", "type": "dimension",');
    data = data.replaceAll('rem",', 'rem", "type": "dimension",');
    data = data.replaceAll('"value": "{spacing.', '"type": "dimension", "value": "{spacing.');
    data = data.replaceAll('"value": "{typography.font.weight', '"type": "fontWeight", "value": "{typography.font.weight');
    data = data.replaceAll('-box-shadow"', '-box-shadow", "type": "shadow"');
    data = data.replaceAll('"source": "$box-shadow-', '"type": "shadow", "source": "$box-shadow-');
    data = data.replaceAll('"source": "$transition-', '"type": "transition", "source": "$transition-');
    data = data.replaceAll('"value": "url(', '"type": "file", "value": "url(');
    data = data.replaceAll('-opacity"', '-opacity", "type": "percentage"');

    fs.writeFileSync(filePath, data);
  });
});
