export class Stack<T> {
	private stack: T[];
	constructor(items: T[]) {
		this.stack = items || [];
	}
	public get peek() {
		return this.isEmpty() ? undefined : this.stack[this.stack.length - 1];
	}
	public pop() {
		return this.stack.pop();
	}

	public push(item: T) {
		return this.stack.push(item);
	}
	public isEmpty() {
		return this.stack.length === 0 ? true : false;
	}
}
