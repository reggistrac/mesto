const formProfile = document.querySelector('.popup__editform-profile');
const openEditProfilePopupButton  = document.querySelector('.profile__editbutton');
	// Находим поля формы в DOM
const popupProfile = document.querySelector('.popup_profile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputListProfile = Array.from(popupProfile.querySelectorAll('input'));
const submitEditProfilePopupButton = popupProfile.querySelector('button[type="submit"]');
	// Получите значение полей из свойства value
const valueName = document.namjob.inputName;
const valueJob = document.namjob.inputJob;
	// Переменные popupadd
const openAdCardPopupButton = document.querySelector('.profile__addbutton');
const popupAdd = document.querySelector('.popup_add');
const formAdd = document.querySelector('.popup__editform-add');
const inputListAdd = Array.from(popupAdd.querySelectorAll('input'));
const submitAddPopupButton = popupAdd.querySelector('button[type="submit"]');
const newCardTitle = document.novoeMesto.title;
const newCardLink = document.novoeMesto.link;
	// Переменные для создания начальных карточек.
const templCard = document.querySelector('#card').content;
const grid = document.querySelector('.grid');
	// Переменные popupimg
const popupImg = document.querySelector('.popup_img');
const bigImgPopupImg = document.querySelector('.popup__img');
const subscibePopupImg = document.querySelector('.popup__p');


function createCard(subscr, source) {
	const elemGrid = templCard.cloneNode(true);
	elemGrid.querySelector('.element__text').textContent = subscr;
	const img = elemGrid.querySelector('.element__img');
	img.addEventListener('click', function() {showImgPopup(subscr, source);});
	img.src = source;
	img.alt = subscr;
	const likeButton = elemGrid.querySelector('.element__buttonlike');
	likeButton.addEventListener('click', function(evt) {
		evt.target.classList.toggle('element__buttonlike_liked');
	});
	const trashButton = elemGrid.querySelector('.element__buttontrash');
	trashButton.addEventListener('click', function(evt) {
		evt.target.closest('.element').remove();
	});
	return elemGrid;
}
function addElement(element, block) {	block.prepend(element);}

function createStartGrid() {
	initialCards.forEach(function(item) {
		addElement(createCard(item.name, item.link), grid);
	});
}
createStartGrid();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function closeByEsc (evt) {
	if(evt.key === 'Escape') {
		const openPopup = document.querySelector('.popup.opened');
		closePopup(openPopup);
	}
}
function showPopup(popup) {
	document.addEventListener('keydown', closeByEsc );
	popup.classList.add('opened');
}

function resetError(inputList) {
	inputList.forEach(function(item) {
		checkInputValidity(item, 'opened');
	});
}

function showEditProfilePopup() {
	const userName = profileName.textContent;
	valueName.setAttribute('value', userName);
	const userJob = profileJob.textContent;
	valueJob.setAttribute('value', userJob);
	resetError(inputListProfile);
	toggleButton(inputListProfile, submitEditProfilePopupButton, 'buttondisable');
	showPopup(popupProfile);
}
function showPopupAdd () {
	const errorList = Array.from(popupAdd.querySelectorAll('.popup__inputtext-adderror'));
	errorList.forEach(function(item) { item.classList.remove('opened');	}	);
	toggleButton(inputListAdd, submitAddPopupButton, 'buttondisable');
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
	popup.classList.remove('opened');
}

function editProfileFormSubmitHandler (evt) {
    evt.preventDefault();
	profileName.textContent = valueName.value;
	profileJob.textContent = valueJob.value;
	closePopup (popupProfile);
}
function addNewCard(evt) {
	evt.preventDefault();
	addElement(createCard(newCardTitle.value, newCardLink.value), grid);
	closePopup(popupAdd);
	formAdd.reset();
}


openEditProfilePopupButton.addEventListener('click', function() {
	showEditProfilePopup();
});
openAdCardPopupButton.addEventListener ('click', function() {
	showPopupAdd();
});

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
