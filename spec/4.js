/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import nextBiggest from '../4-next-biggest-number';

xdescribe('nextBiggest', () => {
  it('should exist', () => {
    expect(nextBiggest).to.be.a('function');
  });
  it('should take one argument', () => {
    nextBiggest.should.have.length.of(1);
  });
  it('should return 5 for 5', () => {
    expect(nextBiggest(5)).to.equal(5);
  });
});
