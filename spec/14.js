/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import charCount from '../14-char-counts';

describe('charCount', () => {
  it('should exist', () => {
    charCount.should.be.a.function;
  });
});
