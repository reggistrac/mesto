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

function showPopup(popup) {popup.classList.add('opened');}

function showPopupProf(popup) {
	valueName.setAttribute('value', profName.textContent);
	valueJob.setAttribute('value', profJob.textContent);
	showPopup(popup);
}

function closePopup(popup) {popup.classList.remove('opened');}

function formSubmitHandler (evt) {// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.
	profName.textContent = valueName.value;// Вставьте новые значения с помощью textContent
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

edit.addEventListener ('click',function(){showPopupProf(popup)});
add.addEventListener ('click',function(){showPopup(popupadd)});
formElement.addEventListener('submit', formSubmitHandler);// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formAdd.addEventListener('submit',newCard);
closeProf.addEventListener('click',function(){closePopup(popup);});
closeAdd.addEventListener('click',function(){closePopup(popupadd);});
closeImg.addEventListener('click',function(){closePopup(popupImg);});