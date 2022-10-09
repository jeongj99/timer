const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

const regex = /[1-9]/;
stdin.on('data', (key) => {
  switch (key) {
    case '\u0003':
      console.log('Thanks for using me, ciao!');
      process.exit();
    case 'b':
      process.stdout.write('\x07');
      break;
    case key[key.search(regex)]:
      console.log(`Setting timer for ${key[key.search(regex)]} seconds...`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(key[key.search(regex)]) * 1000);
  }
});