function ShoppingList(){
	this.List = [];
}

ShoppingList.prototype.add = function(item){
	this.List.push(item);
}
ShoppingList.prototype.del = function(i){
	this.List.splice(i, 1);
}
