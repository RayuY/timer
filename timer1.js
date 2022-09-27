let argv = process.argv.slice(2);


if (argv.length === 0) {
  return null;
}

for (let i of argv.sort((a,b) => a-b)) {
  if ((isNaN(i)) || i < 0) {
    continue;
  } 
  i *= 1000;
  setTimeout(() => {
    console.log(`${i/1000} seconds`);
    process.stdout.write('\x07');
  }, i);
}










