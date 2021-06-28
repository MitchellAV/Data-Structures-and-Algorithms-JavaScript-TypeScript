"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertion_sort = void 0;
var insertion_sort = function (unorderedList) {
    var orderedList = unorderedList;
    for (var i = 0; i < orderedList.length; i++) {
        var key = orderedList[i];
        var j = i - 1;
        while (j >= 0 && key < orderedList[j]) {
            orderedList[j + 1] = orderedList[j];
            j--;
        }
        orderedList[j + 1] = key;
    }
    return orderedList;
};
exports.insertion_sort = insertion_sort;
