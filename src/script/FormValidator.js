export class FormValidator {
	constructor(settings, form) {
		this._settings = settings;
		this._form = form;
		this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector)	);
		this._button = this._form.querySelector(this._settings.submitButtonSelector);	  }

	resetError() {
		const errorList = Array.from(this._form.querySelectorAll(this._settings.errorSpanSelector));
		this._form.reset();
		errorList.forEach( (item)=>{ item.classList.remove(this._settings.errorClass);	}	);	}

	_hasInvalidInput() {
		return this._inputList.every(function(item) {	return item.validity.valid;	});	}

	_checkInputValidity(input) {
		const inputError = document.querySelector(`#${input.name}Error`);
		if(input.validity.valid) {	inputError.classList.remove(this._settings.errorClass);	}
		else {
			inputError.textContent = input.validationMessage;
			inputError.classList.add(this._settings.errorClass);	}	}
//		/\
//		||
//	Почему управлять состоянием кнопки одной функцией можно, а состоянием ошибки нет?
//	toggleButton в теории урока нам дали.
//		||
//		\/
	toggleButton() {
		if(this._hasInvalidInput()) {
			this._button.removeAttribute('disabled');
			this._button.classList.remove(this._settings.inactiveButtonClass);	}
		else {
			this._button.setAttribute('disabled', 'true');
			this._button.classList.add(this._settings.inactiveButtonClass);	}	}

	_setEventListeners() {
		this.toggleButton();	
		this._inputList.forEach((item)=>{
			item.addEventListener('input', () => {
				this._checkInputValidity(item);
				this.toggleButton();	});	});	}
	
	enableValidation() {
		this._form.addEventListener('submit', function(evt) {	evt.preventDefault();	});
		this._setEventListeners();
	}
	
}

