const initialCards = [
    {
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const formaProfile = document.querySelector('.popupprofile__editform');
const editButton  = document.querySelector('.profile__editbutton');
	// Находим поля формы в DOM
const popupProfile = document.querySelector('.popupprofile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
	// Получите значение полей из свойства value
const valueName = document.namjob.inputName;
const valueJob = document.namjob.inputJob;
	// Переменные popupadd
const addCardButton = document.querySelector('.profile__addbutton');
const popupAdd = document.querySelector('.popupadd');
const formaAdd = document.querySelector('.popupadd__editform');
const newCardTitle = document.novoeMesto.title;
const newCardSsulka = document.novoeMesto.ssulka;
	// Переменные для создания начальных карточек.
const templCard = document.querySelector('#card').content;
const grid = document.querySelector('.grid');
	// Переменные popupimg
const popupImg = document.querySelector('.popupimg');
const imgImg = document.querySelector('popupimg__img');
const pImg = document.querySelector('popupimg__p');
let openPopup;

function createCard(subscr, source) {
	const elemGrid = templCard.cloneNode(true);
	elemGrid.querySelector('.element__text').textContent = subscr;
	const img = elemGrid.querySelector('.element__img');
	img.addEventListener('click', function() {showImg(subscr, source);});
	img.src = source;
	img.alt = subscr + ' - не загрузилось(';
	const vLikeButton = elemGrid.querySelector('.element__buttonlike');
	vLikeButton.addEventListener('click', function(evt) {evt.target.classList.toggle('element__buttonlike_liked');});
	const vTrashButton = elemGrid.querySelector('.element__buttontrash');
	vTrashButton.addEventListener('click', function(evt) {evt.target.closest('.element').remove();});
	return elemGrid;
}
function addingCard(what, where) {	where.prepend(what);}

function createStartGrid() {initialCards.forEach(function(item) {addingCard(createCard(item.name, item.link), grid);});}
createStartGrid();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addEscape(evt) { if(evt.key === 'Escape') { closePopup(openPopup);	}	}
function showPopup(aPopup) {
	openPopup = aPopup;
	document.addEventListener('keydown', addEscape);
	aPopup.classList.add('opened');
}

function resetError(inputList) { inputList.forEach(function(item) {toggleErrorMes(item);	}	);
}
function showPopupProf() {
	const inputList = Array.from(popupProfile.querySelectorAll('input'));
	const button = popupProfile.querySelector('button[type="submit"]');
	const a = profileName.textContent;
	valueName.setAttribute('value', a);
	const b = profileJob.textContent;
	valueJob.setAttribute('value', b);
	resetError(inputList);
	toggleButton(inputList, button, 'buttondisable');
	showPopup(popupProfile);
}
function showPopupAdd () {
	const inputList = Array.from(popupAdd.querySelectorAll('input'));
	const button = popupAdd.querySelector('button[type="submit"]');
	resetError(inputList);
	toggleButton(inputList, button, 'buttondisable');
	showPopup(popupAdd);
}
function showImg(pCard, smallImg) {
	const pImg = document.querySelector('.popupimg__p');
	pImg.textContent = pCard;
	const bigImg = document.querySelector('.popupimg__img');
	bigImg.src = smallImg;
	bigImg.alt =' Не загрузилось(';
	showPopup(popupImg);
}

function closePopup(aPopup) {
	document.removeEventListener('keydown', addEscape);
	aPopup.classList.remove('opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
	profileName.textContent = valueName.value;
	profileJob.textContent = valueJob.value;
	closePopup (popupProfile);
}
function newCard(evt) {
	evt.preventDefault();
	addingCard(createCard(newCardTitle.value, newCardSsulka.value), grid);
	closePopup(popupAdd);
	formaAdd.reset();
}


editButton.addEventListener('click', function() { showPopupProf();	}	);
addCardButton.addEventListener ('click', function() { showPopupAdd();	}	);

formaProfile.addEventListener('submit', formSubmitHandler);
formaAdd.addEventListener('submit', newCard);

popupProfile.addEventListener('mousedown', function(evt) {
	if(evt.target.classList.contains('close') || evt.target.classList.contains('popupprofile')) {
		closePopup(popupProfile);
		formaProfile.reset();
	}
}	);
popupAdd.addEventListener('mousedown', function(evt) {
	if(evt.target.classList.contains('close') || evt.target.classList.contains('popupadd')) {
		closePopup(popupAdd);
		formaAdd.reset();
	}
}	);
popupImg.addEventListener('mousedown', function(evt){ if(evt.target.classList.contains('close') || evt.target.classList.contains('popupimg')) { closePopup(popupImg);}	}	);
