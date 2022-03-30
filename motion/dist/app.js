import { PageComponent } from './components/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
    }
}
let appRoot = document.querySelector('.document');
if (appRoot instanceof HTMLElement) {
    new App(appRoot);
}
