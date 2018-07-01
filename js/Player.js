// Jorge Juarez - Project 0 : Scrabble Game
// .js file used in conjunction with ../views/index.html
// .js file houses the Player object, which will hold the current scores and such for the game

/* Anatomy of the Player class:
    idSymbol: number type, just is a plain id to get  a Player 1 or 2
    scoreSymbol: number type, tracks the current score of the Player
*/
let Player = (
    function(){
        let idSymbol = Symbol['id'];
        let scoreSymbol = Symbol['score'];
        let tilesSymbol = Symbol['tiles'];
        function Player(id = 1, score = 0, tiles = null){
            this[idSymbol] = id;
            this[scoreSymbol] = score;
            this[tileSymbol] = tiles;
        }
        Player.prototype.getId = function() { return this[idSymbol]; }; // getters
        Player.prototype.getScore = function() { return this[scoreSymbol]; };
        Player.prototype.getTiles = function() { return this[tilesSymbol]; };
        Player.prototype.setId = function(id) { this[idSymbol] = id; }; // setters
        Player.prototype.setScore = function(score) { this[scoreSymbol]  = score; }
        return Player;
    }
)();