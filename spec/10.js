/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import queue from '../10-people-in-queue';

xdescribe('queue', () => {
  it('should exist', () => {
    expect(queue).to.be.a('function');
  });
  it('should take 2 arguments', () => {
    queue.should.have.length.of(2);
  });
  it('should return \'Bob\' for [\'Bob\'] and 1', () => {
    expect(queue(['Bob'], 1)).to.equal('Bob');
  });
});
