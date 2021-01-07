import Card from './Card.js';

export default class Section {
	constructor(items, selector){
		this._items = items;
		this._selector = selector;
	}
	addElement(element, block) {	block.prepend(element);}
	creataItem(item,callback) {
		const newCard = new Card(item, '#card', callback);
		this.addElement(newCard.createCard(), this._selector);
	}
	createStartGrid(callback) {
		this._items.forEach((item)=>{
			this.creataItem(item,callback);
		}	);
	}
	
}