/*var imp = require('./shapesarea');

var window = imp.window;



// square.js
(function(shapes) {
  var Square = shapes.Square = function(options) {
    this.width = options.width;
  };

  Square.prototype.getArea = function() {
    return Math.pow(this.width, 2);
  };
}(window.shapes = window.shapes || {}));
*/
"use strict";
var shape = require('./shape.js');

class Square extends shape {
  constructor(options){
    super(options);
    this.width = this.options.width;
  }

  getArea() {
    return Math.pow(this.width, 2);
  }
}

shape.shapes.Square = Square;
