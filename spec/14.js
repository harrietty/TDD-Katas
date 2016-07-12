/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import charCount from '../14-char-counts';

xdescribe('charCount', () => {
  it('should exist', () => {
    expect(charCount).to.be.a('function');
  });
  it('should take 1 argument', () => {
    charCount.should.have.length.of(1);
  });
  it('should return {chars: 3, words: 1, lines: 1} for \'foo\'', () => {
    expect(charCount('foo')).to.eql({chars: 3, words: 1, lines: 1, });
  });
});
