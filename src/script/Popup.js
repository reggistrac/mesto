export default class Popup {
	constructor(selector){
		this._selector = selector;
	}


	_closeByEsc = (evt)=>{
		if(evt.key === 'Escape') {	this.closePopup()	}
	}
	_close = (evt)=>{
		if(evt.target.classList.contains('close') || evt.target.classList.contains('popup')) {	this.closePopup();	}
	}
	setEventListeners(){
		this._selector.addEventListener('click', this._close);
	}									// Мне не жалко, но при 'click' попап закрывается если зажать кнопку на форме,
										// вывести за пределы и отпустить. А при 'mousedown' такого нет.
	showPopup() {
		document.addEventListener('keydown', this._closeByEsc);
		this._selector.classList.add('opened');
	}
	closePopup() {
		document.removeEventListener('keydown', this._closeByEsc);
		this._selector.classList.remove('opened');
	}
}