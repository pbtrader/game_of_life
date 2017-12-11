var size = 10;		//initialize a 10 x 10 grid

var gridArr = newArray(size);
fillRandom(size);		// fill the grid with random integers, either 0 or 1
printArr(gridArr,size);
updateGrid(gridArr);	// update grid based on game rules


// initialize empty 2d array
function newArray(size) {
	var arr= [] ;
	for (var i = 0; i < size; i ++){
		arr[i] = [];

	}
	return arr;
}

// fill the new array with random values, either 0 or 1
function fillRandom(size) {
	for (var row = 0; row < size; row ++ ) {
		for (var col = 0; col < size; col ++) {
			gridArr[row][col] = Math.round(Math.random());
		}
	}
}


// print the array to the console
function printArr(array,size){
for (var i = 0; i < size; i ++){
	console.log(array[i]);
  }
}


// update the grid based on game rules
function updateGrid (array) {
var newGrid = newArray(size);
var newCell;

  for (var j = 0; j < size ; j ++){
  	for (var k = 0; k < size ; k ++) {
    	
       var currentCell = array[j][k];
    	 newGrid[j][k] = getNewCell(j,k,size,array);       
    }
  }
  
  printArr(newGrid,size);
}


// calculate new values for each cell
function getNewCell (row,col,size,array) {
	var newCell;
	var liveNeighborCount = 0;
	var currentCell = array[row][col];
	var startRow = (row > 0) ? (row - 1) : row;
  var endRow = (row < (size - 1)) ? (row + 1): row;
  var startCol = (col > 0) ? (col - 1) : col;
  var endCol = (col < (size - 1)) ? (col + 1) : col;
  
  for (var i = startRow; i <= endRow; i ++) {
  	for (var j = startCol; j <= endCol; j ++) {
    	if ((i === row) && (j === col)) {
      //
      }
      else {
      	liveNeighborCount+=array[i][j];
      }
    }
  }
  
   if (currentCell === 0 && liveNeighborCount === 3) {
        	newCell = 1;
        }
        else if (currentCell ===1 && liveNeighborCount < 2) {
        	newCell = 0;
        }
        else if (currentCell === 1 && liveNeighborCount < 4) {
        	newCell = 1;
        }
        else if (currentCell === 1 && liveNeighborCount > 4) {
        	newCell = 0;
        }
        else {
        	newCell = 0;
        }
  	
    return newCell;
}





