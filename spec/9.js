/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import rearrange from '../9-rearrange-numbers';

xdescribe('rearrange', () => {
  it('should exist', () => {
    expect(rearrange).to.be.a('function');
  });
  it('should take 1 argument', () => {
    rearrange.should.have.length.of(1);
  });
  it('should return \'1, 2\' for \'1, 2\'', () => {
    expect(rearrange('1, 2')).to.equal('1, 2');
  });
});
