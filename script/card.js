export class Card{
	constructor(data, selector) {
		this.subscr = data.name;
		this.source = data.link;
		this.selector = selector;	}
	_getTemplate() {
		const templCard = document.querySelector(this.selector).content;// Разметка карточки.
		const elemGrid = templCard.cloneNode(true);
		return elemGrid;	}	
	_showImgPopup() {
		const popupImg = document.querySelector('.popup_img');
		const bigImgPopupImg = document.querySelector('.popup__img');
		const subscibePopupImg = document.querySelector('.popup__p');
		const name = this.subscr;
		const link = this.source;
		subscibePopupImg.textContent = name;
		bigImgPopupImg.src = link;
		bigImgPopupImg.alt = name;
		function closeByEsc (evt) {
			if(evt.key === 'Escape') {
				document.removeEventListener('keydown', closeByEsc );
				popupImg.classList.remove('opened');
			}	}
		document.addEventListener('keydown', closeByEsc );
		popupImg.classList.add('opened');	}
	createCard() {
		const elemGrid = this._getTemplate();
		elemGrid.querySelector('.element__text').textContent = this.subscr;
		const img = elemGrid.querySelector('.element__img');
		img.addEventListener('click', () => {this._showImgPopup();}	);
		img.src = this.source;
		img.alt = this.subscr;
		const likeButton = elemGrid.querySelector('.element__buttonlike');
		likeButton.addEventListener('click', function(evt) {	evt.target.classList.toggle('element__buttonlike_liked');	});
		const trashButton = elemGrid.querySelector('.element__buttontrash');
		trashButton.addEventListener('click', function(evt) {	evt.target.closest('.element').remove();	});
		return elemGrid;	}
}