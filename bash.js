const pwd = require('./pwd').pwdFunc;
const ls = require('./ls').ls;
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    process.stdout.write(pwd());
  }

  if (cmd === 'ls') {
    ls();
  }

  if (cmd.slice(0, 3) === 'cat') {
    cat(cmd.slice(4));
  }

  process.stdout.write('\nprompt > ');
});
