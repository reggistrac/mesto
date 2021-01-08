export default class Card{
	constructor(data, selector, showImgPopup) {
		this._subscribe = data.name;
		this._source = data.link;
		this._selector = selector;
		this._showImgPopup = showImgPopup	}

	_getTemplate() {
		const templCard = document.querySelector(this._selector).content;// Разметка карточки.
		const elemGrid = templCard.cloneNode(true);
		return elemGrid;	}

	_handleClick = ()=>{this._showImgPopup(this._subscribe, this._source);	}
	_handlelike(evt) {	evt.target.classList.toggle('element__buttonlike_liked');	}
	_handleTrash(evt) {	evt.target.closest('.element').remove();	}
/*	"Лучше всего удалить сам элемент карточки this._element
	После удаления this._element также лучше занулять: this._element = null;" - не понял, что лучше удалять? */

	_setEventListener(item, event, metod) {	item.addEventListener(event, metod);	}

	createCard() {
		const newElement = this._getTemplate();
		newElement.querySelector('.element__text').textContent = this._subscribe;
		const img = newElement.querySelector('.element__img');
		this._setEventListener(img,'click', this._handleClick);
		img.src = this._source;
		img.alt = this._subscribe;
		const likeButton = newElement.querySelector('.element__buttonlike');
		this._setEventListener(likeButton,'click', this._handlelike);
		const trashButton = newElement.querySelector('.element__buttontrash');
		this._setEventListener(trashButton,'click', this._handleTrash);
		return newElement;	}
}
