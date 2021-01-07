export default class UserInfo {
	constructor(data){
		this._name = data.name;
		this._job = data.job;
		
	}
	getUserInfo(){
		const a = this._name.textContent;
		const b = this._job.textContent;
		return {name:a, job:b};
	}
	setUserInfo(data){
		this._name.textContent = data.name;
		this._job.textContent = data.job;
	}
}