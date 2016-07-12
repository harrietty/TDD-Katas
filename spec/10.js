/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import queue from '../10-people-in-queue';

describe('queue', () => {
  it('should exist', () => {
    queue.should.be.a.function;
  });
});
