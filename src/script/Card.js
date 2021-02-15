export default class Card{
	constructor(data, selector, showImgPopup, showPoupSure, likeing) {
		this._data = data;
		this._subscribe = data.title;
		this._source = data.link;
		this._owner = data.owner._id;
		this._id = data._id;
		this._likes = data.likes;
		this._selector = selector;
		this._showImgPopup = showImgPopup;
		this._showPoupSure = showPoupSure;	
		this._likeing = likeing;	}

	_getTemplate() {
		const templCard = document.querySelector(this._selector).content;// Разметка карточки.
		const elemGrid = templCard.cloneNode(true);
		return elemGrid;	}
	_handleClick = ()=>{this._showImgPopup(this._subscribe, this._source);	}

	_handlelike = (evt)=>{
		this._likeing(
			this._data,
			(result)=>{
				evt.target.parentElement.nextElementSibling.textContent = result.likes.length;
				evt.target.classList.toggle('element__buttonlike_liked');
			}
		);
	}
//	_handleTrash(evt) {	evt.target.closest('.element').remove();	}
	_handleTrash = (evt)=>{		this._showPoupSure(evt.target.closest('.element'), this._id);	}

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
		newElement.querySelector('.element__count').textContent = this._likes.length;
		if(this._likes.some(function(item){return item._id==='d5e262bcd7280f9c0c11a8e4'})){
			likeButton.firstElementChild.classList.toggle('element__buttonlike_liked');
		}
		const trashButton = newElement.querySelector('.element__buttontrash');
		this._setEventListener(trashButton,'click', this._handleTrash);
		if(this._owner !== 'd5e262bcd7280f9c0c11a8e4'){
			console.log(this._owner);
			trashButton.style.display = 'none';
		}
		else{console.log(this._owner+' Моё');}	
		return newElement;	}
}
