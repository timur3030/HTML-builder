const fs = require('fs');
const path = require('path');

const { stdin, stdout } = process;

const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));

process.on('exit', () => console.log('See you. Bye!'));
process.on('SIGINT', () => process.exit());

stdout.write('Hello! Enter text:\n');
stdin.on('data', (data) => {
  if (data.toString().includes('exit')) process.exit();
  output.write(data);
});
