const Hero = require('../models/hero.model');

const createHero = (req, res) => {
  Hero.create(req.body)
    .then((hero) => res.status(201).json(hero))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

const getHeroes = (_, res) => {
  Hero.find()
    .then((heroes) => res.status(200).json({ allHeroes: heroes }))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

const getOneHero = (req, res) => {
  Hero.findById({ _id: req.params.id })
    .then((hero) => res.status(200).json(hero))
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        msg: 'hero not found',
        err,
      });
    });
};

const updateHero = (req, res) => {
  Hero.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then(hero => res.status(200).json(hero))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
};

const deleteHero = (req, res) => {
  Hero.findByIdAndDelete({ _id: req.params.id })
    .then(result => res.status(200).json(result))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
};

module.exports = { createHero, getHeroes, getOneHero, updateHero, deleteHero };
