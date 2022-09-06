function orderedIntersection(sortedA = [], sortedB = []) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < sortedA.length && j < sortedB.length) {
    if (sortedA[i] === sortedB[j]) {
      if (result[result.length - 1] != sortedA[i]) {
        result.push(sortedA[i]);
        i++;
        j++;
      }
      if (sortedA[i] < sortedB[j]) {
        i++;
      } else {
        j++;
      }
    }
  }
  return result;
}
