/*var imp = require('./shapesarea');

var window = imp.window;


(function(shapes) { // triangle.js
  var Triangle = shapes.Triangle = function(options) {
    this.width = options.width;
    this.height = options.height;
  };
  Triangle.prototype.getArea = function() {
    return 0.5 * this.width * this.height;
  };
}(window.shapes = window.shapes || {}));*/
"use strict";
var shape = require('./shape.js');

class Triangle extends shape {
  constructor(options){
    super(options);
    this.width = this.options.width;
    this.height = this.options.height;
  }

  getArea() {
    return 0.5 * this.width * this.height;
  }
}

shape.shapes.Triangle = Triangle;
