import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';

class App {
	private readonly page: PageComponent;
	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent();
		this.page.attachTo(appRoot);

		const image = new ImageComponent(
			'My Image',
			'https://picsum.photos/600/300'
		);
		image.attachTo(appRoot, 'beforeend');
	}
}

let appRoot = document.querySelector('.document');
if (appRoot instanceof HTMLElement) {
	new App(appRoot);
}
