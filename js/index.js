// Jorge Juarez - Project 0
// .js file used in conjunction with ../views/index.html

let row = ""; // host current row of Scrabble table
let cell = "" // host current cell in current row of Scrabble table

let colorInCell = function(cell, cell_id, triple_word_idxs){
    cell.style.color = 'red';
};

let createTable = function(){ // let's initialize the Scrabble Board!
    console.log("hi");
    for(let i = 0; i < 15; i++){
        row = document.createElement('tr');
        for(let j = 0; j < 15; j++){
            cell = document.createElement('td');
            cell.textContent = (i + 1) * (j + 1);
            cell.id = `${i},${j}`;
            colorInCell(cell, cell.id, triple_word_idxs);
            //console.log(cell.id);
            row.appendChild(cell);
            document.getElementById('scrabble-table').appendChild(row);
        }
    }
};

window.onload = function(){
    createTable();
    console.log(triple_word_idxs[5].getX());
};
