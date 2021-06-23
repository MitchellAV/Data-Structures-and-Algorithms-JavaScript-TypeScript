"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(items) {
        this.stack = items || [];
    }
    Object.defineProperty(Stack.prototype, "peek", {
        get: function () {
            return this.isEmpty() ? undefined : this.stack[this.stack.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Stack.prototype.pop = function () {
        return this.stack.pop();
    };
    Stack.prototype.push = function (item) {
        return this.stack.push(item);
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length === 0 ? true : false;
    };
    return Stack;
}());
exports.Stack = Stack;
