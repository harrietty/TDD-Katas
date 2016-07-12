/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import justify from '../11-justify-text';

xdescribe('justify', () => {
  it('should exist', () => {
    expect(justify).to.be.a('function');
  });
  it('should take 1 argument', () => {
    justify.should.have.length.of(1);
  });
  it('should return \'foo\' for \'foo\'', () => {
    expect(justify('foo')).to.equal('foo');
  });
});
