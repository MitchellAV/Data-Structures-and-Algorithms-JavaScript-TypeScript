class SinglyLinkedListNode<T> {
	public _data: T | null;
	public _next: SinglyLinkedListNode<T> | null;
	constructor(data: T) {
		this._data = data;
		this._next = null;
	}
}
export class SinglyLinkedList<T> {
	private _head: SinglyLinkedListNode<T> | null;
	private _tail: SinglyLinkedListNode<T> | null;
	private _length: number;
	constructor() {
		this._length = 0;
		this._head = null;
		this._tail = null;
	}

	get length() {
		return this._length;
	}
	get tail() {
		return this._tail ? this._tail._data : null;
	}
	get head() {
		return this._head ? this._head._data : null;
	}
	public add(data: T) {
		const node = new SinglyLinkedListNode(data);

		if (this._head === null) {
			this._head = node;
		} else {
			this._tail = node;
		}
		this._tail = node;
		this._length++;
	}
}
