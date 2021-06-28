export const bubble_sort = (unorderedList: number[]) => {
  let orderedList = unorderedList;
  let n = orderedList.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      const elementA = orderedList[j];
      const elementB = orderedList[j + 1];
      if (elementA > elementB) {
        swap(orderedList, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return orderedList;
};

const swap = (array: number[], indexA: number, indexB: number) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};
