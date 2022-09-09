// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/
function findConsecutiveSums(nums, targetSum) {}

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const nums2 = [];
const sum2 = 5;
const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected4 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

