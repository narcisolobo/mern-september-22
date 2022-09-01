// cSpell:words nums

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