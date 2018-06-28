// Jorge Juarez - Project 0: Scrabble Game
// .js file used in conjunction with ../views/index.html
// .js file to house Tile object, which is the tiles contained in a player's hand or deck

let Tile = (
    function(){
        letterSymbol = Symbol('letter');
        letterValueSymbol = Symbol('letterValue');
        function Tile(letter = ' ', letterValue = 0){
            this[letterSymbol] = letter;
            this[letterValueSymbol] = letterValue;
        }
        Tile.prototype.getLetter = function(){ return this[letterSymbol]; };
        Tile.prototype.getLetterValue = function (){ return this[letterValueSymbol]; };
        Tile.prototype.setLetter = function(letter){ this[letterSymbol] = letter; };
        Tile.prototype.setLetterValue = function(letterValue){ this[letterValue] = letterValue; };
        return Tile;
    }
)();

let initTile = function(letter, letterValue){
    return new Tile(letter, letterValue);
};

let fisherYatesShuffle = function(tile_arr){
    let j = 0;
    let temp = initTile();
    for(k = 0; k < 2; k++){
        for(let i = 0; i < tile_arr.length - 2; i++){
            j = Math.floor(Math.random() * tile_arr.length);
            temp = tile_arr[i];
            tile_arr[i] = tile_arr[j];
            tile_arr[j] = temp;
        } // end inner loop
    } // end outer loop
    return tile_arr;
};