export default class Popup {
	constructor(selector){
		this._selector = selector;
	}

/* Слушатели клика по оверлею/крестику и нажатия Esc добавляются при открытии в showPopup
и удаляются при закрытии в closePopup. Зачем здесь нужен отдельный метод назначения слушателя
и почему тогда не нужен метод снятия слушателя? Почему публичный? */

	_closeByEsc = (evt)=>{	// нажатие Esc
		if(evt.key === 'Escape') {	this.closePopup()	}
	}
	_close = (evt)=>{	// клик по оверлею/крестику
		if(evt.target.classList.contains('close') || evt.target.classList.contains('popup')) {	this.closePopup();	}
	}
	showPopup() {
		document.addEventListener('keydown', this._closeByEsc);
		this._selector.addEventListener('mousedown', this._close);
		this._selector.classList.add('opened');
	}
	closePopup() {
		document.removeEventListener('keydown', this._closeByEsc);
		this._selector.removeEventListener('mousedown', this._close);
		this._selector.classList.remove('opened');
	}
	
}