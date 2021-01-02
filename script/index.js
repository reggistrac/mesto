import {Card} from './card.js';
import {FormValidator} from './formValidator.js';

const initialCards = [	{	name: 'Архыз',
							link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'	},
						{	name: 'Челябинская область',
							link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'	},
						{	name: 'Иваново',
							link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'	},
						{	name: 'Камчатка',
							link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'	},
						{	name: 'Холмогорский район',
							link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'	},
						{	name: 'Байкал',
							link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'	}	];

const setValid = {	inputSelector: '.popup__input',
					inactiveButtonClass: 'popup__button_disabled',
					errorClass: 'popup__error_visible'	}

const formProfile = document.querySelector('.popup__editform-profile');// Форма в попапе профиля.
const openEditProfilePopupButton  = document.querySelector('.profile__editbutton');// Кнопка, открывающая попап профиля.
const popupProfile = document.querySelector('.popup_profile');// Попап профиля.
const profileName = document.querySelector('.profile__name');// Поле профиля с именем.
const profileJob = document.querySelector('.profile__job');// Поле профиля с работой.
const inputListProfile = Array.from(popupProfile.querySelectorAll('input'));// Массив полей ввода попапа профиля.
const submitEditProfilePopupButton = popupProfile.querySelector('button[type="submit"]');// Кнопка субмит попапа профиля.
const valueName = document.namjob.inputName;// Поле ввода имени попапа профиля.
const valueJob = document.namjob.inputJob;// Поле ввода работы попапа профиля.
const grid = document.querySelector('.grid');// Секция для вставки карточек.
	// Переменные popupadd
const openAdCardPopupButton = document.querySelector('.profile__addbutton');
const popupAdd = document.querySelector('.popup_add');
const formAdd = document.querySelector('.popup__editform-add');
const inputListAdd = Array.from(popupAdd.querySelectorAll('input'));
const submitAddPopupButton = popupAdd.querySelector('button[type="submit"]');
const newCardTitle = document.novoeMesto.title;
const newCardLink = document.novoeMesto.link;
	// Переменные popupimg
const popupImg = document.querySelector('.popup_img');
	// Массив форм
const formList = Array.from(document.querySelectorAll('.popup__form'));


function addElement(element, block) {	block.prepend(element);}

function createStartGrid() {
	initialCards.forEach(function(item) {
		const newCard = new Card(item, '#card');
		addElement(newCard.createCard(), grid);
	}	);
}
createStartGrid();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
formList.forEach(function(item) {
	const newValidator = new FormValidator(setValid, item);
	newValidator.enableValidation();
}	);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function closeByEsc (evt) {
	if(evt.key === 'Escape') {
		const openPopup = document.querySelector('.popup.opened');
		closePopup(openPopup);	}	}
function showPopup(popup) {
	document.addEventListener('keydown', closeByEsc );
	popup.classList.add('opened');	}

function checkInputValidity(input, errorClass) {
	const inputError = document.querySelector(`#${input.name}Error`);
	if(input.validity.valid) {	inputError.classList.remove(errorClass);	}
	else {
		inputError.textContent = input.validationMessage;
		inputError.classList.add(errorClass);	}	}
function resetError(inputList) {
	inputList.forEach(function(item) {
		checkInputValidity(item, 'popup__error_visible');	});	}

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

function showEditProfilePopup() {
	const userName = profileName.textContent;
	valueName.setAttribute('value', userName);
	const userJob = profileJob.textContent;
	valueJob.setAttribute('value', userJob);
	resetError(inputListProfile);
	toggleButton(inputListProfile, submitEditProfilePopupButton, 'popup__button_disabled');
	showPopup(popupProfile);
}
function showPopupAdd () {
	const errorList = Array.from(popupAdd.querySelectorAll('.popup__inputtext-adderror'));
	errorList.forEach(function(item) { item.classList.remove('popup__error_visible');	}	);
	toggleButton(inputListAdd, submitAddPopupButton, 'popup__button_disabled');
	showPopup(popupAdd);
}


function closePopup(popup) {
	document.removeEventListener('keydown', closeByEsc );
	popup.classList.remove('opened');	}

function editProfileFormSubmitHandler (evt) {
    evt.preventDefault();
	profileName.textContent = valueName.value;
	profileJob.textContent = valueJob.value;
	closePopup (popupProfile);
}
function addNewCard(evt) {
	evt.preventDefault();
	const a = newCardTitle.value;
	const b = newCardLink.value;
	const newCard = new Card({name:a, link:b}, '#card');
	addElement(newCard.createCard(), grid);
	closePopup(popupAdd);
	formAdd.reset();
}


openEditProfilePopupButton.addEventListener('click', function() {	showEditProfilePopup();});
openAdCardPopupButton.addEventListener ('click', function() {	showPopupAdd();});

formProfile.addEventListener('submit', editProfileFormSubmitHandler);
formAdd.addEventListener('submit', addNewCard);

popupProfile.addEventListener('mousedown', function(evt) {
	if(evt.target.classList.contains('close') || evt.target.classList.contains('popup_profile')) {
		closePopup(popupProfile);
		formProfile.reset();
	}
}	);
popupAdd.addEventListener('mousedown', function(evt) {
	if(evt.target.classList.contains('close') || evt.target.classList.contains('popup_add')) {
		closePopup(popupAdd);
		formAdd.reset();
	}
}	);
popupImg.addEventListener('mousedown', function(evt){
	if(evt.target.classList.contains('close') || evt.target.classList.contains('popup_img')) { 
		closePopup(popupImg);
	}
});
