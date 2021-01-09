import './index.css';

import Card from '../script/Card.js';
import Section from '../script/Section.js';
import {FormValidator} from '../script/FormValidator.js';
import PopupWithImage from '../script/PopupWithImage.js';
import PopupWithForm from '../script/PopupWithForm.js';
import UserInfo from '../script/UserInfo.js';

const initialCards = [	{	title: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'	},
						{	title: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'	},
						{	title: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'	},
						{	title: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'	},
						{	title: 'Холмогорский район', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'	},
						{	title: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'	}	];

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
const valueName = document.namjob.name;// Поле ввода имени попапа профиля.
const valueJob = document.namjob.job;// Поле ввода работы попапа профиля.
const grid = document.querySelector('.grid');// Секция для вставки карточек.
	// Переменные popupadd
const openAdCardPopupButton = document.querySelector('.profile__addbutton');
const popupAdd = document.querySelector('.popup_add');
const formAdd = document.querySelector('.popup__editform-add');
	// Переменные popupimg
const popupImg = document.querySelector('.popup_img');
const bigImgPopupImg = document.querySelector('.popup__img');
const subscibePopupImg = document.querySelector('.popup__p');
////			Классы
//const profilePopupWithForm = new PopupWithForm({popup:popupProfile, form:formProfile, inputSelector: '.popup__input'}, editProfileFormSubmitHandler);
const profilePopupWithForm = new PopupWithForm({popup:popupProfile, form:formProfile, inputSelector: '.popup__input'}, editProfileFormSubmitHandler);
profilePopupWithForm.setEventListeners();
//const addPopupWithForm = new PopupWithForm({popup:popupAdd, form:formAdd, inputSelector: '.popup__input'}, addNewCard);
const addPopupWithForm = new PopupWithForm({popup:popupAdd, form:formAdd, inputSelector: '.popup__input'},addNewCard);
addPopupWithForm.setEventListeners();
const obPopupWithImage = new PopupWithImage(popupImg, bigImgPopupImg, subscibePopupImg);
obPopupWithImage.setEventListeners();

const showPopupImg = obPopupWithImage.showPopup.bind(obPopupWithImage);

const obSection = new Section(initialCards, (item)=>{
	const newCard = new Card(item, '#card', showPopupImg);
	return newCard;
}, grid);
obSection.createStartGrid();

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
	profilePopupWithForm.showPopup();	}
function showPopupAdd () {
	addCardValidator.resetError();
	addCardValidator.toggleButton();
	addPopupWithForm.showPopup();	}
function editProfileFormSubmitHandler (data) {
	infouser.setUserInfo(data);
	profilePopupWithForm.closePopup();	}
function addNewCard(data) {
	obSection.creataItem(data);
	addPopupWithForm.closePopup();	}
openEditProfilePopupButton.addEventListener('click', function() {	showEditProfilePopup();});
openAdCardPopupButton.addEventListener ('click', function() {	showPopupAdd();});
