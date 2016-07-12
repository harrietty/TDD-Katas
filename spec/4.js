/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import nextBiggest from '../4-next-biggest-number';

describe('nextBiggest', () => {
  it('should exist', () => {
    nextBiggest.should.be.a.function;
  });
});
