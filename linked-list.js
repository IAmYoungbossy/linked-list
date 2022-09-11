// Node class
class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	// Adds a new node containing value to the start of the list.
	prepend(data) {
		this.head = new Node(data, this.head);
	}

	// Adds a new node containing value to the end of the list.
	append(data) {
		let tail = this.head;
		if (tail == null) {
			this.prepend(data);
			return;
		}
		while (tail.next !== null) tail = tail.next;
		tail.next = new Node(data);
	}

	//  Returns the total number of nodes in the list.
	/** Note: All conditions with index variable will only be used
	 * when method is called by dataAtIndexOf(). */
	size(index) {
		if (!this.head) return "Empty Linked List.";
		let i = 1,
			current = this.head;
		if (current.next == null) return i;
		if (i === index) return this.head;
		while (current) {
			current = current.next;
			if (current == null) i--;
			i++;
			if (i === index) return current;
		}
		if (i !== index && index !== undefined) return "No data for Index.";
		return i;
	}

	// Returns the first node in the list.
	headData() {
		return this.head;
	}

	// Returns the last node in the list.
	tailData() {
		while (this.head.next) this.head = this.head.next;
		return this.head;
	}

	//  Returns the node at the given index.
	dataAtIndexOf(index) {
		return this.size(index);
	}

	// Removes the last element from the list.
	pop() {
		this.dataAtIndexOf(+this.size() - 1).next = null;
		return list.toStrings();
	}

	/**returns true if the passed in value is in
	 * the list and otherwise returns false. */
	contains(value) {
		while (this.head) {
			if (this.head.data === value) return true;
			this.head = this.head.next;
		}
		return false;
	}

	/** Returns the index of the node containing value,
	 * or null if not found. */
	findIndexOfData(value) {
		let i = 1,
			current = this.head;
		while (current) {
			if (current.data === value) return i;
			current = current.next;
			i++;
		}
		return null;
	}

	/** Represents your LinkedList objects as strings, so you can
	 * print them out and preview them in the console. */
	toStrings() {
		let arr = [],
			i = 1,
			current = this.head;
		while (current) {
			if (i === 1) arr.push(`Head(${current.data}) => `);
			else if (current.next == null) arr.push(`(${current.data}) => null`);
			else arr.push(`(${current.data}) =>`);
			current = current.next;
			i++;
		}
		return arr.join(" ");
	}

	// Inserts a new node with the provided value at the given index.
	insertAt(data, index) {
		let current = this.head,
			prev,
			next,
			i = 1;
		while (current) {
			if (i == index - 1) prev = current;
			if (i == index) next = current;
			current = current.next;
			i++;
		}
		prev.next = new Node(data, next);
    return this.toStrings();
	}

	// Removes the node at the given index.
	removeAt(index) {
		let current = this.head,
			prev,
			next,
			i = 1;
		while (current) {
			if (i == index - 1) prev = current;
			if (i == index + 1) next = current;
			current = current.next;
			i++;
		}
		prev.next = next;
    return this.toStrings();
	}
}

const list = new LinkedList();
list.prepend(100);
list.append(200);
list.append(300);
list.append(400);
list.append(500);
list.append(600);
console.log(list.toStrings(3));