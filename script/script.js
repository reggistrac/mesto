let formElement = document.querySelector('.popup__editform');
let edit  = document.querySelector('.profile__edit');
let closed  = document.querySelector('.popup__close');
	// Находим поля формы в DOM
	let popup = document.querySelector('.popup');
	let profName = document.querySelector('.profile__name');
	let profJob = document.querySelector('.profile__job');
	// Получите значение полей из свойства value
	let valueName = document.namjob.inputName;//.value;
	let valueJob = document.namjob.inputJob;//.value;


function showPopup () {
	popup.classList.remove('popup_disnone');
	valueName.setAttribute('value', profName.textContent);
	valueJob.setAttribute('value', profJob.textContent);
}
function closePopup () {
	popup.classList.add('popup_disnone');	
}


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

	// Вставьте новые значения с помощью textContent
	profName.textContent = valueName.value;
	profJob.textContent = valueJob.value;
	
	//popup.classList.add('popup_disnone');
	closePopup ();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

edit.addEventListener ('click' , showPopup);

closed.addEventListener ('click' , closePopup);