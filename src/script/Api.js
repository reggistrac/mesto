export default class Api{
	constructor(data){
		this._baseUrl = data.baseUrl;
		this._headers = data.headers;
	}
	loadUserProfile(){
		return fetch(`${this._baseUrl}users/me`, {	//Запрос данных пользователя.
			method: 'GET',
			headers: this._headers
		})
		.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	);
	}
	loadInitialCards(){
		return fetch(`${this._baseUrl}cards`, {	//Запрос карточек.
			method: 'GET',
			headers: this._headers
		})
		.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	);
	}
	changeAvatar(data){
		return fetch(`${this._baseUrl}users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: data.avatar
			})
		})
		.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	);
	}
	changeUserInfo(data){
		return fetch(`${this._baseUrl}users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				about: data.job
			})
		})
		.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	);
	}
	addCard(data){
		return fetch(`${this._baseUrl}cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: data.title,
				link: data.link
			})
		})
		.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	);
	}
	deleteCard(id){
		return fetch(`${this._baseUrl}cards/${id}`, {
			method: 'DELETE',
			headers: this._headers,
		})
		.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	);
	}
	likeing=(data, userId)=>{
		if(data.likes.some(function(item){return item._id===userId})){
			return fetch(`${this._baseUrl}cards/likes/${data._id}`, {
				method: 'DELETE',
				headers: this._headers,
			})
			.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	);
		}
		else{
			return fetch(`${this._baseUrl}cards/likes/${data._id}`, {
				method: 'PUT',
				headers: this._headers,
			})
			.then(res => {if(res.ok){return res.json()	}return Promise.reject(`Ошибка: ${res.status}`);	}	);
		}
	}
}
