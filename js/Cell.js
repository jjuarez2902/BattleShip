// Jorge Juarez - Project 0 : Scrabble Game
// .js file used in conjunction with ../views/index.html
// .js file houses the Cell object, which is the main Object used to check the status of the game board

let Cell = (
    function () {
        let pointSymbol = Symbol('point');
        let isOccupiedSymbol = Symbol('isOccupied');
        function Cell(point = initPt(0,0), isOccupied = false){
            this[pointSymbol] = point;
            this[isOccupiedSymbol] = isOccupied;
        }
        Cell.prototype.getPoint = function () { return this[point]; };
        Cell.prototype.getIsOccupied = function () { return this[isOccupied]; };
        Cell.prototype.setIsOccupied = function (isOccupied) { this[isOccupied] = isOccupied; }; 
        return Cell;
    }
)();

let initCell = function(point, isOccupied){
    return new Cell(point, isOccupied);
}