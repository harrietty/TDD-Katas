/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import scrambled from '../8-scrambled-letters';

describe('scrambled', () => {
  it('should exist', () => {
    scrambled.should.be.a.function;
  });
});
