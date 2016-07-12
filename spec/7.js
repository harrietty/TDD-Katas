/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import multiArray from '../7-multidimensional-array';

describe('multiArray', () => {
  it('should exist', () => {
    multiArray.should.be.a.function;
  });
});
