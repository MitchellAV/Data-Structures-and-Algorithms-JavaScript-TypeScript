const { SinglyLinkedList } = require("./singly-linked-list");
describe("Singly Linked List Testing", () => {
	let sll;
	beforeEach(() => {
		sll = new SinglyLinkedList();
	});
	test("new singly linked list meets initial parameters", () => {
		expect(sll.length).toBe(0);
		expect(sll.tail).toBe(null);
		expect(sll.head).toBe(null);
	});

	test("able to add to linked list", () => {
		sll.add(4);
		expect(sll.length).toBe(1);
		expect(sll.tail).toBe(4);
		sll.add(5);
		expect(sll.length).toBe(2);
		expect(sll.tail).toBe(5);
	});
	test("");
});
