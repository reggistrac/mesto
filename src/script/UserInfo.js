export default class UserInfo {
	constructor(data){
		this._name = data.name;
		this._job = data.job;
		
	}
	getUserInfo(){
		return {name: this._name.textContent, job: this._job.textContent};
	}
	setUserInfo(data){
		this._name.textContent = data.name;
		this._job.textContent = data.job;
	}
}