// Jorge Juarez - Project 0 : Scrabble Game
// .js file used in conjunction with ../views/index.html

let row = ""; // host current row of Scrabble table
let cell = "" // host current cell in current row of Scrabble table

let colorInCell = function(cell, color){
    cell.style.backgroundColor = color;
};

let searchSpecialCellIdx = function(cell, special_cell_arr, color, text){
    for (let i = 0; i < special_cell_arr.length; i++) {
        console.log();
        if (cell.id == special_cell_arr[i].getX() + ',' + special_cell_arr[i].getY()) {
            cell.style.backgroundColor = color;
            cell.textContent = text;
        } // end if
    } // end for
};
let initSpecialCell = function(cell){
    // ugh idk how else to do this without brute force...
    searchSpecialCellIdx(cell, double_letter_idxs, 'lightblue', 'DOU_L');
    searchSpecialCellIdx(cell, triple_letter_idxs, 'cornflowerblue', 'TRI_L');
    searchSpecialCellIdx(cell, double_word_idxs, 'pink', 'DOU_W');
    searchSpecialCellIdx(cell, triple_word_idxs, 'orange', 'TRI_W');
} // end initSpecialCell function

let initFreeSpace = function(cell){
    cell.style.backgroundColor = "green";
    cell.textContent = "FREE";    
};

let createTable = function(){ // let's initialize the Scrabble Board!
    console.log("hi");
    for(let i = 0; i < 15; i++){
        row = document.createElement('tr');
        for(let j = 0; j < 15; j++){
            cell = document.createElement('td');
            cell.textContent = (i + 1) * (j + 1);
            cell.id = `${i},${j}`;
            colorInCell(cell, 'grey');
            initSpecialCell(cell);
            if(i === 7 && j ===7)
                initFreeSpace(cell);
            row.appendChild(cell);
            document.getElementById('scrabble-table').appendChild(row);
        } // end inner for
    } // end outer for
}; // end createTable function

window.onload = function(){
    createTable();
    console.log(triple_word_idxs[5].getX());
};
