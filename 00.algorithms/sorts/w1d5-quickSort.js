function quickSort(arr = [], start = 0, end = arr.length-1) {
  if (start < end) {
    const pivotIdx = partition(arr, start, end);
    quickSort(arr, start, pivotIdx-1);
    quickSort(arr, pivotIdx+1, end);
  }
  return arr;
}

function partition(arr = [], start = 0, end = arr.length-1) {
  const pivot = arr[end];
  let pivotIdx = start;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
      pivotIdx++
    }
  }
  [arr[pivotIdx], arr[end]] = [arr[end], arr[pivotIdx]]
  return pivotIdx;
}
