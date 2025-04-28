// Tests/smoke.test.js
import request from 'supertest';
import app     from '../index.js';     // note: import the same file

describe('Wallet API', () => {
  it('GET /ping responds 200', async () => {
    const res = await request(app).get('/ping');
    expect(res.statusCode).toBe(200);
  });

  it('POST /transactions echoes body', async () => {
    const payload = { type: 'TEST', amount: 42 };
    const res = await request(app)
      .post('/transactions')
      .send(payload)
      .set('Content-Type', 'application/json');
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ received: payload });
  });
});
