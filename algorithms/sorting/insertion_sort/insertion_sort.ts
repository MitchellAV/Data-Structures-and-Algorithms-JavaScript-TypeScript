export const insertion_sort = (unorderedList: number[]) => {
  let orderedList: number[] = unorderedList;

  for (let i = 0; i < orderedList.length; i++) {
    const key = orderedList[i];
    let j = i - 1;
    while (j >= 0 && key < orderedList[j]) {
      orderedList[j + 1] = orderedList[j];
      j--;
    }
    orderedList[j + 1] = key;
  }

  return orderedList;
};
