export class MinHeap<T> {
	heap: T[];
	constructor() {
		this.heap = [];
	}

	parent(i: number) {
		return (i - 1) / 2;
	}

	left(i: number) {
		return 2 * i + 1;
	}

	right(i: number) {
		return 2 * i + 2;
	}

	static swap<T>(left: T, right: T) {
		const temp: T = left;
		right = left;
		left = temp;
	}

	peek() {}
	push() {}
	pop() {}
	delete() {}
	replace() {}
}
