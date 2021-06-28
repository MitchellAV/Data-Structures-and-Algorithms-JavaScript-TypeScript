"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubble_sort = void 0;
var bubble_sort = function (unorderedList) {
    var orderedList = unorderedList;
    var n = orderedList.length;
    for (var i = 0; i < n - 1; i++) {
        var swapped = false;
        for (var j = 0; j < n - i - 1; j++) {
            var elementA = orderedList[j];
            var elementB = orderedList[j + 1];
            if (elementA > elementB) {
                swap(orderedList, j, j + 1);
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
    return orderedList;
};
exports.bubble_sort = bubble_sort;
var swap = function (array, indexA, indexB) {
    var temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
};
