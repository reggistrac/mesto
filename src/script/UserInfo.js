export default class UserInfo {
	constructor(data){
		this._avatar = data.avatar;
		this._name = data.name;
		this._job = data.job;
		this._userId = data.userId;
	}
	getUserInfo(){
		return {name: this._name.textContent, job: this._job.textContent};
	}
	setUserInfo = (data)=>{console.log(data._id);
		this._avatar.style.backgroundImage = `url(${data.avatar})`;
		this._name.textContent = data.name;
		this._job.textContent = data.about;
		this._userId = data._id;
		console.log('ИД пользователя '+this._userId);
	}
}
