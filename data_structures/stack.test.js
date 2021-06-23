const { Stack } = require("./stack");
describe("Stack Class", () => {
	let s;
	beforeEach(() => {
		s = new Stack();
	});
	test("is empty", () => {
		expect(s.isEmpty()).toBe(true);
	});

	test("able to push to stack", () => {
		s.push(5);
		expect(s.peek).toBe(5);
	});
	test("able to pop from stack", () => {
		s.push(5);
		s.push(7);
		expect(s.pop()).toBe(7);
	});
});
