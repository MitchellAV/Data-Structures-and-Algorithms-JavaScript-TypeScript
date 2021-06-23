"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinHeap = void 0;
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [];
    }
    MinHeap.prototype.parent = function (i) {
        return (i - 1) / 2;
    };
    MinHeap.prototype.left = function (i) {
        return 2 * i + 1;
    };
    MinHeap.prototype.right = function (i) {
        return 2 * i + 2;
    };
    MinHeap.swap = function (left, right) {
        var temp = left;
        right = left;
        left = temp;
    };
    MinHeap.prototype.peek = function () { };
    MinHeap.prototype.push = function () { };
    MinHeap.prototype.pop = function () { };
    MinHeap.prototype.delete = function () { };
    MinHeap.prototype.replace = function () { };
    return MinHeap;
}());
exports.MinHeap = MinHeap;
