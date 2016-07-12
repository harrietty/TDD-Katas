/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import formatPrice from '../12-format-as-price';

describe('formatPrice', () => {
  it('should exist', () => {
    formatPrice.should.be.a.function;
  });
});
