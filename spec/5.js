/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import validDate from '../5-valid-date-regex';

describe('validDate', () => {
  it('should exist', () => {
    validDate.should.be.a.function;
  });
});
