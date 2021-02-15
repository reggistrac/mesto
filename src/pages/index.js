import './index.css';

import Card from '../script/Card.js';
import Section from '../script/Section.js';
import {FormValidator} from '../script/FormValidator.js';
import PopupWithImage from '../script/PopupWithImage.js';
import PopupWithForm from '../script/PopupWithForm.js';
import PopupSure from '../script/PopupSure.js';
import UserInfo from '../script/UserInfo.js';
import Api from '../script/Api.js';

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
const newAvaButton = document.querySelector('.profile__avatarbutton');// Кнопка, открывающая попап аватара/сам аватар.
const openEditProfilePopupButton  = document.querySelector('.profile__editbutton');// Кнопка, открывающая попап редактирования профиля.
const openAdCardPopupButton = document.querySelector('.profile__addbutton');// Кнопка, открывающая попап добавления карточки.
const popupProfile = document.querySelector('.popup_profile');// Попап профиля.
const profileName = document.querySelector('.profile__name');// Поле профиля с именем.
const profileJob = document.querySelector('.profile__job');// Поле профиля с работой.
const valueName = document.namjob.name;// Поле ввода имени попапа профиля.
const valueJob = document.namjob.job;// Поле ввода работы попапа профиля.
const grid = document.querySelector('.grid');// Секция для вставки карточек.
	// Переменные popupAvatar
const popupAva = document.querySelector('.popup_avatar');
const formAva = document.querySelector('.poup__editform-avatar');
	// Переменные popupadd
const popupAdd = document.querySelector('.popup_add');
const formAdd = document.querySelector('.popup__editform-add');
	// Переменные popupimg
const popupImg = document.querySelector('.popup_img');
const bigImgPopupImg = document.querySelector('.popup__img');
const subscibePopupImg = document.querySelector('.popup__p');
	// Переменные popupsure
const popupSure = document.querySelector('.popup_sure');
const buttonSure = document.querySelector('.popup__button-sure');
// Фиксированные карточки ===========================================================
	function createCard(subscr, source) { 
		const templCard = document.querySelector('#card').content;
		const elemGrid = templCard.cloneNode(true); 
		elemGrid.querySelector('.element__text').textContent = subscr; 
		const img = elemGrid.querySelector('.element__img'); 
		img.addEventListener('click', function() {showPopupImg(subscr, source);}); 
		img.src = source; 
		img.alt = subscr + ' - не загрузилось(';
		const vLikeButton = elemGrid.querySelector('.element__buttonlike');
		vLikeButton.addEventListener('click', function(evt) {evt.target.classList.toggle('element__buttonlike_liked');}); 
		const vTrashButton = elemGrid.querySelector('.element__buttontrash'); 
		vTrashButton.addEventListener('click', function(evt) {evt.target.closest('.element').remove();		});
		return elemGrid; 
	} 
	function adding(what, where) {	where.prepend(what);} 
 
	function startGrid() {initialCards.forEach(function(item) {adding(createCard(item.title, item.link), grid);});} 
	startGrid();
// =================================================================================

////			Классы
const avaPopupWithForm = new PopupWithForm({popup:popupAva, form:formAva, inputSelector: '.popup__input'}, avaSubmitHandler);
avaPopupWithForm.setEventListeners();
const profilePopupWithForm = new PopupWithForm({popup:popupProfile, form:formProfile, inputSelector: '.popup__input'}, editProfileFormSubmitHandler);
profilePopupWithForm.setEventListeners();
const addPopupWithForm = new PopupWithForm({popup:popupAdd, form:formAdd, inputSelector: '.popup__input'}, addNewCard);
addPopupWithForm.setEventListeners();
const obPopupWithImage = new PopupWithImage(popupImg, bigImgPopupImg, subscibePopupImg);
obPopupWithImage.setEventListeners();
const obPopupSure = new PopupSure({popup:popupSure,button:buttonSure},deleteCard);
obPopupSure.setEventListeners();

const showPopupImg = obPopupWithImage.showPopup.bind(obPopupWithImage);
const showPoupSure = obPopupSure.showPopup.bind(obPopupSure);

const infouser = new UserInfo({name:profileName, job:profileJob});
const api = new Api({
	baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20/',
	headers: {
		authorization: '30098fac-b1a4-4fba-bcbb-1d071c550463',
		'Content-Type': 'application/json'
	}
});
api.loadUserProfile(infouser.setUserInfo, newAvaButton);

const obSection = new Section(/*result, */(item)=>{
	const newCard = new Card(item, '#card', showPopupImg, showPoupSure, api.likeing);
	return newCard;
}, grid);
api.loadInitialCards(	(result)=>{	obSection.createStartGrid(result);	}	);

////			Валидация
const avaValidator = new FormValidator(setValid, formAva);
avaValidator.enableValidation();
const profileValidator = new FormValidator(setValid, formProfile);
profileValidator.enableValidation();
const addCardValidator = new FormValidator(setValid, formAdd);
addCardValidator.enableValidation();
/////////////////////////////////////////////////////////////////////////////////////
function showPopupAvatar(){
	avaValidator.resetError();
	avaValidator.toggleButton();
	avaPopupWithForm.showPopup();
}
function showEditProfilePopup() {
	const info = infouser.getUserInfo();
	valueName.setAttribute('value', info.name);
	valueJob.setAttribute('value', info.job);
	profileValidator.resetError();
	profileValidator.toggleButton();
	profilePopupWithForm.showPopup();
}
function showPopupAdd () {
	addCardValidator.resetError();
	addCardValidator.toggleButton();
	addPopupWithForm.showPopup();
}
function avaSubmitHandler(data){
	avaPopupWithForm.renderLoading(true);
	api.changeAvatar(newAvaButton, avaPopupWithForm, data);
}
function editProfileFormSubmitHandler (data) {
	profilePopupWithForm.renderLoading(true);
	api.changeUserInfo(infouser.setUserInfo, profilePopupWithForm, data);
}
function addNewCard(data) {
	addPopupWithForm.renderLoading(true);
	api.addCard(obSection.creataItem, addPopupWithForm, data);
}
function deleteCard(element, id){
	obPopupSure.closePopup();
	api.deleteCard(id, element);
}
newAvaButton.addEventListener('click', function() {	showPopupAvatar();});
openEditProfilePopupButton.addEventListener('click', function() {	showEditProfilePopup();});
openAdCardPopupButton.addEventListener ('click', function() {	showPopupAdd();});
