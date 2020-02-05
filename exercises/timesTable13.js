/**
 * Prints out the first n multiples of 13.
 *
 * The output should look like:
 *
 *   13 times 1 is 13
 *   13 times 2 is 26
 *   13 times 3 is 39
 *   13 times 4 is 52
 */
function timesTable13(n) {
  const multipliers = [];
  for (let i = 1; i <= n; i++) {
    multipliers.push(i);
  }
  console.log();
  for (let multiplier of multipliers) {
    console.log(`13 times ${multiplier} is ${multiplier * 13}`);
  }
}

if (require.main === module) {
  let input;

  input = 3;
  console.log('The first', input, 'multiples of 13 are:')
  timesTable13(input);
  console.log('----------------');
  console.log();


  input = 5;
  console.log('The first', input, 'multiples of 13 are:')
  timesTable13(input);
  console.log('----------------');
  console.log();

  input = 12;
  console.log(`The first ${input} multiples of 13 are:`);
  timesTable13(input);
  console.log('----------------');
  console.log();
}
