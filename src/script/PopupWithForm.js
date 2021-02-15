import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
	constructor(data, callback){
		super(data.popup);
		this._popup = data.popup
		this._form = data.form;
		this._inputSelector = data.inputSelector;
		this._callback = callback;
	}

	_getInputValues(){
		const inputList = Array.from(this._form.querySelectorAll(this._inputSelector)	);
		const userInfo = {};
		inputList.forEach(function(item){
			userInfo[item.name] = item.value;
			}
		);
		return userInfo;
	}
	renderLoading=(isLoading)=>{
		if(isLoading){this._popup.querySelector('.submit').textContent='Сохранение...';}
		else{this._popup.querySelector('.submit').textContent='Сохранить';}
	}
	setEventListeners(){
		super.setEventListeners();
		this._form.addEventListener('submit', (evt)=>{
			evt.preventDefault();
			this._callback(this._getInputValues());
		});
	}
	closePopup(){
		super.closePopup();
		this._form.reset();
	}
}
