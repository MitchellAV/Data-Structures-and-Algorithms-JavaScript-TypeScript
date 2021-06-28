/**
 * Time: O(n log(n)) Best, Average, and Worst
 * Space: O(n) Worst
 * @param unorderedList
 * @returns sorted list ascending
 */
export const merge_sort = (unorderedList: number[]) => {
  if (unorderedList.length === 0) {
    return [];
  }
  let low = 0;
  let high = unorderedList.length - 1;
  return merge_sort_helper(unorderedList, low, high);
};

const merge_sort_helper = (
  array: number[],
  low: number,
  high: number
): number[] => {
  if (low === high) return [array[low]];
  let mid = low + Math.floor((high - low) / 2);

  // sort left
  let left = merge_sort_helper(array, low, mid);
  // sort right
  let right = merge_sort_helper(array, mid + 1, high);

  return merge(left, right);
};

const merge = (left: number[], right: number[]): number[] => {
  let mergedList: number[] = [];
  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      let left_value = left.shift();
      if (left_value) {
        mergedList.push(left_value);
      }
    } else {
      let right_value = right.shift();
      if (right_value) {
        mergedList.push(right_value);
      }
    }
  }
  while (left.length !== 0) {
    let left_value = left.shift();
    if (left_value) {
      mergedList.push(left_value);
    }
  }
  while (right.length !== 0) {
    let right_value = right.shift();
    if (right_value) {
      mergedList.push(right_value);
    }
  }

  return mergedList;
};
