"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkedList = void 0;
var SinglyLinkedListNode = /** @class */ (function () {
    function SinglyLinkedListNode(data) {
        this._data = data;
        this._next = null;
    }
    return SinglyLinkedListNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this._length = 0;
        this._head = null;
        this._tail = null;
    }
    Object.defineProperty(SinglyLinkedList.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SinglyLinkedList.prototype, "tail", {
        get: function () {
            return this._tail ? this._tail._data : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SinglyLinkedList.prototype, "head", {
        get: function () {
            return this._head ? this._head._data : null;
        },
        enumerable: false,
        configurable: true
    });
    SinglyLinkedList.prototype.add = function (data) {
        var node = new SinglyLinkedListNode(data);
        if (this._head === null) {
            this._head = node;
        }
        else {
            this._tail = node;
        }
        this._tail = node;
        this._length++;
    };
    return SinglyLinkedList;
}());
exports.SinglyLinkedList = SinglyLinkedList;
