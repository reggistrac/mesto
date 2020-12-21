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
let formElement = document.querySelector('.popup__editform');
let edit  = document.querySelector('.profile__edit');
let closeProf  = document.querySelector('#closeProf');
	// Находим поля формы в DOM
let popup = document.querySelector('.popup');
let profName = document.querySelector('.profile__name');
let profJob = document.querySelector('.profile__job');
	// Получите значение полей из свойства value
let valueName = document.namjob.inputName;
let valueJob = document.namjob.inputJob;
	// Переменные popupadd
let add = document.querySelector('.profile__addbutton');
let popupadd = document.querySelector('.popupadd');
let formAdd = document.querySelector('.popupadd__editform');
let closeAdd = document.querySelector('#closeAdd');
let title = document.novoeMesto.title;
let ssulka = document.novoeMesto.ssulka;
	// Переменные для создания начальных карточек.
const templCard = document.querySelector('#card').content;
const grid = document.querySelector('.grid');
	// Переменные popupimg
let popupImg = document.querySelector('.popupimg');
let imgImg = document.querySelector('popupimg__img');
let closeImg = document.querySelector('#closeImg');
let pImg = document.querySelector('popupimg__p');


function createGrid(){
	grid.innerHTML='';
	for(let i=0 ; i<initialCards.length;i++){
		const elemGrid = templCard.cloneNode(true);
		elemGrid.querySelector('.element__text').textContent = initialCards[i].name;
		let img = elemGrid.querySelector('.element__img');
		img.addEventListener('click',function(evt){	const evTar = evt.target;
													let tekEl = img.closest('.element');
													showImg(tekEl);	});
		img.src = initialCards[i].link;
		let vLikeButton = elemGrid.querySelector('.element__button');
		vLikeButton.addEventListener('click', function (evt) {	const evTar = evt.target;
																if(evTar.getAttribute('src')==='./images/like.svg'){evTar.setAttribute('src','./images/blackLike.svg');}
																else{evTar.setAttribute('src','./images/like.svg');}
															});
		let vTrashButton = elemGrid.querySelector('.element__trash');
		vTrashButton.addEventListener('click',function(evt){const evTar = evt.target;
															let tekEl = vTrashButton.closest('.element');
															fRemove(tekEl); });
		grid.append(elemGrid);  
			
		
														}
																									
														}

createGrid();

function showPopup (a) {	a.classList.remove('disnone');	}

function showPopupProf (a) {	valueName.setAttribute('value', profName.textContent);
								valueJob.setAttribute('value', profJob.textContent);
								showPopup(a);	}

function closePopup (a) {	a.classList.add('disnone');	}

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.
	// Вставьте новые значения с помощью textContent
	profName.textContent = valueName.value;
	profJob.textContent = valueJob.value;
	closePopup (popup);
}

function addMesto(evt) {	evt.preventDefault();
							const elemGrid = templCard.cloneNode(true);
							elemGrid.querySelector('.element__text').textContent = title.value;
							let img=elemGrid.querySelector('.element__img');
							img.addEventListener('click',function(evt){	const evTar = evt.target;
																		let tekEl = img.closest('.element');
																		showImg(tekEl);		});
							img.src = ssulka.value;
							let vLikeButton = elemGrid.querySelector('.element__button');
							vLikeButton.addEventListener('click', function (evt) {	const evTar = evt.target;
																					if(evTar.getAttribute('src')==='./images/like.svg'){evTar.setAttribute('src','./images/blackLike.svg');}
																					else{evTar.setAttribute('src','./images/like.svg');}	});
							let vTrashButton = elemGrid.querySelector('.element__trash');
							vTrashButton.addEventListener('click',function(evt){	const evTar = evt.target;
																					let tekEl = vTrashButton.closest('.element');
																					fRemove(tekEl); });
							grid.prepend(elemGrid);
							closePopup (popupadd);
							title.value = '';
							ssulka.value = '';	}

function fRemove(a){a.remove();}

function showImg(a)	{let im=document.querySelector('.popupimg__img');
					let bi=a.querySelector('.element__img');
					let image=bi.src;
					im.src=image;
					let p=document.querySelector('.popupimg__p');
					let bp=a.querySelector('.element__text');
					let title=bp.textContent;
					p.textContent=title;
					showPopup(popupImg);	}

edit.addEventListener ('click',function(){showPopupProf(popup)});
add.addEventListener ('click',function(){showPopup(popupadd)});
formElement.addEventListener('submit', formSubmitHandler);// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formAdd.addEventListener('submit',addMesto);
closeProf.addEventListener('click',function(){closePopup(popup);});
closeAdd.addEventListener('click',function(){closePopup(popupadd);});
closeImg.addEventListener('click',function(){closePopup(popupImg);});