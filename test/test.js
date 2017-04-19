var getArea = require("../shapesarea.js");
require('should');
require('../rectangle.js');
require('../square.js');
require('../triangle.js');


describe("getArea", function() {
  it("must compute the triangle area correctly", function() {
    var result = getArea.getArea('Triangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.equal(5000);
  })

  it("must compute the rectangle area correctly", function() {
    var result = getArea.getArea('Rectangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.equal(10000);
  })

  it("must compute the square area correctly", function() {
    var result = getArea.getArea('Square',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.equal(10000);
  })
});
