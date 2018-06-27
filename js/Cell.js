// Jorge Juarez - Project 0 : Scrabble Game
// .js file used in conjunction with ../views/index.html
// .js file houses the Cell object, which is the main Object used to check the status of the game board
// this also houses the SpecialCell object, which are the cell that contain an event such as Double Letter Score

// --------------------- begin Cell class -------------------------------------------------
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
       SpecialCell.prototype.getParentCell = function() { return this[parentCellSymbol]; } // getters
       SpecialCell.prototype.getDtlwFlag = function () { return this[dtlwFlagSymbol]; } 
       SpecialCell.prototype.setDtlwFlag = function (dtlwFlag) { this[dtlwFlagSymbol] = dtlwFlag; }
       SpecialCell.prototype.getIsFlagActive = function(){return this[isFlagActiveSymbol]; } // setters
       SpecialCell.prototype.setIsFlagActive = function(isFlagActive) {this[isFlagActiveSymbol] = isFlagActive;}
       return SpecialCell;
   }
)();
// --------------- end SpecialCell class -------------------------------------------------

let initCell = function(point, isOccupied){
    return new Cell(point, isOccupied);
}

let initSCell = function(parentCell, dtlwFlag, isFlagActive){
    return new SpecialCell(parentCell, dtlwFlag, isFlagActive);
}