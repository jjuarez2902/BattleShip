// Jorge Juarez - Project 0 : Scrabble Game
// .js file used in conjunction with ../views/index.html

let colorInCell = function(cell, color){
    cell.style.backgroundColor = color;
};

let searchSpecialCellIdx = function(cell, special_cell_arr, color, text){
    for (let i = 0; i < special_cell_arr.length; i++) {
        console.log();
        if (cell.id == special_cell_arr[i].getX() + ',' + special_cell_arr[i].getY()) {
            cell.style.backgroundColor = color;
            cell.textContent = text;
            return true;
        } // end if
    } // end for
    return false;
};

let initSpecialCell = function(cell){
    // ugh idk how else to do this without brute force...
    searchSpecialCellIdx(cell, double_letter_idxs, 'lightblue', 'DL');
    searchSpecialCellIdx(cell, triple_letter_idxs, 'cornflowerblue', 'TL');
    searchSpecialCellIdx(cell, double_word_idxs, 'pink', 'DW');
    searchSpecialCellIdx(cell, triple_word_idxs, 'orange', 'TW');
} // end initSpecialCell function

let initFreeSpace = function(cell){
    cell.style.backgroundColor = "green";
    cell.textContent = "FREE";    
};

/*
    - So we want to instantiate a 2D array that holds the Cell and SpecialCell objects, to mimic the
    Scrabble table for configuration and manipulation.
    UGH I LOWKEY WANNA MAKE A 1D ARRAY AND THEN JUST DO THE THING YEAH BUT IDK MANG
*/
isSpecialCell = function(cell){ 
    if(searchSpecialCellIdx(cell, double_letter_idxs, 'lightblue', 'DL') || 
        searchSpecialCellIdx(cell, triple_letter_idxs, 'cornflowerblue', 'TL') ||
        searchSpecialCellIdx(cell, double_word_idxs, 'pink', 'DW') ||
        searchSpecialCellIdx(cell, triple_word_idxs, 'orange', 'TW')
    ) // first we want to implement a function that will tell us if the current cell we are building a SpecialCell
        return true;
    return false;
}



let createTable = function(){ // let's initialize the Scrabble Board!
    let row = ""; // host current row of Scrabble table
    let cell = "" // host current cell in current row of Scrabble table
    for(let i = 0; i < 15; i++){
        row = document.createElement('tr');
        for(let j = 0; j < 15; j++){
            cell = document.createElement('td'); // create a new html cell tag 
            cell.textContent = (i + 1) * (j + 1); // TODO: get rid of this debuggin line
            cell.id = `${i},${j}`; // set the id of the td cell as the format 'x-y'
           //colorInCell(cell, 'grey'); // color in the cell as the default format
            initSpecialCell(cell);
            if(i === 7 && j ===7)
                initFreeSpace(cell);
            row.appendChild(cell);
            document.getElementById('scrabble-table').appendChild(row);
        } // end inner for
    } // end outer for

    // and now for the top of the board, reference thead, ok idk how else to do this so here we go
    let str = "ABCDEFGHIJKLMNO";
    for(let i = 0; i < str.length; i++){
        cell = document.createElement('td');
        cell.textContent = str.substring(i, i+1);
        cell.id = `${str.substring(i,i+1)}`;
        document.getElementById('scrabble-table-head').appendChild(cell);
    }

}; // end createTable function

let c = initPt(3, 4);
let s = new SpecialCell(c);

window.onload = function(){
    createTable();
    console.log(triple_word_idxs[5].getX());
    console.log(s.getParentCell().getX());
    console.log(initTile("A").getLetter());
    document.getElementById('table-div').style.backgroundImage = "url('../img/wood.jpg')";
    console.log(tile_arr.length);
};
