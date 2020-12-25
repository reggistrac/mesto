function errorMes(input) {
	const inputError = document.querySelector(`#${input.name}Error`);
		if(input.validity.valid) {	inputError.classList.remove('opened');	}
		else {	inputError.textContent = input.validationMessage;
				inputError.classList.add('opened');	}
}
function chekValidForma(inputList) { return inputList.every(function(item) { return item.validity.valid;	}	);	}

function toggleButton(inputList, button, classButton) {
	if(chekValidForma(inputList)) {
		button.removeAttribute('disabled');
		button.classList.remove(classButton);
	}
	else {
		button.setAttribute('disabled', 'true');
		button.classList.add(classButton);
	}
}

function installInput(forma, classButton) {
	const inputList = Array.from(forma.querySelectorAll('input'));
	const button = forma.querySelector('button[type="submit"]');
	toggleButton(inputList, button, classButton);	
	inputList.forEach(function(item) {
		item.addEventListener('input', function () {
			errorMes(item);
			toggleButton(inputList, button, classButton);
		}	);
	}	);
	
}
function installform(classButton) {
	const formList = Array.from(document.querySelectorAll('form'));
	formList.forEach(function(item) {
		item.addEventListener('submit', function(evt) {evt.preventDefault();});
		installInput(item, classButton);
	}	);
}
installform('buttondisable');
