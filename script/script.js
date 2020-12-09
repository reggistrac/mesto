/*
let popup = document.querySelector('.popup');
let profname = document.querySelector('.profile__name');
let profjob = document.querySelector('.profile__job');
let valueName = document.querySelector('.InputName');
let valueJob = document.querySelector('.InputWork');
*/

/*
let valueName = textContent.document.querySelector('.profile__name');
let valueJob = textContent.document.querySelector('.profile__job');
console.log(profname.textContent);
console.log(profjob.textContent);
*/


function showPopup () {
	let popup = document.querySelector('.popup');
	let profname = document.querySelector('.profile__name');
	let profjob = document.querySelector('.profile__job');
	let valueName = document.querySelector('.popup__InputName');
	let valueJob = document.querySelector('.popup__InputWork');
	popup.classList.remove('popup_disNone');
	valueName.setAttribute('value', profname.textContent);
	valueJob.setAttribute('value', profjob.textContent);
}
function closePopup () {
	let popup = document.querySelector('.popup');
	let valueName = document.querySelector('.popup__InputName');
	let valueJob = document.querySelector('.popup__InputWork');
	valueName.setAttribute('value', '');
	valueJob.setAttribute('value', '');
	popup.classList.add('popup_disNone');	
}

let edit  = document.querySelector('.profile__edit');
edit.addEventListener ('click' , showPopup);

let closed  = document.querySelector('.popup__close');
closed.addEventListener ('click' , closePopup);

let formElement = document.querySelector('.popup__EditForm');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

	// Находим поля формы в DOM
	let popup = document.querySelector('.popup');
	let profname = document.querySelector('.profile__name');
	let profjob = document.querySelector('.profile__job');
	let valueName = document.namjob.inputName.value;
	let valueJob = document.namjob.inputJob.value;
	/*
    let nameInput = document.namjob.inputName.value;
    let jobInput = document.namjob.inputJob.value;
	*/

	// Получите значение полей из свойства value
	
	profname.textContent = (valueName);
	profjob.textContent = (valueJob);
	//profile__name.textContent = 'value1';
	//profile__job.textContent = 'value2';
    // Выберите элементы, куда должны быть вставлены значения полей

	// Вставьте новые значения с помощью textContent
	popup.classList.add('popup_disNone');	
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 