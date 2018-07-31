const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('prompt > ');
}

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');

  if (cmd[0] === 'pwd') {
    pwd(done);
  }

  if (cmd[0] === 'ls') {
    ls(done);
  }

  if (cmd[0] === 'cat') {
    cat(cmd[1], done);
  }

  if (cmd[0] === 'curl') {
    curl(cmd[1], done);
  }

  process.stdout.write('\nprompt > ');
});

module.exports = done;
