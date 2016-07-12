/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import rearrange from '../9-rearrange-numbers';


describe('rearrange', () => {
  it('should exist', () => {
    rearrange.should.be.a.function;
  });
});
