function checkInputValidity(input, errorClass) {
	const inputError = document.querySelector(`#${input.name}Error`);
		if(input.validity.valid) {
			inputError.classList.remove(errorClass);
		}
		else {
			inputError.textContent = input.validationMessage;
			inputError.classList.add(errorClass);
		}
}
function hasInvalidInput(inputList) {
	return inputList.every(function(item) {
		return item.validity.valid;
	});
}

function toggleButton(inputList, button, inactiveButtonClass) {
	if(hasInvalidInput(inputList)) {
		button.removeAttribute('disabled');
		button.classList.remove(inactiveButtonClass);
	}
	else {
		button.setAttribute('disabled', 'true');
		button.classList.add(inactiveButtonClass);
	}
}

function setEventListeners(form, inactiveButtonClass, errorClass) {
	const inputList = Array.from(form.querySelectorAll('input'));
	const button = form.querySelector('button[type="submit"]');
	toggleButton(inputList, button, inactiveButtonClass);	
	inputList.forEach(function(item) {
		item.addEventListener('input', function () {
			checkInputValidity(item, errorClass);
			toggleButton(inputList, button, inactiveButtonClass);
		});
	});
}
function enableValidation(settings) {
	const formList = Array.from(document.querySelectorAll('form'));
	formList.forEach(function(item) {
		item.addEventListener('submit', function(evt) {
			evt.preventDefault();
		});
		setEventListeners(item, settings.inactiveButtonClass, settings.errorClass);
	});
}
enableValidation({							// Остальные ключи не используются:
	inactiveButtonClass: 'buttondisable',	// формы, поля ввода и кнопки находятся
	errorClass: 'opened'					// по тегу, поле ввода с ошибкой в макете
  });										// не изменяется.
