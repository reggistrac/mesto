export class Card{
	constructor(data, selector, showImgPopup) {
		this._subscr = data.name;
		this._source = data.link;
		this._selector = selector;
		this._showImgPopup = showImgPopup	}

	_getTemplate() {
		const templCard = document.querySelector(this._selector).content;// Разметка карточки.
		const elemGrid = templCard.cloneNode(true);
		return elemGrid;	}

	createCard() {
		const elemGrid = this._getTemplate();
		elemGrid.querySelector('.element__text').textContent = this._subscr;
		const img = elemGrid.querySelector('.element__img');
		img.addEventListener('click', () => {this._showImgPopup(this._subscr, this._source);}	);
		img.src = this._source;
		img.alt = this._subscr;
		const likeButton = elemGrid.querySelector('.element__buttonlike');
		likeButton.addEventListener('click', function(evt) {	evt.target.classList.toggle('element__buttonlike_liked');	});
		const trashButton = elemGrid.querySelector('.element__buttontrash');
		trashButton.addEventListener('click', function(evt) {	evt.target.closest('.element').remove();	});
		return elemGrid;	}
}