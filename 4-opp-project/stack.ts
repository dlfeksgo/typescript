{
	interface Stack {
		readonly size: number;
		push(value: string): void;
		pop(): string;
	}

	type StackIndex = {
		readonly value: string;
		readonly next?: StackIndex;
	};

	class StackImpl implements Stack {
		private _size: number = 0;
		private head?: StackIndex;
		get size() {
			return this._size;
		}

		push(value: string) {
			const index: StackIndex = { value: value, next: this.head };
			this.head = index;
			this._size++;
		}
		pop(): string {
			if (this.head == null) {
				throw new Error('Stack is empty!');
			}
			const index = this.head;
			this.head = index.next;
			this._size--;
			return index.value;
		}
	}

	const stack = new StackImpl();
	stack.push('Ellie 1');
	stack.push('Bob 2');
	stack.push('Steve 3');
	while (stack.size !== 0) {
		console.log(stack.pop());
	}
}
