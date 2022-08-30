/*  
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.

  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.

  Space: O(1) constant.

  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function selectionSort(nums = []) {
  let idx = 0;
  let minIdx = 0;

  while (idx < nums.length) {
    for (let i = idx; i < nums.length; i++) {
      if (nums[i] < nums[minIdx]) {
        minIdx = i;
      }
    }

    if (idx !== minIdx) {
      [nums[idx], nums[minIdx]] = [nums[minIdx], nums[idx]];
    }

    idx++;
    minIdx = idx;
  }

  return nums;
}

console.log(selectionSort(numsRandomOrder));

module.exports = { selectionSort };