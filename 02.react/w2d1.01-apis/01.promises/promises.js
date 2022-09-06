// Producer
const myPromise = new Promise((resolve, reject) => {
  // Executor
  // Producing code that takes some time to complete
  // eventually produce some result
  setTimeout(() => {
    resolve('done');
  }, 2000);
  // reject(new Error('whoops'))
});

// state: pending -> fulfilled or rejected 
// result: undefined -> value or error

// Consumer
const example = () => {
  myPromise
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => {
      console.log('finally')
    })
}

example();