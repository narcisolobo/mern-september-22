// function myFunction(callback) {
//   callback();
// }

// Higher order function
// A function that accepts a callback
function greet(name, callback) {
  callback(name);
}

// Callback function
// A function passed into another function
function greetByName(name) {
  console.log(`Hello, ${name}!`);
}

// greet('Nisrine', greetByName);

// No callback version (normal function)
function easyGreeter(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(() => {
  console.log('Hello');
}, 3000);

console.log('Goodbye');