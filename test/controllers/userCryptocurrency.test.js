const app = require('../../app');
const request = require('supertest');
const { user, coinId } = require('../../config').test;
const { factory } = require('../factory/userCryptocurrency');
const { encodeToken } = require('../../app/helpers/jwt')

describe('POST /register', () => {
  it('responds with status 201', async () => {
    const userCreate = await factory.attrs('user');
    userCreate.userName = `${userCreate.firstName}.${userCreate.lastName}`; 
    const response = await request(app).post('/register').send(userCreate);
    expect(response.statusCode).toBe(201);    
  });
});

describe('POST /access-token', () => {
  it('responds with status 200', async () => {
    const response = await request(app).post('/access-token').send(user);
    expect(response.statusCode).toBe(200);    
  });
});

describe('GET /cryptocurrency', () => {
  it('responds with status 200', async () => {
    const userToken = await factory.attrs('cryptoCurrency');
    const accessToken = await encodeToken(userToken);
    const response = await request(app).get('/cryptocurrency')
      .set('accesstoken', accessToken);
    expect(response.statusCode).toBe(200);         
  });
});

describe('POST /create-user-cryptocurrency', () => {
  it('responds with status 201', async () => {
    const accessToken = await request(app).post('/access-token').send(user);
    const response = await request(app).post('/create-user-cryptocurrency')
      .set('accesstoken', accessToken.body.accessToken)
      .send(coinId);
    expect(response.statusCode).toBe(201);         
  });
});

describe('GET /user-cryptocurrency', () => {
  it('responds with status 200', async () => {
    const accessToken = await request(app).post('/access-token').send(user);
    const response = await request(app).get('/user-cryptocurrency')
      .set('accesstoken', accessToken.body.accessToken);
    expect(response.statusCode).toBe(200);         
  });
});