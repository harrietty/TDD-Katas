/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import formatPrice from '../12-format-as-price';

xdescribe('formatPrice', () => {
  it('should exist', () => {
    expect(formatPrice).to.be.a('function');
  });
  it('should take 1 argument', () => {
    formatPrice.should.have.length.of(1);
  });
  it('should return \'£1\' for 1', () => {
    expect(formatPrice(1)).to.eql('£1');
  });
});
