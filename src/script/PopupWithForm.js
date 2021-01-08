import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
	constructor(popup, form, callback){
		super(popup);
		this._form = form;
		this._callback = callback;
	}
// Собирает данные и сбрасывает форму обработчик субмита.

	showPopup(){
		this._form.addEventListener('submit', this._callback);
		super.showPopup();
	}
	closePopup(){
		this._form.removeEventListener('submit', this._callback);
		super.closePopup();
	}
}