// Jorge Juarez - Project 0 : Scrabble Game
// .js file used in conjunction with ../views/index.html

let handTiles = function(player, how_many){ // params: player (Player object), how_many (number, btwn 1 and 7)
    for(let i = 0; i < how_many; i++){
        let temp = tile_arr.splice(0, 1); // splice(what_index, how_many)
        player.getTiles().push(temp);
    }
};

let returnTiles = function(player, which_ones){ // params: player (Player object), which_ones (Tile Object array (size 1-7))
    for(let i = 0; i < which_ones.length; i++){
        let temp = player.getTiles().indexOf(which_ones[i]);
        player.getTiles().splice(temp, 1);
        tile_arr.push(which_ones[i]);
    }
}

let shiftToPlayerX = function(){
    // pass, exchange tiles, place tiles on board
}

let challengeWord = function(word){

}

let initiateGame = function(){
    handTiles(player_one, 7);
    handTiles(player_two, 7);

    //returnTiles(player_one, [' ',' '])
};