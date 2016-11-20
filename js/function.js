
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

function Test() {
	alert(sudoku[8][5]);
}

function genera(){

}



// function Solver() {
//     this.working_grid = [
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0]
//     ];
// };

// Solver.prototype.validate_row = function (r, c) {
//     var value = this.working_grid[r][c];
//     for (var _c = 0; _c < 9; _c++) {
//         if (_c != c && this.working_grid[r][_c] == value) {
//             return false;
//         }
//     }
//     return true;
// };

// Solver.prototype.validate_column = function (r, c) {
//     var value = this.working_grid[r][c];
//     for (var _r = 0; _r < 9; _r++) {
//         if (_r != r && this.working_grid[_r][c] == value) {
//             return false;
//         }
//     }
//     return true;
// };

// Solver.prototype.validate_box = function (r, c) {
//     var value = this.working_grid[r][c];
//     var box_r = Math.floor(r / 3);
//     var box_c = Math.floor(c / 3);

//     for (var _r = box_r * 3; _r < box_r * 3 + 3; _r++) {
//         for (var _c = box_c * 3; _c < box_c * 3 + 3; _c++) {
//             if (_r != r && _c != c && this.working_grid[_r][_c] == value) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };

// Solver.prototype.backtrack = function (r, c) {
//     c++; // Move to next cell in row
//     if (c > 8) { // Moves to next row when end of column is reached
//         c = 0;
//         r++;
//         if (r > 8) { // Checks if end of grid is reached
//             return true;
//         }
//     }

//     if (this.working_grid[r][c] != 0) { // Move to next cell if user has entered a number in current cell
//         if (!(this.validate_row(r, c) && this.validate_column(r, c) && this.validate_box(r, c))){
//             return false;
//         }
//         return this.backtrack(r, c);
//     } else { // Goes through all possible numbers if user has left cell blank
//         for (var x = 1; x < 10; x++) {
//             this.working_grid[r][c] = x;
//             if (this.validate_row(r, c) &&  this.validate_column(r, c) && this.validate_box(r, c)){
//                 if (this.backtrack(r, c)) {
//                     return true;
//                 }
//             }
//         }
//         this.working_grid[r][c] = 0;
//         return false;
//     }
// };

// Solver.prototype.solve = function () {
// 	// Validate initial grid
// 	for(var r = 0; r < 9; r++){
// 		for(var c = 0; c < 9; c++){
// 			if (this.working_grid[r][c] != 0 && !(this.validate_row(r, c) && this.validate_column(r, c) && this.validate_box(r, c))){
//     			return false;
// 			}
// 		}
// 	}

//     return this.backtrack(0, -1);
// };