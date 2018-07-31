const pwd = require('./pwd').pwdFunc;
const ls = require('./ls').ls;

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    process.stdout.write(pwd());
  }

  if (cmd === 'ls') {
    ls();
  }


  process.stdout.write('\nprompt > ');
});
