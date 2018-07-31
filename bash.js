const pwd = require('./pwd').pwdFunc;
const ls = require('./ls').ls;
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
  if (cmd[0] === 'pwd') {
    process.stdout.write(pwd());
  }

  if (cmd[0] === 'ls') {
    ls();
  }

  if (cmd[0] === 'cat') {
    cat(cmd[1]);
  }
  process.stdout.write('\nprompt > ');
});
