const { SinglyLinkedList } = require("./singly-linked-list");
describe("Singly Linked List Testing", () => {
  let sll;
  beforeEach(() => {
    sll = new SinglyLinkedList();
  });
  test("new singly linked list meets initial parameters", () => {
    expect(sll.length).toBe(0);
  });

  test("add to tail of linked list", () => {
    sll.addToTail(4);
    expect(sll.length).toBe(1);
    expect(sll.printLinkedList()).toEqual([4]);
    sll.addToTail(5);
    expect(sll.length).toBe(2);
    expect(sll.printLinkedList()).toEqual([4, 5]);
  });
  test("add to head of linked list", () => {
    sll.addToHead(4);
    expect(sll.length).toBe(1);
    expect(sll.printLinkedList()).toEqual([4]);
    sll.addToHead(5);
    expect(sll.length).toBe(2);

    expect(sll.printLinkedList()).toEqual([5, 4]);
  });
  test("add to arbitrary index of linked list", () => {
    sll.addToTail(1);
    sll.addAtIndex(0, 2);
    sll.addAtIndex(0, 3);
    expect(sll.printLinkedList()).toEqual([3, 2, 1]);
    sll.addAtIndex(2, 3);
    expect(sll.printLinkedList()).toEqual([3, 2, 3, 1]);
    expect(sll.indexOf(5)).toBe(-1);
    expect(sll.indexOf(2)).toBe(1);
  });
  test("remove from tail of linked list", () => {
    sll.addToTail(1);
    sll.removeFromTail();
    expect(sll.printLinkedList()).toEqual([]);
    sll.addToTail(1);
    sll.addToTail(2);
    sll.addToTail(3);
    sll.removeFromTail();
    expect(sll.printLinkedList()).toEqual([1, 2]);
    sll.removeFromTail();
    expect(sll.printLinkedList()).toEqual([1]);
  });
  test("remove from head of linked list", () => {
    sll.addToTail(1);
    sll.removeFromHead();
    expect(sll.printLinkedList()).toEqual([]);
    sll.addToTail(1);
    sll.addToTail(2);
    sll.addToTail(3);
    sll.removeFromHead();
    expect(sll.printLinkedList()).toEqual([2, 3]);
    sll.removeFromHead();
    expect(sll.printLinkedList()).toEqual([3]);
  });
  test("check if linked list is empty or not", () => {
    expect(sll.isEmpty()).toBe(true);
    sll.addToTail(4);
    expect(sll.isEmpty()).toBe(false);
  });
});
