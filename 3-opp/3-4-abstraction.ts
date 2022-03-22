{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	interface ICoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	interface ICommercialCoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
		fillCoffeeBeans(beans: number): void;
		clean(): void;
	}

	class CoffeeMaker implements ICoffeeMaker, ICommercialCoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7;
		private coffeebeans: number = 0;

		private constructor(coffeebeans: number) {
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

		grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeebeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
				throw new Error('Not enough coffee beans!');
			}
			this.coffeebeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
		}

		preheat(): void {
			console.log('heating...🔥');
		}

		extract(shots: number): CoffeeCup {
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

	class AmateurUser {
		constructor(private machine: ICoffeeMaker) {}
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2);
			console.log(coffee);
		}
	}
	class ProBarista {
		constructor(private machine: ICommercialCoffeeMaker) {}
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2);
			this.machine.fillCoffeeBeans(40);
			this.machine.clean();
			console.log(coffee);
		}
	}

	const maker: CoffeeMaker = CoffeeMaker.makeMachine(32);
	const amateur = new AmateurUser(maker);
	const probarista = new ProBarista(maker);

	// amateur.makeCoffee();
	probarista.makeCoffee();
}
