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
const formElement = document.querySelector('.popup__editform');
const edit  = document.querySelector('.profile__edit');
const closeProf  = document.querySelector('#closeProf');
	// Находим поля формы в DOM
const popup = document.querySelector('.popup');
const profName = document.querySelector('.profile__name');
const profJob = document.querySelector('.profile__job');
	// Получите значение полей из свойства value
const valueName = document.namjob.inputName;
const valueJob = document.namjob.inputJob;
	// Переменные popupadd
const add = document.querySelector('.profile__addbutton');
const popupadd = document.querySelector('.popupadd');
const formAdd = document.querySelector('.popupadd__editform');
const closeAdd = document.querySelector('#closeAdd');
const title = document.novoeMesto.title;
const ssulka = document.novoeMesto.ssulka;
	// Переменные для создания начальных карточек.
const templCard = document.querySelector('#card').content;
const grid = document.querySelector('.grid');
	// Переменные popupimg
const popupImg = document.querySelector('.popupimg');
const imgImg = document.querySelector('popupimg__img');
const closeImg = document.querySelector('#closeImg');
const pImg = document.querySelector('popupimg__p');
let openPopup;

function createCard(subscr, source) {
	const elemGrid = templCard.cloneNode(true);
	elemGrid.querySelector('.element__text').textContent = subscr;
	const img = elemGrid.querySelector('.element__img');
	img.addEventListener('click', function() {showImg(subscr, source);});
	img.src = source;
	img.alt = subscr + ' - не загрузилось(';
	const vLikeButton = elemGrid.querySelector('.element__button');
	vLikeButton.addEventListener('click', function(evt) {evt.target.classList.toggle('element__button_liked');});
	const vTrashButton = elemGrid.querySelector('.element__trash');
	vTrashButton.addEventListener('click', function(evt) {evt.target.closest('.element').remove();});
	return elemGrid;
}
function adding(what, where) {	where.prepend(what);}

function startGrid() {initialCards.forEach(function(item) {adding(createCard(item.name, item.link), grid);});}
startGrid();

function newCard(evt) {
	evt.preventDefault();
	adding(createCard(title.value, ssulka.value), grid);
	closePopup(popupadd);
	formAdd.reset();
}


function showPopup(vpopup) {
	openPopup = vpopup;
	document.addEventListener('keydown', addEscape);
	vpopup.classList.add('opened');
}
function addEscape(evt) { if(evt.key === 'Escape') { closePopup(openPopup);	}	}

function showPopupProf(vpopup) {
	valueName.setAttribute('value', profName.textContent);
	valueJob.setAttribute('value', profJob.textContent);
	const inputList = Array.from(formElement.querySelectorAll('input'));
	const button = formElement.querySelector('button[type="submit"]');
	toggleButton(inputList, button, 'buttondisable');
	showPopup(vpopup);
}

function closePopup(vpopup) {
	document.removeEventListener('keydown', addEscape);
	vpopup.classList.remove('opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
	profName.textContent = valueName.value;
	profJob.textContent = valueJob.value;
	closePopup (popup);
}

function showImg(pCard, smallImg) {
	const pImg = document.querySelector('.popupimg__p');
	pImg.textContent = pCard;
	const bigImg = document.querySelector('.popupimg__img');
	bigImg.src = smallImg;
	bigImg.alt =' Не загрузилось(';
	showPopup(popupImg);
}

edit.addEventListener ('click', function(){showPopupProf(popup)});
add.addEventListener ('click', function(){showPopup(popupadd)});
formElement.addEventListener('submit', formSubmitHandler);
formAdd.addEventListener('submit', newCard);

popup.addEventListener('click', function(evt){ if(evt.target.classList.contains('close') || evt.target.classList.contains('popup')){closePopup(popup);}	}	);
popupadd.addEventListener('click', function(evt){ if(evt.target.classList.contains('close') || evt.target.classList.contains('popupadd')){closePopup(popupadd);}	}	);
popupImg.addEventListener('click', function(evt){ if(evt.target.classList.contains('close') || evt.target.classList.contains('popupimg')){closePopup(popupImg);}	}	);
