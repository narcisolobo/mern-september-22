const jokeContainer = document.getElementById('jokeContainer');
jokeContainer.innerText = 'Loading dad joke...'

const getRandomDadJoke = () => {

  const DAD_JOKE_URI = 'https://icanhazdadjoke.com';
  fetch(DAD_JOKE_URI, {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      jokeContainer.innerText = res.joke;
    })
    .catch(err => console.log(err));

}

getRandomDadJoke();