const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
  realName: {
    type: String,
    required: [true, 'Please enter real name.']
  },
  alterEgo: {
    type: String,
    required: [true, 'Please enter alter ego.']
  }
}, { timestamps: true });

const Hero = mongoose.model('Hero', HeroSchema);
module.exports = Hero;