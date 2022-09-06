import { lines } from './lines.js';

const cardHeader = document.getElementById('cardHeader')
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

let isLoading = true;
if (isLoading) {
  cardHeader.innerText = 'LOADING...'
}

// producer
const ricksPromise = new Promise((resolve, reject) => {
  const error = false;

  if (error) {
    reject(new Error('YOU GAVE ME UP!'));
  } else {
    setTimeout(() => {
      resolve(lines);
    }, 2000);
  }
});

// consumer
const getLines = () => {
  ricksPromise
    .finally(() => {
      isLoading = false;
      cardHeader.innerText = 'GOTTA MAKE YOU UNDERSTAND...';
    })
    .then((lines) => {
      setTimeout(() => {
        line1.innerHTML += lines[0];
      }, 1000);
      setTimeout(() => {
        line2.innerHTML += lines[1];
      }, 2000);
      setTimeout(() => {
        line3.innerHTML += lines[2];
      }, 3000);
    })
    .catch((err) => {
      cardHeader.classList.add('text-danger');
      cardHeader.innerText = err;
    })
}

getLines();