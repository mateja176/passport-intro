import * as request from 'supertest';
import { app } from './app';

describe('/', () => {
  it('should return a greeting', done => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(JSON.stringify('Hello World'), done);
  });
});
