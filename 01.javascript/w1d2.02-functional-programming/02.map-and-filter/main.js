// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const groceryList = groceries.map((item) => `<li>${item}</li>`);

// console.log(groceryList);

// const values = [1, 2, 3, 4, 5];
// const cubes = values.map( val => val**3 );
// --> prediction [1, 8, 27, 64, 125]

// console.log(cubes);

// const values = [1, 2, 3, 4, 5];
// const evens = values.filter( val => val % 2 === 0 );
// console.log(evens);

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );
// Prediction --> ["pearl onions", "cremini mushrooms"]
console.log(oFoods);

const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
// Prediction --> [1, 27, 125]
console.log(oddCubes);