'use strict';

var _chai = require('chai');

var _prettifier = require('../src/prettifier');

describe('prettifier', function () {
  it('should return a string', function () {
    (0, _chai.expect)((0, _prettifier.prettifier)(1)).to.be.a('string');
  });

  it('should leave numbers less that 1 million alone', function () {
    (0, _chai.expect)((0, _prettifier.prettifier)(1)).to.equal('1');
    (0, _chai.expect)((0, _prettifier.prettifier)(32)).to.equal('32');
    (0, _chai.expect)((0, _prettifier.prettifier)(532)).to.equal('532');
    (0, _chai.expect)((0, _prettifier.prettifier)(2234)).to.equal('2234');
    (0, _chai.expect)((0, _prettifier.prettifier)(16234)).to.equal('16234');
    (0, _chai.expect)((0, _prettifier.prettifier)(999999)).to.equal('999999');
  });

  it('should truncate numbers to one decimal place', function () {
    (0, _chai.expect)((0, _prettifier.prettifier)(234.2323)).to.equal('234.2');
    (0, _chai.expect)((0, _prettifier.prettifier)(234.675)).to.equal('234.6');
  });

  it('should truncate numbers numbers that round to millions to be truncated to tenths of millions', function () {
    (0, _chai.expect)((0, _prettifier.prettifier)(1000000)).to.equal('1M');
    (0, _chai.expect)((0, _prettifier.prettifier)(1234994)).to.equal('1.2M');
    (0, _chai.expect)((0, _prettifier.prettifier)(2500000.34)).to.equal('2.5M');
    (0, _chai.expect)((0, _prettifier.prettifier)(1453438)).to.equal('1.4M');
    (0, _chai.expect)((0, _prettifier.prettifier)(10000000)).to.equal('10M');
    (0, _chai.expect)((0, _prettifier.prettifier)(10500000)).to.equal('10.5M');
    (0, _chai.expect)((0, _prettifier.prettifier)(100000000)).to.equal('100M');
    (0, _chai.expect)((0, _prettifier.prettifier)(100500000)).to.equal('100.5M');
    (0, _chai.expect)((0, _prettifier.prettifier)(999999999)).to.equal('999.9M');
  });

  it('should truncate numbers numbers that round to billions to be truncated to tenths of billions', function () {
    (0, _chai.expect)((0, _prettifier.prettifier)(1000000000)).to.equal('1B');
    (0, _chai.expect)((0, _prettifier.prettifier)(1123456789)).to.equal('1.1B');
    (0, _chai.expect)((0, _prettifier.prettifier)(1453438000)).to.equal('1.4B');
    (0, _chai.expect)((0, _prettifier.prettifier)(10000000000)).to.equal('10B');
    (0, _chai.expect)((0, _prettifier.prettifier)(10500000000)).to.equal('10.5B');
    (0, _chai.expect)((0, _prettifier.prettifier)(100000000000)).to.equal('100B');
    (0, _chai.expect)((0, _prettifier.prettifier)(100500000000)).to.equal('100.5B');
  });

  it('should truncate numbers numbers that round to trillions to be truncated to tenths of trillions', function () {
    (0, _chai.expect)((0, _prettifier.prettifier)(1000000000000)).to.equal('1T');
    (0, _chai.expect)((0, _prettifier.prettifier)(1234994000000)).to.equal('1.2T');
    (0, _chai.expect)((0, _prettifier.prettifier)(1453438000000)).to.equal('1.4T');
    (0, _chai.expect)((0, _prettifier.prettifier)(10000000000000)).to.equal('10T');
    (0, _chai.expect)((0, _prettifier.prettifier)(10500000000000)).to.equal('10.5T');
    (0, _chai.expect)((0, _prettifier.prettifier)(100000000000000)).to.equal('100T');
    (0, _chai.expect)((0, _prettifier.prettifier)(100500000000000)).to.equal('100.5T');
  });
});

//# sourceMappingURL=prettifier_spec-compiled.js.map