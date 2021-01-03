export class FormValidator {
	constructor(settings, form) {
		this._settings = settings;
		this._form = form;	  }

	resetError() {
		const errorList = Array.from(this._form.querySelectorAll('.eror'));
		this._form.reset();
		errorList.forEach( (item)=>{ item.classList.remove(this._settings.errorClass);	}	);	}
	
	_checkInputValidity(input) {
		const inputError = document.querySelector(`#${input.name}Error`);
		if(input.validity.valid) {	inputError.classList.remove(this._settings.errorClass);	}
		else {
			inputError.textContent = input.validationMessage;
			inputError.classList.add(this._settings.errorClass);	}	}

	_hasInvalidInput(inputList) {
		return inputList.every(function(item) {	return item.validity.valid;	});	}

	toggleButton(inputList, button) {
		if(this._hasInvalidInput(inputList)) {
			button.removeAttribute('disabled');
			button.classList.remove(this._settings.inactiveButtonClass);	}
		else {
			button.setAttribute('disabled', 'true');
			button.classList.add(this._settings.inactiveButtonClass);	}	}

	_setEventListeners() {
		const inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
		const button = this._form.querySelector('button[type="submit"]');
		this.toggleButton(inputList, button);	
		inputList.forEach((item)=>{
			item.addEventListener('input', () => {
				this._checkInputValidity(item);
				this.toggleButton(inputList, button);	});	});	}
	
	enableValidation() {
		this._form.addEventListener('submit', function(evt) {	evt.preventDefault();	});
		this._setEventListeners();
	}
	
}

