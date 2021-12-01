for (let i = 1; i < 3; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100 * i);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300 * i);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500 * i);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, 700 * i);

  setTimeout(() => {
    process.stdout.write('\r|   ');
    if (i === 2) {
      process.stdout.write('\n');
    }
  }, 900 * i);
}
