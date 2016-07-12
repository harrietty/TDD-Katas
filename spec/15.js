/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import validBraces from '../15-valid-braces';

describe('validBraces', () => {
  it('should exist', () => {
    validBraces.should.be.a.function;
  });
});
