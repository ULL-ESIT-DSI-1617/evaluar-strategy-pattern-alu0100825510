"use strict";
class Shape {
 constructor (options) {
     this.options = options;
   }
}
Shape.shapes = Shape.shapes || {};

module.exports = Shape;
