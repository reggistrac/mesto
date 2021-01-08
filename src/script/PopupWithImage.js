import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
	constructor(selector, bigImgPopupImg, subscibePopupImg){
		super(selector);
		this._bigImgPopupImg = bigImgPopupImg;
		this._subscibePopupImg = subscibePopupImg;
	}
	showPopup(name, link) {
		this._subscibePopupImg.textContent = name;
		this._bigImgPopupImg.src = link;
		this._bigImgPopupImg.alt = name;
		super.showPopup();
	}
}
