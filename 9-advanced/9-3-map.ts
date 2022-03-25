type Video = {
	title: string;
	author: string;
};

type Optional<T> = {
	[P in keyof T]?: T[P]; //for...in
};

type ReadOnly<T> = {
	readonly [P in keyof T]?: T[P];
};

type VideoOptional = Optional<Video>;

const videoOp: VideoOptional = {
	title: 'hi',
};

type Animal = {
	name: string;
	age: number;
};

const animal: Optional<Animal> = {
	name: 'dog',
};

animal.name = 'cat';

const video: ReadOnly<Video> = {
	title: 'hihi',
};
