const fs = require('fs');

function cat(fileName, endAction) {
  fs.readFile(`./${fileName}`, (err, data) => {
    if (err) {
      throw err;
    }
    endAction(data);
  });
}

module.exports = cat;
