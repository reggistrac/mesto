import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
	constructor(data, callback){
		super(data.popup);
		this._form = data.form;
		this._inputSelector = data.inputSelector;
		this._callback = callback;
	}

	_getInputValues(){
		const inputList = Array.from(this._form.querySelectorAll(this._inputSelector)	);
		const userInfo =[];
		inputList.forEach(function(item){
			userInfo.push(item.value);
			}
		);
		return userInfo;
	}
	setEventListeners(){
		super.setEventListeners();
		this._form.addEventListener('submit', this._callback);
	}
	showPopup(){
		this._form.addEventListener('submit', this._callback);
		super.showPopup();
	}
	closePopup(){
		this._form.removeEventListener('submit', this._callback);
		super.closePopup();
		this._form.reset();
	}
}