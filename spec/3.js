/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import polydivisible from '../3-polydivisible-numbers';

describe('polydivisible', () => {
  it('should exist', () => {
    polydivisible.should.be.a.function;
  });
});
