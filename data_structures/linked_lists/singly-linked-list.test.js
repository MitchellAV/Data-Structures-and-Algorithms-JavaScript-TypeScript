const { SinglyLinkedList } = require("./singly-linked-list");
describe("Singly Linked List Testing", () => {
  let sll;
  beforeEach(() => {
    sll = new SinglyLinkedList();
  });
  test("new singly linked list meets initial parameters", () => {
    expect(sll.length).toBe(0);
    expect(sll.head).toBe(null);
    expect(sll.tail).toBe(null);
  });

  test("add to tail of linked list", () => {
    sll.addToTail(4);
    expect(sll.length).toBe(1);
    expect(sll.head._data).toBe(4);
    expect(sll.tail._data).toBe(4);
    expect(sll.toArray()).toEqual([4]);
    sll.addToTail(5);
    expect(sll.length).toBe(2);
    expect(sll.head._data).toBe(4);
    expect(sll.tail._data).toBe(5);
    expect(sll.toArray()).toEqual([4, 5]);
  });
  test("add to head of linked list", () => {
    sll.addToHead(4);
    expect(sll.length).toBe(1);
    expect(sll.head._data).toBe(4);
    expect(sll.tail._data).toBe(4);
    expect(sll.toArray()).toEqual([4]);
    sll.addToHead(5);
    expect(sll.length).toBe(2);
    expect(sll.head._data).toBe(5);
    expect(sll.tail._data).toBe(4);
    expect(sll.toArray()).toEqual([5, 4]);
  });
  test("add to arbitrary index of linked list", () => {
    sll.addToTail(1);
    sll.addAtIndex(0, 2);
    expect(sll.length).toBe(2);
    expect(sll.head._data).toBe(2);
    expect(sll.tail._data).toBe(1);
    expect(sll.toArray()).toEqual([2, 1]);
    sll.addAtIndex(1, 6);
    expect(sll.length).toBe(3);
    expect(sll.head._data).toBe(2);
    expect(sll.tail._data).toBe(1);
    expect(sll.toArray()).toEqual([2, 6, 1]);
  });
  test("remove from tail of linked list", () => {
    sll.addToTail(1);
    sll.removeFromTail();
    expect(sll.length).toBe(0);
    expect(sll.head).toBe(null);
    expect(sll.tail).toBe(null);
    expect(sll.toArray()).toEqual([]);
    sll.addToTail(1);
    sll.addToTail(2);
    sll.addToTail(3);
    sll.removeFromTail();
    expect(sll.length).toBe(2);
    expect(sll.head._data).toBe(1);
    expect(sll.tail._data).toBe(2);
    expect(sll.toArray()).toEqual([1, 2]);
  });
  test("remove from head of linked list", () => {
    sll.addToTail(1);
    sll.removeFromHead();
    expect(sll.toArray()).toEqual([]);
    sll.addToTail(1);
    sll.addToTail(2);
    sll.addToTail(3);
    sll.removeFromHead();
    expect(sll.toArray()).toEqual([2, 3]);
    sll.removeFromHead();
    expect(sll.toArray()).toEqual([3]);
  });
  test("remove from arbitrary index of linked list", () => {
    sll.addToTail(1);
    sll.removeAtIndex(0);
    expect(sll.length).toEqual(0);
    expect(sll.toArray()).toEqual([]);
    sll.addToTail(1);
    sll.addToTail(2);
    sll.addToTail(3);
    sll.removeAtIndex(0);
    expect(sll.toArray()).toEqual([2, 3]);
    expect(sll.head._data).toEqual(2);
    expect(sll.tail._data).toEqual(3);
    expect(sll.length).toEqual(2);
    sll.addToTail(4);
    sll.addToTail(5);
    sll.addToTail(6);
    expect(sll.length).toEqual(5);
    expect(sll.head._data).toEqual(2);
    expect(sll.tail._data).toEqual(6);
    sll.removeAtIndex(3);
    expect(sll.toArray()).toEqual([2, 3, 4, 6]);
    expect(sll.tail._data).toEqual(6);
  });
  test("check if linked list is empty or not", () => {
    expect(sll.isEmpty()).toBe(true);
    sll.addToTail(4);
    expect(sll.isEmpty()).toBe(false);
  });
});
