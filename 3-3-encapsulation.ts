{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	//public, private, protected 클래스에서는 따로 작성하지 않으면 public
	class CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7;
		private coffeebeans: number = 0;

		constructor(coffeebeans: number) {
			this.coffeebeans = coffeebeans;
		}

		static makeMachine(coffeebeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeebeans);
		}

		fillCoffeeBeans(coffeebeans: number) {
			if (coffeebeans < 0) {
				throw new Error('원두 갯수는 0 이상이어야 합니다.');
			}
			this.coffeebeans += coffeebeans;
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

	const maker = new CoffeeMaker(0);
	maker.fillCoffeeBeans(40);
	console.log(maker);
}
