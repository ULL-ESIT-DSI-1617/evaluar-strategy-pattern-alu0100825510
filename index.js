"use strict";
var getArea = require('./shapesarea.js');

require('./rectangle.js');
require('./square.js');
require('./triangle.js');

try {
  var t = getArea.getArea('Triangle',  { width: 100, height: 100 });
  console.log(t);
  var s = getArea.getArea('Square',    { width: 100 });
  console.log(s);
  var r = getArea.getArea('Rectangle', { width: 100, height: 100 });
  console.log(r);
  var b = getArea.getArea('Bogus');
}
catch (e) {
  console.log(e);
}
