// Merge helper function
// Merges two already sorted arrays

function merge(left = [], right = []) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while(leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx < right[rightIdx]]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx])
      rightIdx++;
    }
  }

  while (leftIdx < left.length) {
    result.push(left[leftIdx]);
    leftIdx++;
  }

  while (rightIdx < right.length) {
    result.push(right[rightIdx]);
    rightIdx++
  }
  return result;
}

function mergeSort(arr) {
  // base case
  if (arr.length === 1) {
    return arr;
  }

  const midIdx = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIdx);
  const right = arr.slice(midIdx);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

const myArr = [4, 1, 6, 9, 2, 5, 3, 8, 7, 0];
console.log(mergeSort(myArr));