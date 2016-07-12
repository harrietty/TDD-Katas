/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import hamming from '../13-hamming-numbers';

describe('hamming', () => {
  it('should exist', () => {
    hamming.should.be.a.function;
  });
});
