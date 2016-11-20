function ControllaNumero(id) {
	// alert(document.getElementById(id).value)
	var x = document.getElementById(id).value;
	var exp = /[0-9]{1}$/;
	if(!exp.test(x)){
		alert("Valore inserito non accettabile");
		document.getElementById(id).value = null;
	}
	else{
		document.getElementById(id).value = x[x.length-1]
	}
}


function genera() {
	var x = Math.floor(Math.random() * 9) + 1;
	alert(x);
}








