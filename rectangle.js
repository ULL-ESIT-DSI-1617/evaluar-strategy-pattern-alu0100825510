/*var imp = require('./shapesarea');

var window = imp.window;
// Rectangle.js
(function(shapes) {
  var Rectangle = shapes.Rectangle = function(options) {
    this.width = options.width;
    this.height = options.height;
  };

  Rectangle.prototype.getArea = function() {
    return this.width * this.height;
  };
}(window.shapes = window.shapes || {}));
*/
"use strict";
var shape = require('./shape.js');

class Rectangle extends shape {
  constructor(options){
    super(options);
    this.width = this.options.width;
    this.height = this.options.height;
  }

  getArea() {
    return this.width * this.height;
  }
}

shape.shapes.Rectangle = Rectangle;
