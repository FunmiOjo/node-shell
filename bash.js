const pwd = require('./pwd').pwdFunc;

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd();
  }

  // process.stdout.write(cmd);
  process.stdout.write('\nprompt > ');
});
