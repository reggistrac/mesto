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

function addCard(subscr, source) {
	const elemGrid = templCard.cloneNode(true);
	elemGrid.querySelector('.element__text').textContent = subscr;
	const img = elemGrid.querySelector('.element__img');
	img.addEventListener('click', function(evt) {
		const evTar = evt.target;
		let tekEl = img.closest('.element');
		showImg(tekEl);
	}	);
	img.src = source;
	const vLikeButton = elemGrid.querySelector('.element__button');
	vLikeButton.addEventListener('click', function(evt) {
		const evTar = evt.target;
		evTar.classList.toggle('element__button_liked');
	}	);
	const vTrashButton = elemGrid.querySelector('.element__trash');
	vTrashButton.addEventListener('click',function(evt) {
		const evTar = evt.target;
		evt.target.closest('.element').remove();
	}	);
	grid.prepend(elemGrid);
}

function startGrid() {
	grid.innerHTML = '';
	for (let i = 0; i < initialCards.length; i++) {
		addCard(initialCards[i].name, initialCards[i].link);
	}
}
startGrid();

function newCard(evt) {
	evt.preventDefault();
	addCard(title.value, ssulka.value);
	closePopup(popupadd);
	title.value = '';
	ssulka.value = '';
}


function showPopup(popup) {	popup.classList.remove('disnone');	}

function showPopupProf(popup) {
	valueName.setAttribute('value', profName.textContent);
	valueJob.setAttribute('value', profJob.textContent);
	showPopup(popup);
}

function closePopup(popup) {	popup.classList.add('disnone');	}

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.
	// Вставьте новые значения с помощью textContent
	profName.textContent = valueName.value;
	profJob.textContent = valueJob.value;
	closePopup (popup);
}

function showImg(card) {
	let bigImg = document.querySelector('.popupimg__img');
	let smallImg = card.querySelector('.element__img');
	let image = smallImg.src;
	bigImg.src = image;
	let p = document.querySelector('.popupimg__p');
	let cardP = card.querySelector('.element__text');
	let title = cardP.textContent;
	p.textContent = title;
	showPopup(popupImg);
}

edit.addEventListener ('click',function(){showPopupProf(popup)});
add.addEventListener ('click',function(){showPopup(popupadd)});
formElement.addEventListener('submit', formSubmitHandler);// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formAdd.addEventListener('submit',newCard);
closeProf.addEventListener('click',function(){closePopup(popup);});
closeAdd.addEventListener('click',function(){closePopup(popupadd);});
closeImg.addEventListener('click',function(){closePopup(popupImg);});