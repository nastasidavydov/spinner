// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r/   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r-   '); 
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 1100);


// setTimeout(() => {
//   process.stdout.write('\r|   \n'); 
// }, 1300);


const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']

let interval = 0;
for (let char of characters) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, interval)
  interval += 200;
}

setTimeout(() => {
  process.stdout.write(`\n`);
}, interval)
