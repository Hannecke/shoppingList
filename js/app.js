//create list
var ListaDeLaCompra = new ShoppingList();
	

//get input and add to List
var Lista = document.getElementById("shoppingList");
var input = document.getElementById("newItem");
var buttonAdd = document.getElementById('add');
var form = document.getElementById("form");

form.onsubmit = function(e){
	e.preventDefault();
	var input2 = parseFloat(document.getElementById("Precio").value, 10);
	if(input.value && input2){	 
	 //New item
	 var newItem  =  new Item(input.value, input2);
	 ListaDeLaCompra.add(newItem);

	 Lista.innerHTML += "<li>" + input.value + " : " +  input2 + " <input type='checkbox' class='checkbox'>" + "</li>";
	 //clear inputs
	 input.value = '';
	 document.getElementById("Precio").value = '';

	}
	else if(!input.value || !input2){
		alert("Add a new item and price");

	}else{
		alert("No valido");
	}
	totalizar();
};


//Delete  checked item
	
var buttonDelete = document.getElementById("delete");


buttonDelete.onclick = function(){
	var input = document.getElementsByClassName("checkbox");
	for(var i= 0; i < input.length; i++){	
	    if(input[i].checked){
				input[i].parentNode.remove();
				ListaDeLaCompra.del(i); //numero de inputs adicionales
				i--;										
		}

	}
	totalizar();
};


//Totalizar
var total = document.getElementById("total");

function totalizar(){
	var listTotal = 0;
	for(var i= 0; i <  ListaDeLaCompra.List.length; i++){	
		 listTotal += ListaDeLaCompra.List[i].price;

	}	
	total.innerHTML = "Total: " + listTotal + "&pound";
}
totalizar();










  

 
