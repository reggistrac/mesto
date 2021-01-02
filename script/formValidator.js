export class FormValidator {
	constructor(data, selector) {
		this.data = data;
		this.selector = selector;	}
	_set() {
		function checkInputValidity(input, errorClass) {
			const inputError = document.querySelector(`#${input.name}Error`);
			if(input.validity.valid) {	inputError.classList.remove(errorClass);	}
				else {
					inputError.textContent = input.validationMessage;
					inputError.classList.add(errorClass);	}	}
		
		function hasInvalidInput(inputList) {
			return inputList.every(function(item) {
				return item.validity.valid;	});	}
		function toggleButton(inputList, button, inactiveButtonClass) {
			if(hasInvalidInput(inputList)) {
				button.removeAttribute('disabled');
				button.classList.remove(inactiveButtonClass);	}
			else {
				button.setAttribute('disabled', 'true');
				button.classList.add(inactiveButtonClass);	}	}
		
		function setEventListeners(form, inputSelector, inactiveButtonClass, errorClass) {
			const inputList = Array.from(form.querySelectorAll(inputSelector));
			const button = form.querySelector('button[type="submit"]');
			toggleButton(inputList, button, inactiveButtonClass);	
			inputList.forEach(function(item) {
				item.addEventListener('input', function () {
					checkInputValidity(item, errorClass);
					toggleButton(inputList, button, inactiveButtonClass);	});	});	}	
		
		function enabVal(settings, selector) {
			selector.addEventListener('submit', function(evt) {	evt.preventDefault();	});
			setEventListeners(selector, settings.inputSelector, settings.inactiveButtonClass, settings.errorClass);	}
		enabVal(this.data, this.selector);	}
	enableValidation() {this._set();}
}

