import Popup from './Popup.js';
import {subscibePopupImg, bigImgPopupImg} from '../index.js';

export default class PopupWithImage extends Popup{
	constructor(selector){
		super(selector);
	}
	showPopup(name, link) {
		subscibePopupImg.textContent = name;
		bigImgPopupImg.src = link;
		bigImgPopupImg.alt = name;
		super.showPopup();
	}
}
