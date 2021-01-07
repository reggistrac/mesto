import './pages/index.css';

import Section from './script/Section.js';
import {FormValidator} from './script/FormValidator.js';
import PopupWithImage from './script/PopupWithImage.js';
import PopupWithForm from './script/PopupWithForm.js';
import UserInfo from './script/UserInfo.js';

const initialCards = [	{	name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'	},
						{	name: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'	},
						{	name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'	},
						{	name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'	},
						{	name: 'Холмогорский район', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'	},
						{	name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'	}	];

const setValid = {	inputSelector: '.popup__input',
					submitButtonSelector: '.submit',
					errorSpanSelector: '.error',
					inactiveButtonClass: 'popup__button_disabled',
					errorClass: 'popup__error_visible'	}

const formProfile = document.querySelector('.popup__editform-profile');// Форма в попапе профиля.
const openEditProfilePopupButton  = document.querySelector('.profile__editbutton');// Кнопка, открывающая попап профиля.
const popupProfile = document.querySelector('.popup_profile');// Попап профиля.
export const profileName = document.querySelector('.profile__name');// Поле профиля с именем.
export const profileJob = document.querySelector('.profile__job');// Поле профиля с работой.
const valueName = document.namjob.inputName;// Поле ввода имени попапа профиля.
const valueJob = document.namjob.inputJob;// Поле ввода работы попапа профиля.
const grid = document.querySelector('.grid');// Секция для вставки карточек.
	// Переменные popupadd
const openAdCardPopupButton = document.querySelector('.profile__addbutton');
const popupAdd = document.querySelector('.popup_add');
const formAdd = document.querySelector('.popup__editform-add');
const newCardTitle = document.novoeMesto.title;
const newCardLink = document.novoeMesto.link;
	// Переменные popupimg
const popupImg = document.querySelector('.popup_img');
export const bigImgPopupImg = document.querySelector('.popup__img');
export const subscibePopupImg = document.querySelector('.popup__p');
////			Классы
const sec = new Section(initialCards,grid);

const obPoProfil = new PopupWithForm(popupProfile, formProfile, editProfileFormSubmitHandler);
const obPoAdd = new PopupWithForm(popupAdd, formAdd, addNewCard);
const obPoImg = new PopupWithImage(popupImg);

const shi = obPoImg.showPopup.bind(obPoImg);
sec.createStartGrid(shi);

const infouser = new UserInfo({name:profileName, job:profileJob});
////			Валидация
const profileValidator = new FormValidator(setValid, formProfile);
profileValidator.enableValidation();
const addCardValidator = new FormValidator(setValid, formAdd);
addCardValidator.enableValidation();
/////////////////////////////////////////////////////////////////////////////////////
function showEditProfilePopup() {
	const info = infouser.getUserInfo();
	valueName.setAttribute('value', info.name);
	valueJob.setAttribute('value', info.job);
	profileValidator.resetError();
	profileValidator.toggleButton();
	obPoProfil.showPopup();	}
function showPopupAdd () {
	addCardValidator.resetError();
	addCardValidator.toggleButton();
	obPoAdd.showPopup();	}
function editProfileFormSubmitHandler (evt) {
    evt.preventDefault();
	const a = valueName.value;
	const b = valueJob.value;
	infouser.setUserInfo({name:a,job:b});
	obPoProfil.closePopup();	}
function addNewCard(evt) {
	evt.preventDefault();
	const a = newCardTitle.value;
	const b = newCardLink.value;
	sec.creataItem({name:a,link:b},shi);
	obPoAdd.closePopup();
	formAdd.reset();	}
openEditProfilePopupButton.addEventListener('click', function() {	showEditProfilePopup();});
openAdCardPopupButton.addEventListener ('click', function() {	showPopupAdd();});
