{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	interface ICoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	class CoffeeMaker implements ICoffeeMaker {
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

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeebeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
				throw new Error('Not enough coffee beans!');
			}
			this.coffeebeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
		}

		private preheat(): void {
			console.log('heating...🔥');
		}

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling 2 shots...`);

			return {
				shots,
				hasMilk: false,
			};
		}

		clean(): void {
			console.log('cleaning...🧼');
		}

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	class LatteMaker extends CoffeeMaker {
		constructor(beans: number, public readonly serialNumber: string) {
			super(beans);
		}
		private steamMilk(): void {
			console.log(`Steaming some milk...`);
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			this.steamMilk();
			return {
				...coffee,
				hasMilk: true,
			};
		}
	}
	// const machine = new CoffeeMaker(22);
	const lattemachine = new LatteMaker(22, 'ABC');
	const coffee = lattemachine.makeCoffee(1);
	console.log(coffee);
	console.log(lattemachine.serialNumber);
}
