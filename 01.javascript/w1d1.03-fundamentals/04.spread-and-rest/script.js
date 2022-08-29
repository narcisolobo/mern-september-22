// const fibonacci = [0, 1, 1, 2, 3, 5, 8];
// const [a, b, c, ...fib] = fibonacci;

// console.log(fib);

// const myGuitar = {
//   make: 'Fender',
//   model: 'Stratocaster',
//   year: 1977,
//   color: 'red'
// };
// const { make, ...strat } = myGuitar;

// console.log(strat);

// Spread Syntax
// const fibonacci = [0, 1, 1, 2, 3, 5, 8];
// const fibCopy = [...fibonacci];
// fibonacci[0] = 100;

// console.log(fibCopy);

// const fibonacci = [0, 1, 1, 2, 3, 5, 8];
// const moreFib = [...fibonacci, 13, 21, 34];

// console.log(moreFib);

// console.log(fibonacci);

const myGuitar = {
  make: 'Fender',
  model: 'Stratocaster',
  year: 1977,
  color: 'red'
};

const paintJob = {
  ...myGuitar,
  color: 'blue'
}

console.log(paintJob);
console.log(myGuitar);