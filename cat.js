const fs = require('fs');

function cat(fileName) {
  fs.readFile(`./${fileName}`, (err, data) => {
    if (err) {
      throw err;
    }
    process.stdout.write(data);
  });
}

module.exports = cat;
