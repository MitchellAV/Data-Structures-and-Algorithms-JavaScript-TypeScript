"use strict";
/*
    Linked List

    Time Complexity

    Average
    Access: O(n)
    Search: O(n)
    Insert: O(1)
    Delete: O(1)

    Worst
    Access: O(n)
    Search: O(n)
    Insert: O(1)
    Delete: O(1)

    Space Complexity
    Worst: O(n)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkedList = void 0;
var SinglyLinkedListNode = /** @class */ (function () {
    function SinglyLinkedListNode(data) {
        this._data = data;
        this._next = null;
    }
    return SinglyLinkedListNode;
}());
/**
 *
 *
 */
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
    SinglyLinkedList.prototype.isEmpty = function () {
        return this._length === 0;
    };
    /**
     * Insert: O(1)
     * @description Adds a node with data to the tail of the linked list
     * @param data
     */
    SinglyLinkedList.prototype.addToTail = function (data) {
        var node = new SinglyLinkedListNode(data);
        // if linked list is empty
        if (this._head === null) {
            this._head = node;
        }
        // if linked list is not empty
        else {
            this._tail._next = node;
        }
        this._tail = node;
        this._length++;
    };
    /**
     * addToHead
     */
    SinglyLinkedList.prototype.addToHead = function (data) {
        var node = new SinglyLinkedListNode(data);
        // if linked list is empty
        if (this._head === null) {
            this._head = node;
        }
        // if linked list is not empty
        else {
            node._next = this._head;
            this._head = node;
        }
        this._tail = node;
        this._length++;
    };
    SinglyLinkedList.prototype.addAtIndex = function (index, data) {
        if (index >= this._length)
            throw new Error("Index is out of bounds");
        if (index < 0)
            throw new Error("Index must be a non-negative number");
        var node = new SinglyLinkedListNode(data);
        if (index === 0) {
            node._next = this._head;
            this._head = node;
        }
        else {
            var currNode = this._head;
            var prevNode = currNode;
            var currIndex = 0;
            while (currNode && currIndex < index) {
                prevNode = currNode;
                currNode = currNode._next || null;
                currIndex++;
            }
            node._next = currNode;
            prevNode._next = node;
        }
        this._length++;
    };
    SinglyLinkedList.prototype.removeFromTail = function () {
        if (this._length === 0)
            throw new Error("Linked List is empty and there are no items to remove");
        var removedNode;
        if (this._length === 1) {
            removedNode = this._head;
            this._head = null;
            this._tail = null;
        }
        else {
            var currNode = this._head;
            var currIndex = 0;
            while (currIndex + 2 < this._length) {
                currNode = currNode._next;
                currIndex++;
            }
            removedNode = currNode._next;
            currNode._next = null;
        }
        this._length--;
        return removedNode;
    };
    SinglyLinkedList.prototype.removeFromHead = function () {
        if (this._length === 0)
            throw new Error("Linked List is empty and there are no items to remove");
        var removedNode;
        if (this._length === 1) {
            removedNode = this._head;
            this._head = null;
            this._tail = null;
        }
        else {
            removedNode = this._head;
            this._head = this._head._next;
        }
        return removedNode;
    };
    // public removeAtIndex(index: number, data: T) {
    //   if (index >= this._length) throw new Error("Index is out of bounds");
    //   if (index < 0) throw new Error("Index must be a non-negative number");
    //   const node = new SinglyLinkedListNode(data);
    //   if (index === 0) {
    //     node._next = this._head;
    //     this._head = node;
    //   } else {
    //     let currNode = this._head;
    //     let prevNode = currNode;
    //     let currIndex = 0;
    //     while (currIndex < index) {
    //       prevNode = currNode;
    //       currNode = currNode?._next || null;
    //       currIndex++;
    //     }
    //     node._next = currNode;
    //     prevNode!._next = node;
    //   }
    //   this._length++;
    // }
    SinglyLinkedList.prototype.printLinkedList = function () {
        var node = this._head;
        var linkedListData = [];
        while (node !== null) {
            linkedListData.push(node._data);
            node = node._next;
        }
        return linkedListData;
    };
    SinglyLinkedList.prototype.indexOf = function (data) {
        var currNode = this._head;
        var currIndex = 0;
        var found = false;
        while (currNode && currNode._data !== data) {
            currNode = currNode._next;
            currIndex++;
        }
        if (currIndex < this._length) {
            found = true;
        }
        return found ? currIndex : -1;
    };
    return SinglyLinkedList;
}());
exports.SinglyLinkedList = SinglyLinkedList;
