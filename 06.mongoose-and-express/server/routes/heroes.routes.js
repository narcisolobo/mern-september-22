const express = require('express');
const router = express.Router();

const {
  createHero,
  getHeroes,
  getOneHero,
  updateHero,
  deleteHero,
} = require('../controllers/heroes.controller');

router.route('/').post(createHero).get(getHeroes);

router.route('/:id').get(getOneHero).put(updateHero).delete(deleteHero);

module.exports = router;
