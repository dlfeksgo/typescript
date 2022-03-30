export class ImageComponent {
	private element: HTMLElement;
	constructor(title: string, url: string) {
		// this.element = document.createElement('img');
		// this.element.setAttribute('src', 'https://picsum.photos/600/300');
		const template = document.createElement('template');
		template.innerHTML = `<section class="image"><div class="image__holder"><img class="image__thumbnail"></div><p class="image__title"></p></section>`;

		this.element = template.content.firstElementChild as HTMLElement;
		const imageElement = this.element.querySelector(
			'.image__thumbnail'
		) as HTMLImageElement;
		imageElement.src = url;
		imageElement.alt = title;

		const imageTitle = this.element.querySelector(
			'.image__title'
		) as HTMLParagraphElement;
		imageTitle.textContent = title;
	}

	attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
		parent.insertAdjacentElement(position, this.element);
	}
}
