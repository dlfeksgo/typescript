{
	//either: a or b
	interface Either<L, R> {
		left: () => L;
		right: () => R;
	}

	class SimpleEither<L, R> implements Either<L, R> {
		constructor(private leftValue: L, private rightValue: R) {}
		left(): L {
			return this.leftValue;
		}

		right(): R {
			return this.rightValue;
		}
	}

	const best = new SimpleEither(3, 'hello');
	const best2 = new SimpleEither({ name: 'kim' }, 3);

	// interface Either {
	// 	left: () => number;
	// 	right: () => number;
	// }

	// const either = new SimpleEither(1, 3);
	// either.left();
	// either.right();

	// class SimpleEither implements Either {
	// 	constructor(private leftValue: number, private rightValue: number) {}
	// 	left(): number {
	// 		return this.leftValue;
	// 	}

	// 	right(): number {
	// 		return this.rightValue;
	// 	}
	// }

	// const either = new SimpleEither(1, 3);
	// either.left();
	// either.right();
}
