import {expect} from 'chai';
import {prettifier} from '../src/prettifier';

describe('prettifier', () => {
  it('should return a string', () => {
    expect(prettifier(1)).to.be.a('string');
  });

  it('should leave numbers less that 1 million alone', () => {
    expect(prettifier(1)).to.equal('1');
    expect(prettifier(32)).to.equal('32');
    expect(prettifier(532)).to.equal('532');
    expect(prettifier(2234)).to.equal('2234');
    expect(prettifier(16234)).to.equal('16234');
    expect(prettifier(999999)).to.equal('999999');
  });

  it('should truncate numbers to one decimal place', () => {
    expect(prettifier(234.2323)).to.equal('234.2');
    expect(prettifier(234.675)).to.equal('234.6');
  });

  it('should truncate numbers numbers that round to millions to be truncated to tenths of millions', () => {
    expect(prettifier(1000000)).to.equal('1M');
    expect(prettifier(1234994)).to.equal('1.2M');
    expect(prettifier(2500000.34)).to.equal('2.5M');
    expect(prettifier(1453438)).to.equal('1.4M');
    expect(prettifier(10000000)).to.equal('10M');
    expect(prettifier(10500000)).to.equal('10.5M');
    expect(prettifier(100000000)).to.equal('100M');
    expect(prettifier(100500000)).to.equal('100.5M');
    expect(prettifier(999999999)).to.equal('999.9M')
  });

  it('should truncate numbers numbers that round to billions to be truncated to tenths of billions', () => {
    expect(prettifier(1000000000)).to.equal('1B');
    expect(prettifier(1123456789)).to.equal('1.1B');
    expect(prettifier(1453438000)).to.equal('1.4B');
    expect(prettifier(10000000000)).to.equal('10B');
    expect(prettifier(10500000000)).to.equal('10.5B');
    expect(prettifier(100000000000)).to.equal('100B');
    expect(prettifier(100500000000)).to.equal('100.5B');
  });

  it('should truncate numbers numbers that round to trillions to be truncated to tenths of trillions', () => {
    expect(prettifier(1000000000000)).to.equal('1T');
    expect(prettifier(1234994000000)).to.equal('1.2T');
    expect(prettifier(1453438000000)).to.equal('1.4T');
    expect(prettifier(10000000000000)).to.equal('10T');
    expect(prettifier(10500000000000)).to.equal('10.5T');
    expect(prettifier(100000000000000)).to.equal('100T');
    expect(prettifier(100500000000000)).to.equal('100.5T');
  });
});