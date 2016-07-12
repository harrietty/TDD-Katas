/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import hamming from '../13-hamming-numbers';

xdescribe('hamming', () => {
  it('should exist', () => {
    expect(hamming).to.be.a('function');
  });
  it('takes 1 argument', () => {
    hamming.should.have.length.of(1);
  });
  it('should return 1 for 1', () => {
    expect(hamming(1)).to.equal(1);
  });
});
