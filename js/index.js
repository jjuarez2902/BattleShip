// Jorge Juarez - Project 0 : Scrabble Game
// .js file used in conjunction with ../views/index.html
let initFreeSpace = function(cell){
    cell.style.backgroundColor = "green";
    cell.style.fontWeight = "800";
    cell.textContent = "FREE";    
};

/*
    - So we want to instantiate a 2D array that holds the Cell and SpecialCell objects, to mimic the
    Scrabble table for configuration and manipulation.
    UGH I LOWKEY WANNA MAKE A 1D ARRAY AND THEN JUST DO THE THING YEAH BUT IDK MANG
*/

let whatKindOfSpecialCell = function(cell, special_cell_arr){ // WELL, IS IT???
    for(let i = 0; i < special_cell_arr.length; i++){
        if (cell.id == special_cell_arr[i].getX() + ',' + special_cell_arr[i].getY()){
            return true;
        }
    }
    return false;
};

let raiseSpecialCellFlag = function(cell){
    if (whatKindOfSpecialCell(cell, double_letter_idxs)) {
        return "dl";
    } // this cell is  a double-letter score cell
    else if (whatKindOfSpecialCell(cell, triple_letter_idxs)) {
        return "tl";
    } // this cell is a triple-letter score tell
    else if (whatKindOfSpecialCell(cell, double_word_idxs)) {
        return "dw";
    } // this cell is a double-word score cell
    else if (whatKindOfSpecialCell(cell, triple_word_idxs)) {
        return "tw";
    } // this cell is a triple-word score cell
    return null;

};

let styleSpecialCell = function(cell, color){
    cell.style.backgroundColor = color;
    cell.style.fontWeight = '900';
}


let createTable = function(){ // let's initialize the Scrabble Board!
    let row = ""; // host current row of Scrabble table
    let cell = "" // host current cell in current row of Scrabble table
    for(let i = 0; i < 15; i++){
        row = document.createElement('tr');
        for(let j = 0; j < 15; j++){
            cell = document.createElement('td'); // create a new html cell tag 
            cell.textContent = `${i},${j}`; // TODO: get rid of this debuggin line
            cell.id = `${i},${j}`; // set the id of the td cell as the format 'x-y'
            cell.style.color = "white";
           // in additon to styling these cells, we must CREATE OURRR SCRABBLE_CELL_ARR
           let sp_cell_flag = raiseSpecialCellFlag(cell);
           let temp_cell_obj = initCell(initPt(i,j), false);
           if (sp_cell_flag  != null){
               if(sp_cell_flag == 'dl'){ 
                   styleSpecialCell(cell, 'lightblue' );
                   scrabble_cell_arr[i][j] = initSCell(temp_cell_obj,'dl', true);
                }
               else if (sp_cell_flag == 'dw') {
                    styleSpecialCell(cell, 'cornflowerblue');
                    scrabble_cell_arr[i][j] = initSCell(temp_cell_obj, 'dw', true);
                }
               else if (sp_cell_flag == 'tl') { 
                   styleSpecialCell(cell, 'pink'); 
                   scrabble_cell_arr[i][j] = initSCell(temp_cell_obj, 'tl', true);
                }
               else if (sp_cell_flag == 'tw') { 
                   styleSpecialCell(cell, 'orange'); 
                   scrabble_cell_arr[i][j] = initSCell(temp_cell_obj, 'tw', true);
                } // tbh i could have used a switch case but
           } // end LONG IF STATEMENT
           else{
               scrabble_cell_arr[i][j] = temp_cell_obj;
           }
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
        cell.style.fontWweight = '900';
        cell.style.color = 'white';
        document.getElementById('scrabble-table-head').appendChild(cell);
    }

}; // end createTable function

/*
//let c = initPt(3, 4);
//let s = new SpecialCell(c);
//console.log(triple_word_idxs[5].getX());
//console.log(s.getParentCell().getX());
//console.log(initTile("A").getLetter());
let pos = function(){
    document.getElementById('td1').style.borderColor = "red";
};
*/

window.onload = function(){
    createTable();
    document.getElementById('scrabble-table').setAttribute('background', '../img/wood.jpg');
    fisherYatesShuffle(tile_arr);
    console.log(tile_arr);

    console.log(scrabble_cell_arr);

    initiateGame();

    console.log(player_one.getTiles());
    console.log(player_two.getTiles());
    console.log(tile_arr);
    //document.getElementById('td1').addEventListener('mouseover', pos);
};


