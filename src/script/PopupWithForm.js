import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
	constructor(popup, form, callback){
		super(popup);
		this._form = form;
		this._callback = callback;
	}
	showPopup(){
		this._form.addEventListener('submit', this._callback);
		super.showPopup();
	}
	closePopup(){
		this._form.removeEventListener('submit', this._callback);
		super.closePopup();
	}
}