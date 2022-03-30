import { PageComponent } from './components/page.js';

class App {
	private readonly page: PageComponent;
	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent();
		this.page.attachTo(appRoot);
	}
}

let appRoot = document.querySelector('.document');
if (appRoot instanceof HTMLElement) {
	new App(appRoot);
}
