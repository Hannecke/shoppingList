function Item(item, price){
	this.item = item;
	this.price = price;

}

Item.prototype.showItem = function (){
	console.log(this.price);

}
