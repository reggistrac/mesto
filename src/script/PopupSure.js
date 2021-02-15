import Popup from './Popup.js';

export default class PopupSure extends Popup{
	constructor(data, callback){
		super(data.popup);
		this._button = data.button;
		this._callback = callback;
	}
	setEventListeners(){
		super.setEventListeners();
		this._button.addEventListener('click', ()=>{
			this._callback(this._target, this._id);
		});
	}
	showPopup(arg, id){
		this._target = arg;
		this._id = id;
		super.showPopup();
	}
}