const fs = require('fs');

const ls = function(endAction) {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      endAction(files.join('\n'));
    }
  });
}


module.exports = ls;
