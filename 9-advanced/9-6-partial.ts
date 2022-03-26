{
	type ToDo = {
		title: string;
		description: string;
		label: string;
		priority: 'high' | 'low';
	};

	const todo: ToDo = {
		title: 'a',
		description: 'b',
		label: 'c',
		priority: 'high',
	};

	function updateToDo(todo: ToDo, filedsToUpdate: Partial<ToDo>): ToDo {
		return { ...todo, ...filedsToUpdate };
	}

	const test = updateToDo(todo, { priority: 'low' });
	console.log(test);
}
