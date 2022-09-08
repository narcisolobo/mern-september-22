const express = require("express");
const app = express();
let heroes = require('./heroes')
const { v4: uuidv4 } = require('uuid');

const dotenv = require("dotenv");
dotenv.config();

const colors = require('colors');
colors.enable();

// middleware to handle json post requests
app.use(express.json())

// get all heroes
app.get('/api/heroes', (_, res) => {
  res.status(200).json(heroes);
});

// create a hero
app.post('/api/heroes', (req, res) => {
  console.log(req.body);
  const newHero = {
    id: uuidv4(),
    ...req.body
  }
  heroes.push(newHero)
  res.status(201).json(heroes[heroes.length-1])
});

// get one hero
app.get('/api/heroes/:id', (req, res) => {
  const isFound = heroes.some(h => h.id === req.params.id)
  if (isFound) {
    const foundHero = heroes.filter(h => h.id === req.params.id)
    res.status(200).json(foundHero)
  } else {
    res.status(400).json({msg: 'hero not found'})
  }
});

// update a hero
app.put('/api/heroes/:id', (req, res) => {
  const isFound = heroes.some(hero => hero.id === req.params.id)
  if (isFound) {
    const updatedHeroes = heroes.map(hero => {
      if (hero.id === req.params.id) {
        hero.realName = req.body.realName;
        hero.alterEgo = req.body.alterEgo;
        hero.company = req.body.company;
      }
      return hero;
    })
    
    heroes = updatedHeroes;
    const updatedHero = heroes.find(h => h.id === req.params.id)
    res.status(200).json(updatedHero)
  } else {
    res.status(400).json({msg: 'hero not found'})
  }
});

// delete a hero
app.delete('/api/heroes/:id', (req, res) => {
  const isFound = heroes.some(h => h.id === req.params.id)
  if (isFound) {
    const updatedHeroes = heroes.filter(h => h.id !== req.params.id)
    heroes = updatedHeroes;
    res.status(200).json({msg: 'hero deleted'});
  } else {
    res.status(400).json({msg: 'hero not found'});
  }
})

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () =>
  console.log(colors.rainbow(`listening on port: ${server.address().port}`))
);
