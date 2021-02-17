export default class Popup {
	constructor(popup){
		this._popup = popup;
	}


	_closeByEsc = (evt)=>{
		if(evt.key === 'Escape') {	this.closePopup()	}
	}
	_close = (evt)=>{
		if(evt.target.classList.contains('close') || evt.target.classList.contains('popup')) {	this.closePopup();	}
	}
	setEventListeners(){
		this._popup.addEventListener('mousedown', this._close);
	}
	showPopup() {
		document.addEventListener('keydown', this._closeByEsc);
		this._popup.classList.add('opened');
	}
	closePopup() {
		document.removeEventListener('keydown', this._closeByEsc);
		this._popup.classList.remove('opened');
	}
}