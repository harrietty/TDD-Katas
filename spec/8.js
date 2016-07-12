/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import scrambled from '../8-scrambled-letters';

xdescribe('scrambled', () => {
  it('should exist', () => {
    expect(scrambled).to.be.a('function');
  });
  it('should take 2 arguments', () => {
    scrambled.should.have.length.of(2);
  });
  it('should return true for \'ab\' and \'ab\'', () => {
    expect(scrambled('ab', 'ab')).to.be.true;
  });
});
