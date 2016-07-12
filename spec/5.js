/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import validDate from '../5-valid-date-regex';

xdescribe('validDate', () => {
  it('should exist', () => {
    expect(validDate).to.be.a('function');
  });
  it('should take one argument', () => {
    validDate.should.have.length.of(1);
  });
  it('should return \'valid\' for \'[01-01]\'', () => {
    expect(validDate('[01-01]')).to.equal('valid');
  });
});
