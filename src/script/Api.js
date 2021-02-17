export default class Api{
	constructor(data){
		this._baseUrl = data.baseUrl;
		this._headers = data.headers;
	}
	loadUserProfile(){
		return fetch(`${this._baseUrl}users/me`, {	//Запрос данных пользователя.
			method: 'GET',
			headers: this._headers
		});
	}
	loadInitialCards(){
		return fetch(`${this._baseUrl}cards`, {	//Запрос карточек.
		method: 'GET',
		headers: this._headers
		});
	}
	changeAvatar(data){
		return fetch(`${this._baseUrl}users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: data.avatar
			})
		});
	}
	changeUserInfo(data){
		return fetch(`${this._baseUrl}users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				about: data.job
			})
		});
	}
	addCard(data){
		return fetch(`${this._baseUrl}cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: data.title,
				link: data.link
			})
		});
	}
	deleteCard(id){
		return fetch(`${this._baseUrl}cards/${id}`, {
			method: 'DELETE',
			headers: this._headers,
		});
	}
	likeing=(data, userId)=>{
		if(data.likes.some(function(item){return item._id===userId/*'d5e262bcd7280f9c0c11a8e4'*/})){
			return fetch(`${this._baseUrl}cards/likes/${data._id}`, {
				method: 'DELETE',
				headers: this._headers,
			});
		}
		else{
			return fetch(`${this._baseUrl}cards/likes/${data._id}`, {
				method: 'PUT',
				headers: this._headers,
			});
		}
	}
}
