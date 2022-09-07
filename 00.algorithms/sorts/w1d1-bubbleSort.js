const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function bubbleSort(nums = []) {
  let isSorted = false;

  while (isSorted === false) {
    isSorted = true;
    for (let i = 0; i < nums.length; i++) {
      const j = i + 1;
      if (nums[i] > nums[j]) {
        isSorted = false;
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

console.log(bubbleSort(numsRandomOrder));

module.exports = { bubbleSort };
