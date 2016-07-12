/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import numsAsWords from '../6-numbers-as-words';

xdescribe('numsAsWords', () => {
  it('should exist', () => {
    expect(numsAsWords).to.be.a('function');
  });
  it('should take 1 argument', () => {
    numsAsWords.should.have.length.of(1);
  });
  it('should return \'one\' for 1', () => {
    expect(numsAsWords(1)).to.equal('one');
  });
});
