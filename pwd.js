// process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();
//   if (cmd === 'pwd') {
//     let path = __dirname;
//     process.stdout.write(path);
//   }

//   // process.stdout.write(cmd);
//   process.stdout.write('\nprompt > ');
// });
let pwdFunc = function() {
  let path = __dirname;
  return path;
}

module.exports = {
  pwdFunc: pwdFunc
}
