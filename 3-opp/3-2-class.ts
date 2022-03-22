{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	class CoffeeMaker {
		static BEANS_GRAMM_PER_SHOT: number = 7;
		coffeebeans: number = 0;

		constructor(coffeebeans: number) {
			this.coffeebeans = coffeebeans;
		}

		static makeMachine(coffeebeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeebeans);
		}

		makeCoffee(shots: number): CoffeeCup {
			if (this.coffeebeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
				throw new Error('Not enough coffee beans!');
			}
			this.coffeebeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
			return {
				shots,
				hasMilk: false,
			};
		}
	}

	const maker = new CoffeeMaker(32);
	console.log(maker);
	const maker2 = new CoffeeMaker(24);
	console.log(maker2);

	const maker3 = CoffeeMaker.makeMachine(22);
	console.log(maker3);
}
