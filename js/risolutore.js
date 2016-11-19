
function erroreDati(){
	window.alert("Attenzione: dati sbagliati")
}

function recuperaDati(){
	var form = document.getElementById("sudoku");
	var text = form.getElementsByTagName('input');
	var arraySudoku = new Array();
	var j = 0;
	for(var i=0; i<text.length; i++){
		if(i%9 == 0){
			arraySudoku[j] = new Array();
			j++
		}
		if(text[i].value!="" && text[i].value.search("^[1-9]$")==-1)
			erroreDati();
		if(text[i].value!="")
			arraySudoku[Math.floor(i/9)][i%9] = text[i].value;
		else arraySudoku[Math.floor(i/9)][i%9] = "-1";
	}
	return arraySudoku;
}

function isCorretto(arraySudoku, rig, col){
	var numero = arraySudoku[rig][col];

	var i = 0, j = 0;

	//Stessa riga
	for(i=0; i<9; i++){
		if(i!=col){
			if(arraySudoku[rig][i]==arraySudoku[rig][col])
				return false;
		}
	}

	//Stessa colonna
	for(i=0; i<9; i++){
		if(i!=rig){
			if(arraySudoku[i][col]==arraySudoku[rig][col])
				return false;
		}
	}

	//Stesso quadrante
	var ordinataQuadrante = Math.floor(rig/3);
	var ascissaQuadrante = Math.floor(col/3);
	for(i=ordinataQuadrante*3; i<(ordinataQuadrante*3)+3; i++){
		for(j=ascissaQuadrante*3; j<(ascissaQuadrante*3)+3; j++){
			if(i!=rig && j!=col){
				if(arraySudoku[i][j]==arraySudoku[rig][col])
					return false;
			}
		}
	}

	return true;
}

//Controlla se un numero può stare in una certa posizione
function isCorretto(arraySudoku, rig, col, num){

	var i = 0, j = 0;
	//Stessa riga
	for(i=0; i<9; i++){
		if(i!=col){
			if(arraySudoku[rig][i]==num)
				return false;
		}
	}

	//Stessa colonna
	for(i=0; i<9; i++){
		if(i!=rig){
			if(arraySudoku[i][col]==num)
				return false;
		}
	}

	//Stesso quadrante
	var ordinataQuadrante = Math.floor(rig/3);
	var ascissaQuadrante = Math.floor(col/3);
	for(i=ordinataQuadrante*3; i<(ordinataQuadrante*3)+3; i++){
		for(j=ascissaQuadrante*3; j<(ascissaQuadrante*3)+3; j++){
			if(i!=rig && j!=col){
				if(arraySudoku[i][j]==num)
					return false;
			}
		}
	}

	return true;
}

//Valori possibili per una determinata casella
function valoriPossibili(arraySudoku, rig, col){
	var valori = new Array();
	var numValori = 0;
	for(var i=1; i<10; i++){
		if(isCorretto(arraySudoku, rig, col, i)){
			valori[numValori] = i;
			numValori++;
		}
	}
	return valori;
}

function risolvi(){
	var arraySudoku = recuperaDati();

	//Controllo sui dati
	for(var i=0; i<9; i++){
		for(var j=0; j<9; j++){
			if(arraySudoku[i][j]!=-1 && !isCorretto(arraySudoku, i, j))
				erroreDati();
		}
	}

	//Individuazioni posti mancanti
	var posizioniMancanti = new Array();
	var numeroPosizioniMancanti = 0;
	for(var i=0; i<9; i++){
		for(var j=0; j<9; j++){
			if(arraySudoku[i][j]==-1){
				posizioniMancanti[numeroPosizioniMancanti] = i + "," + j;
				numeroPosizioniMancanti++;
			}
		}
	}

	solver(arraySudoku, posizioniMancanti, 0);

	var form = document.getElementById("sudoku");
	var text = form.getElementsByTagName('input');
	for(var i=0; i<9; i++){
		for(var j=0; j<9; j++){
			text[i*9 + j].value = arraySudoku[i][j];
		}
	}
	
}

function solver(arraySudoku, posizioniMancanti, numPosizione){
	//Se abbiamo passato l'ultima casella, l'algoritmo deve terminare
	if(numPosizione==posizioniMancanti.length)
		return 1;

	var numTentativo = 0;
	var rig = parseInt(posizioniMancanti[numPosizione].charAt(0));
	var col = parseInt(posizioniMancanti[numPosizione].charAt(2));
	var valoriOk = valoriPossibili(arraySudoku, rig, col);
	
	//La soluzione parziale è sbagliata se non ci sono valori possibili
	if(valoriOk.length == 0)
		return -1;

	//Tentiamo di mettere il primo valore fra i possibili
	arraySudoku[rig][col] = valoriOk[0];

	var numPosizioneCopia = numPosizione+1;

	//Continuiamo a provare valori finché non riusciamo a completare la soluzione
	while(solver(arraySudoku, posizioniMancanti, numPosizioneCopia)==-1){

		//Se si esauriscono i valori possibili, non è questa la strada
		numTentativo++;
		if(numTentativo>=valoriOk.length){
			arraySudoku[rig][col]=-1;
			return -1;
		}
		arraySudoku[rig][col]=valoriOk[numTentativo];
	}

	//Abbiamo trovato una soluzione che funziona
	return 1;
}