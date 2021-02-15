export default class Api{
	constructor(data){
		this._baseUrl = data.baseUrl;
		this._headers = data.headers;
	}
	loadUserProfile(callback, newAvaButton){
		return fetch(`${this._baseUrl}users/me`, {	//Запрос данных пользователя.
			method: 'GET',
			headers: this._headers
		})
		.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	)
		.then((result) => {
			callback(result);
			//newAvaButton.style.backgroundImage = `url(${result.avatar})`;
		})
		.catch((err)=>{alert('loadUserProfile\n'+err);});
	}
	loadInitialCards(callback){
		return fetch(`${this._baseUrl}cards`, {	//Запрос карточек.
		method: 'GET',
		headers: this._headers
		})
		.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	)
		.then((result) => {
			callback(result);
		})
		.catch((err)=>{alert('loadInitialCards\n'+err);});
	}
	changeAvatar(newAvaButton, selector, data){
		return fetch(`${this._baseUrl}users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: data.avatar
			})
		})
		.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	)
		.then((result) => {
			newAvaButton.style.backgroundImage = `url(${result.avatar})`;
			selector.renderLoading(false);
			selector.closePopup();
		})
		.catch((err)=>{alert('changeAvatar\n'+err);});
	}
	changeUserInfo(callback, selector, data){
		return fetch(`${this._baseUrl}users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				about: data.job
			})
		})
		.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	)
		.then((result) => {
			callback(result);
			selector.renderLoading(false);
			selector.closePopup();
		})
		.catch((err)=>{alert('changeUserInfo\n'+err);});
	}
	addCard(callback, selector, data){
		return fetch(`${this._baseUrl}cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: data.title,
				link: data.link
			})
		})
		.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	)
		.then((result) => {
			callback(result);
			selector.renderLoading(false);
			selector.closePopup();
		})
		.catch((err)=>{alert('addCard\n'+err);});
	}
	deleteCard(id, element){
		return fetch(`${this._baseUrl}cards/${id}`, {
			method: 'DELETE',
			headers: this._headers,
		})
		.then(res => {if(!res.ok){return Promise.reject(`Ошибка: ${res.status}`);}	}	)
		.then((result) =>{
			element.remove();
		})
		.catch((err)=>{alert('deleteCard\n'+err);});
	}
	likeing=(data, callback)=>{
		if(data.likes.some(function(item){return item._id==='d5e262bcd7280f9c0c11a8e4'})){
			return fetch(`${this._baseUrl}cards/likes/${data._id}`, {
				method: 'DELETE',
				headers: this._headers,
			})
			.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	)
			.then((result) => {
				callback(result);
				data.likes = result.likes;
			})
			.catch((err)=>{alert('likeing DELETE\n'+err);});
		}
		else{
			return fetch(`${this._baseUrl}cards/likes/${data._id}`, {
				method: 'PUT',
				headers: this._headers,
			})
			.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	)
			.then((result) => {
				callback(result);
				data.likes = result.likes;
			})
			.catch((err)=>{alert('likeing PUT\n'+err);});
		}
	}
}
