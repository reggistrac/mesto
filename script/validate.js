function toggleErrorMes(input, inputErrorClass, errorClass) {
	const inputError = document.querySelector(`#${input.name}${inputErrorClass}`);
		if(input.validity.valid) {	inputError.classList.remove(errorClass);	}
		else {	inputError.textContent = input.validationMessage;
				inputError.classList.add(errorClass);	}
}
function chekValidForm(inputList) { return inputList.every(function(item) { return item.validity.valid;	}	);	}

function toggleButton(inputList, button, inactiveButtonClass) {
	if(chekValidForm(inputList)) {
		button.removeAttribute('disabled');
		button.classList.remove(inactiveButtonClass);
	}
	else {
		button.setAttribute('disabled', 'true');
		button.classList.add(inactiveButtonClass);
	}
}

function installInput(form, inactiveButtonClass, inputErrorClass, errorClass) {
	const inputList = Array.from(form.querySelectorAll('input'));
	const button = form.querySelector('button[type="submit"]');
	toggleButton(inputList, button, inactiveButtonClass);	
	inputList.forEach(function(item) {
		item.addEventListener('input', function () {
			toggleErrorMes(item, inputErrorClass, errorClass);
			toggleButton(inputList, button, inactiveButtonClass);
		}	);
	}	);

}
function enableValidation(settings) {
	const formList = Array.from(document.querySelectorAll('form'));
	formList.forEach(function(item) {
		item.addEventListener('submit', function(evt) {evt.preventDefault();});
		installInput(item, settings.inactiveButtonClass, settings.inputErrorClass, settings.errorClass);
	}	);
}
enableValidation({
	inactiveButtonClass: 'buttondisable',
	inputErrorClass: 'Error',
	errorClass: 'opened'
  }); 
