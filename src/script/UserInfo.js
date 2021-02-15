export default class UserInfo {
	constructor(data){
		this._name = data.name;
		this._job = data.job;
		
	}
	getUserInfo(){
		return {name: this._name.textContent, job: this._job.textContent};
	}
	setUserInfo = (data)=>{
		//infouser.setUserInfo({name:result.name,job:result.about});
		//newAvaButton.style.backgroundImage = `url(${result.avatar})`;
		this._name.textContent = data.name;
		this._job.textContent = data.about;
		console.log('ИД пользователя '+data._id);
		//this._name.textContent = data.name;
		//this._job.textContent = data.job;
	}
}
