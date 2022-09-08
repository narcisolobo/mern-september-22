/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
*/

const setA1 = [1, 2];
const setB1 = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const setA2 = [1, 2, 3];
const setB2 = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const setA3 = [4, 1, 2, 3, 4];
const setB3 = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/