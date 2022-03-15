{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	const BEANS_GRAMM_PER_SHOT: number = 7;
	let coffeebeans: number = 0;
	function makeCoffee(shots: number): CoffeeCup {
		if (coffeebeans < shots * BEANS_GRAMM_PER_SHOT) {
			throw new Error('Not enough coffee beans!');
		}
		coffeebeans -= shots * BEANS_GRAMM_PER_SHOT;
		return {
			shots, //shots : shots
			hasMilk: false,
		};
	}

	coffeebeans += 3 * BEANS_GRAMM_PER_SHOT;
	const coffee = makeCoffee(2);
	console.log(coffee);
}
