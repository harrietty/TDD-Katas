/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import firstNPrimes from '../2-first-n-primes';


xdescribe('firstNPrimes', () => {
  it('should exist', () => {
    expect(firstNPrimes).to.be.a('function');
  });
  it('should accept 1 argument', () => {
    firstNPrimes.should.have.length.of(1);
  });
  it('should return 2 when passed 1', () => {
    expect(firstNPrimes(1)).to.equal(2);
  });
});
