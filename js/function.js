
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

// document.getElementById(id1).value = Math.floor(Math.random() * 9) + 1;

function generaMod() {

	document.getElementById("c11").value = 8;
	document.getElementById("c13").value = 5;
	document.getElementById("c14").value = 7;
	document.getElementById("c18").value = 9;
	document.getElementById("c23").value = 9;
	document.getElementById("c25").value = 4;
	document.getElementById("c28").value = 3;
	document.getElementById("c29").value = 5;
	document.getElementById("c32").value = 7;
	document.getElementById("c33").value = 1;
	document.getElementById("c35").value = 5;
	document.getElementById("c42").value = 9;
	document.getElementById("c44").value = 6;
	document.getElementById("c47").value = 8;
	document.getElementById("c49").value = 2;
	document.getElementById("c51").value = 1;
	document.getElementById("c52").value = 4;
	document.getElementById("c55").value = 9;
	document.getElementById("c62").value = 2;
	document.getElementById("c65").value = 4;
	document.getElementById("c66").value = 3;
	document.getElementById("c67").value = 5;
	document.getElementById("c71").value = 9;
	document.getElementById("c76").value = 2;
	document.getElementById("c79").value = 3;
	document.getElementById("c81").value = 3;
	document.getElementById("c82").value = 5;
	document.getElementById("c86").value = 8;
	document.getElementById("c94").value = 9;
	document.getElementById("c95").value = 3;
	document.getElementById("c97").value = 1;
	document.getElementById("c98").value = 5;
	
}

function Test() {
	alert(Math.floor(7/3));
}

function genera(){

}


var sudoku;  //server per caricare i dati  "-1" caselle vuote da riempire

function risolvi() {
	carica_dati();

}

function carica_dati() {
	sudoku = new Array();
	var id;
	var x;
	for (var i = 1; i < 10; i++) {
		sudoku[i] = new Array;
		for (var j = 1; j < 10; j++) {
			id = "c" + i + j;
			x = document.getElementById(id).value;
			if (x != "") {
				sudoku[i][j] = document.getElementById(id).value;
			}
			else{
				sudoku[i][j] = "-1"
			}
			
		}
	}

}

function controlla_numero(riga,colonna,numero) {
	
	for (var i = 1; i < 10; i++) {
		if (sudoku[riga][i] == numero) {
			return false;
		}
	}

	for (var i = 1; i < 10; i++) {
		if (sudoku[i][colonna] == numero) {
			return false;
		}
	}


	for (var i = Math.floor(riga/3) * 3; i < ; i++) { //NO
		Things[i]
	}

}

