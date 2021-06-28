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

class SinglyLinkedListNode<T> {
  public _data: T;
  public _next: SinglyLinkedListNode<T> | null;
  constructor(data: T) {
    this._data = data;
    this._next = null;
  }
}

interface SinglyLinkedListTypes<T> {
  length: number;
  head: SinglyLinkedListNode<T> | null;
  tail: SinglyLinkedListNode<T> | null;

  isEmpty(): boolean;

  addToTail(data: T): void;
  addToHead(data: T): void;
  addAtIndex(index: number, data: T): void;

  removeFromTail(): SinglyLinkedListNode<T> | null;
  removeFromHead(): SinglyLinkedListNode<T> | null;
  removeAtIndex(index: number): SinglyLinkedListNode<T> | null;

  toArray(): T[];
}
/**
 *
 *
 */
export class SinglyLinkedList<T> implements SinglyLinkedListTypes<T> {
  private _head: SinglyLinkedListNode<T> | null;
  private _tail: SinglyLinkedListNode<T> | null;
  private _length: number;
  constructor() {
    this._length = 0;
    this._head = null;
    this._tail = null;
  }

  public get length() {
    return this._length;
  }
  public get head() {
    return this._head;
  }
  public get tail() {
    return this._tail;
  }

  public isEmpty() {
    return this._length === 0;
  }

  /**
   * Insert: O(1)
   * @description Adds a node with data to the tail of the linked list
   * @param data
   */
  public addToTail(data: T) {
    const node = new SinglyLinkedListNode(data);

    // if linked list is empty
    if (this._head === null) {
      this._head = node;
    }
    // if linked list is not empty
    else {
      if (this._tail) {
        this._tail._next = node;
      }
    }
    this._tail = node;
    this._length++;
  }

  /**
   * Insert: O(1)
   * @description Adds a node with data to the head of the linked list
   * @param data
   */
  public addToHead(data: T) {
    const node = new SinglyLinkedListNode(data);

    // if linked list is empty
    if (this._head === null) {
      this._head = node;
      this._tail = node;
    }
    // if linked list is not empty
    else {
      node._next = this._head;
      this._head = node;
    }
    this._length++;
  }
  /**
   * Insert: O(n)
   * @description Adds a node with data at an index of the linked list
   * @param index
   * @param data
   */
  public addAtIndex(index: number, data: T) {
    if (index >= this._length) throw new Error("Index is out of bounds");
    if (index < 0) throw new Error("Index must be a non-negative number");

    const node = new SinglyLinkedListNode(data);

    if (index === 0) {
      node._next = this._head;
      this._head = node;
    } else {
      let currNode = this._head;
      let prevNode: SinglyLinkedListNode<T> | null;
      let currIndex = 0;
      while (currNode && currIndex < index) {
        prevNode = currNode;
        currNode = currNode._next;
        currIndex++;
      }
      node._next = currNode;
      prevNode!._next = node;
    }
    this._length++;
  }

  public removeFromTail() {
    if (this._length === 0)
      throw new Error("Linked List is empty and there are no items to remove");
    let removedNode;
    if (this._length === 1) {
      removedNode = this._head;
      this._head = null;
      this._tail = null;
    } else {
      let currNode = this._head;
      let prevNode = currNode;
      while (currNode && currNode._next) {
        prevNode = currNode;
        currNode = currNode._next;
      }
      prevNode!._next = null;
      this._tail = prevNode;

      removedNode = currNode!._next;
      currNode!._next = null;
    }
    this._length--;
    return removedNode;
  }
  public removeFromHead() {
    if (this._length === 0)
      throw new Error("Linked List is empty and there are no items to remove");
    let removedNode;

    if (this._length === 1) {
      removedNode = this._head;
      this._head = null;
      this._tail = null;
    } else {
      removedNode = this._head;
      this._head = this._head!._next;
    }
    return removedNode;
  }
  public removeAtIndex(index: number) {
    if (index >= this._length) throw new Error("Index is out of bounds");
    if (index < 0) throw new Error("Index must be a non-negative number");
    if (this._length === 0)
      throw new Error("Linked List is empty and there are no items to remove");

    let removedNode: SinglyLinkedListNode<T> | null;
    if (index === 0) {
      removedNode = this.removeFromHead();
    } else if (index === this._length - 1) {
      removedNode = this.removeFromTail();
      console.log("ghit");
    } else {
      let currNode = this._head;
      let prevNode;
      let currIndex = 0;
      while (currNode && currIndex < index) {
        prevNode = currNode;
        currNode = currNode._next;
        currIndex++;
      }
      removedNode = currNode;
      if (prevNode && currNode) {
        let nextNode = currNode?._next;
        prevNode._next = nextNode;
      }
    }
    this._length--;
    return removedNode;
  }

  public toArray() {
    let node = this._head;
    let linkedListData = [];
    while (node !== null) {
      linkedListData.push(node._data);
      node = node._next;
    }
    return linkedListData;
  }

  public indexOf(data: T) {
    let currNode = this._head;
    let currIndex = 0;
    let found = false;
    while (currNode && currNode._data !== data) {
      currNode = currNode._next;
      currIndex++;
    }
    if (currIndex < this._length) {
      found = true;
    }
    return found ? currIndex : -1;
  }
}
