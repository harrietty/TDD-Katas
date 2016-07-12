/* global describe, it */
/*eslint-disable no-unused-vars*/

import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import shuffler from '../1-semi-random-card-shuffler';


describe('shuffler', () => {
  it('should exist', () => {
    shuffler.should.be.a.function;
  });
});
