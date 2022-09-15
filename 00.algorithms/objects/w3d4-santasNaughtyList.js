/*
  cSpell: words fozzy santas
  Given an array of objects representing people, and a string representing a bad habit
  return a "santasNaughtyList" containing the first and last names of all the people who
  have the matching bad habit so that santa knows how much coal he needs.

  Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const students = [
  {
    firstName: 'Kermit',
    lastName: 'Frog',
    habits: ["doesn't wash dishes", 'falls asleep in lecture', 'shows up early'],
  },
  {
    firstName: 'Miss',
    lastName: 'Piggy',
    habits: ['shows up late', 'washes dishes', 'helps peers'],
  },
  {
    firstName: 'Fozzy',
    lastName: 'Bear',
    habits: ["doesn't wash dishes", 'hoards snacks', 'shows up late'],
  },
  {
    firstName: 'FN4',
    lastName: 'LN4',
    habits: ['shows up early', 'helps peers', 'washes dishes'],
  },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ['Kermit Frog', 'Fozzy Bear'];

const badHabit2 = 'shows up late';
const expected2 = ['Miss Piggy', 'Fozzy Bear'];

const badHabit3 = 'vapes too much';
const expected3 = [];

function santasNaughtyList(persons, badHabit) {}

function santasNaughtyListFunctional(persons, badHabit) {}

module.exports = {
  santasNaughtyList,
  functionalSantasNaughtyList,
};
