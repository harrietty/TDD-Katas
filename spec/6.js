/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import numsAsWords from '../6-numbers-as-words';

describe('numsAsWords', () => {
  it('should exist', () => {
    numsAsWords.should.be.a.function;
  });
});
