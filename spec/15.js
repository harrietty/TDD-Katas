/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import validBraces from '../15-valid-braces';

xdescribe('validBraces', () => {
  it('should exist', () => {
    expect(validBraces).to.have.length.of(1);
  });
  it('should take 1 argument', () => {
    validBraces.should.have.length.of(1);
  });
  it('should return true for \'[]\'', () => {
    expect(validBraces('[]')).to.be.true;
  });
});
