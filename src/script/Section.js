export default class Section {
	constructor(/*items, */callback, selector){
		//this._items = items;
		this._callback = callback;
		this._selector = selector;
	}
	addElement(element, block, after) {
		if(after){block.append(element);}
		else{block.prepend(element);}
	}

	creataItem = (item, after) => {
		item.title = item.name;
		const newCard = this._callback(item);
		this.addElement(newCard.createCard(), this._selector, after);
	}

	createStartGrid(data) {
		data.forEach((item)=>{
			this.creataItem(item, true);
		}	);
	}
}
