// Jorge Juarez - Project 0 : Scrabble Game
// .js file used in conjunction with ../views/index.html
// File specifies all variables and functions concerned with Point class

let Point = ( // class to instantiate Point object
    function () {
        let xSymbol = Symbol('x');
        let ySymbol = Symbol('y');
        function Point(x = 0, y = 0){
            this[xSymbol] = x;
            this[ySymbol] = y;
        };
        Point.prototype.getX = function () { return this[xSymbol]; };
        Point.prototype.setX = function (x) { this[xSymbol] = x; };
        Point.prototype.getY = function () { return this[ySymbol]; };
        Point.prototype.setY = function (y) { this[ySymbol] = y; };  
        return Point;                
    }
)();

let initPt = function (x, y) { // function to create a Point object for referencing special indices in board
    return new Point(x, y);
}; // kinda redundant but hey, I like readable code lol