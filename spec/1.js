/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import objectify from '../1-objectify-query-string';

describe('objectify', () => {
  it('should exist', () => {
    expect(objectify).to.be.a('function');
  });
  it('should take one argument', () => {
    expect(objectify).to.have.length.of(1);
  });
  it('should return {name: Bob} for \'name=Bob\'', () => {
    expect(objectify('name=Bob')).to.eql({name: 'Bob'});
  });
});
