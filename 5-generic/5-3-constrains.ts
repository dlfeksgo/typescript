interface Employee {
	pay(): void;
}

class FullTimeEmployee implements Employee {
	pay() {
		console.log('full time!!');
	}
	workFullTime() {}
}

class PartTimeEmployee implements Employee {
	pay() {
		console.log('part time!!');
	}
	partTime() {}
}

function payBad(employee: Employee): Employee {
	employee.pay();
	return employee;
}

function pay<T extends Employee>(employee: T): T {
	employee.pay();
	return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
	name: 'ellie',
	age: 20,
};

const obj2 = {
	animal: '🐕',
};

// function getValue<T>(obj: object, key: string): T {
// 	return obj[key];
// }

// console.log(getValue(obj, 'score'));
// console.log(getValue(obj, 'age'));
// console.log(getValue(obj2, 'animal'));

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}
console.log(getValue(obj, 'name'));
