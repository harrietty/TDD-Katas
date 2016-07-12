/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import multiArray from '../7-multidimensional-array';

xdescribe('multiArray', () => {
  it('should exist', () => {
    expect(multiArray).to.be.a('function');
  });
  it('should return [1] for 1 and 1', () => {
    expect(multiArray(1, 1)).to.eql([1]);
  });
});
