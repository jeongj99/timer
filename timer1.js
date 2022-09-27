let args = (process.argv).slice(2);

for (let arg of args) {
  let mSec = 0;
  if (Math.sign(arg) === 1) {
    mSec = (Number(arg)) * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, mSec);
  }
}