import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

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
					submitButtonSelector: '.submit',
					errorSpanSelector: '.error',
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
const popups = Array.from(document.querySelectorAll('.popup'));// Массив попапов.
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
const bigImgPopupImg = document.querySelector('.popup__img');
const subscibePopupImg = document.querySelector('.popup__p');
	// Массив форм
const formList = Array.from(document.querySelectorAll('.popup__form'));


function addElement(element, block) {	block.prepend(element);}

function creataItem(item) {
	const newCard = new Card(item, '#card', showImgPopup);
	addElement(newCard.createCard(), grid);
}
function createStartGrid() {
	initialCards.forEach(function(item) {
		creataItem(item);
	}	);
}
createStartGrid();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const profileValidator = new FormValidator(setValid, formProfile);
profileValidator.enableValidation();
const addCardValidator = new FormValidator(setValid, formAdd);
addCardValidator.enableValidation();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function closeByEsc (evt) {
	if(evt.key === 'Escape') {
		const openPopup = document.querySelector('.popup.opened');
		closePopup(openPopup);	}	}
function showPopup(popup) {
	document.addEventListener('keydown', closeByEsc );
	popup.classList.add('opened');	}

function showEditProfilePopup() {
	profileValidator.resetError();
	const userName = profileName.textContent;
	valueName.setAttribute('value', userName);
	const userJob = profileJob.textContent;
	valueJob.setAttribute('value', userJob);
	profileValidator.toggleButton();
	showPopup(popupProfile);
}
function showPopupAdd () {
	addCardValidator.resetError();
	addCardValidator.toggleButton();
	showPopup(popupAdd);
}
function showImgPopup(name, link) { 
	subscibePopupImg.textContent = name; 
	bigImgPopupImg.src = link; 
	bigImgPopupImg.alt = name; 
	showPopup(popupImg); 
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
	creataItem({name:a, link:b});
	closePopup(popupAdd);
	formAdd.reset();
}

openEditProfilePopupButton.addEventListener('click', function() {	showEditProfilePopup();});
openAdCardPopupButton.addEventListener ('click', function() {	showPopupAdd();});

formProfile.addEventListener('submit', editProfileFormSubmitHandler);
formAdd.addEventListener('submit', addNewCard);

popups.forEach(function(item){
	item.addEventListener('mousedown', function(evt) {
		if(evt.target.classList.contains('close') || evt.target.classList.contains('popup')) {	closePopup(item);	}
	}	);
});
