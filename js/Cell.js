// Jorge Juarez - Project 0 : Scrabble Game
// .js file used in conjunction with ../views/index.html
// .js file houses the Cell object, which is the main Object used to check the status of the game board
// this also houses the SpecialCell object, which are the cell that contain an event such as Double Letter Score

// --------------------- begin Cell class -------------------------------------------------
/* Anatomy of the Cell class: 
        pointSymbol: this is of type Point, refer to ../js/Point.js file for instructions on instantiating
            the Point class
        isOccupiedSymbol: this is of type boolean, is set to false at start of game, once a player sets a tile
            on the cell, this is set to true
*/
let Cell = (    
    function () {
        let pointSymbol = Symbol('point');
        let isOccupiedSymbol = Symbol('isOccupied');
        function Cell(point = initPt(0,0), isOccupied = false){
            this[pointSymbol] = point;
            this[isOccupiedSymbol] = isOccupied;
        }
        Cell.prototype.getPoint = function () { return this[pointSymbol]; }; // getters
        Cell.prototype.getIsOccupied = function () { return this[isOccupiedSymbol]; };
        Cell.prototype.setIsOccupied = function (isOccupied) { this[isOccupiedSymbol] = isOccupied; };  // setters
        return Cell;
    }
)(); 
// --------------------- end Cell class ----------------------------------------------------
// ------------begin SpecialCell class, an extension of the Cell class----------------------
/* Anatomy of the SpecialCell class:
    parentCellSymbol: since I'm not sure how inheritance works, let's pass a Cell object to this class
        and call it it's parent Cell, why not? (!!!idk!!)
    dtlwFlagSymbol: Double-Triple-Letter-Word flag, this will be a flag that determines which type of 
        score booster this cell will give to the player, this will be one of the following:
            'free': indicates a free space cell
            'dl': indicates double letter
            'dw': indiciates double word
            'tl': indicates triple letter
            'tw': indicated triple word
    isFlagActiveSymbol: this is of type boolean, at the start of the game all cells have their powers
        activated. Once a user claims this space, the score booster can no longer be use (so make it false)
*/
let SpecialCell = (
   function(){
       let parentCellSymbol = Symbol('parentCell');
       let dtlwFlagSymbol = Symbol('dtlwFlagSymbol');
       let isFlagActiveSymbol = Symbol('isFlagActiveSymbol');
       function SpecialCell(parentCell = new Cell(), dtlwFlag = 0, isFlagActive = true){
           this[parentCellSymbol] = parentCell;
           this[dtlwFlagSymbol] = dtlwFlag;
           this[isFlagActiveSymbol] = isFlagActive;
       }
       SpecialCell.prototype.getParentCell = function() { return this[parentCellSymbol]; }; // getters
       SpecialCell.prototype.getDtlwFlag = function () { return this[dtlwFlagSymbol]; }; 
       SpecialCell.prototype.setDtlwFlag = function (dtlwFlag) { this[dtlwFlagSymbol] = dtlwFlag; };
       SpecialCell.prototype.getIsFlagActive = function(){return this[isFlagActiveSymbol]; }; // setters
       SpecialCell.prototype.setIsFlagActive = function(isFlagActive) {this[isFlagActiveSymbol] = isFlagActive;};
       return SpecialCell;
   }
)();
// --------------- end SpecialCell class -------------------------------------------------

let initCell = function(point, isOccupied){
    return new Cell(point, isOccupied);
} // looks prettier when you just call a functin to instantiate a class idk i say it is

let initSCell = function(parentCell, dtlwFlag, isFlagActive){
    return new SpecialCell(parentCell, dtlwFlag, isFlagActive);
} // SO IT MUST BE TRUE