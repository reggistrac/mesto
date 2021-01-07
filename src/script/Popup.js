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