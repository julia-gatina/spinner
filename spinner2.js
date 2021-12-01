const arrayOfStates = ['|', '/', '-', '\\ ', '|', '/', '-', '\\ ', '|'];

for (let i = 0; i < arrayOfStates.length; i++) {
  const state = arrayOfStates[i];
  setTimeout(() => {
    process.stdout.write(`\r${state}   `);
    if (i === arrayOfStates.length) {
      process.stdout.write('\n');
    }
  }, 300 * (i + 1));
}
