/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import isPolydivisible from '../3-polydivisible-numbers';

xdescribe('polydivisible', () => {
  it('should exist', () => {
    expect(isPolydivisible).to.be.a('function');
  });
  it('should take two arguments', () => {
    isPolydivisible.should.have.length.of(2);
  });
  it('should return true for 1 and 10', () => {
    expect(isPolydivisible(1, 10)).to.be.true;
  });
});
