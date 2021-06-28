"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge_sort = void 0;
/**
 * Time: O(n log(n)) Best, Average, and Worst
 * Space: O(n) Worst
 * @param unorderedList
 * @returns sorted list ascending
 */
var merge_sort = function (unorderedList) {
    if (unorderedList.length === 0) {
        return [];
    }
    var low = 0;
    var high = unorderedList.length - 1;
    return merge_sort_helper(unorderedList, low, high);
};
exports.merge_sort = merge_sort;
var merge_sort_helper = function (array, low, high) {
    if (low === high)
        return [array[low]];
    var mid = low + Math.floor((high - low) / 2);
    // sort left
    var left = merge_sort_helper(array, low, mid);
    // sort right
    var right = merge_sort_helper(array, mid + 1, high);
    return merge(left, right);
};
var merge = function (left, right) {
    var mergedList = [];
    while (left.length !== 0 && right.length !== 0) {
        if (left[0] < right[0]) {
            var left_value = left.shift();
            if (left_value) {
                mergedList.push(left_value);
            }
        }
        else {
            var right_value = right.shift();
            if (right_value) {
                mergedList.push(right_value);
            }
        }
    }
    while (left.length !== 0) {
        var left_value = left.shift();
        if (left_value) {
            mergedList.push(left_value);
        }
    }
    while (right.length !== 0) {
        var right_value = right.shift();
        if (right_value) {
            mergedList.push(right_value);
        }
    }
    return mergedList;
};
