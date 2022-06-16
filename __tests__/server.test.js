'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models/index');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.sync();
});

describe('Testing REST API', () => {

  describe('Error Handler Tests', () => {

    test('404 on a bad route', async () => {
      let response = await mockRequest.get('/blah');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('Not found');
    });

    test('404 on a bad method', async () => {
      let response = await mockRequest.put('/person');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('Not found');
    });

  });

  let food = {
    id: 1,
    name: 'ribs',
    baseType: 'pork',
  };

  describe('CRUD Status Tests', () => {

    test('Read a list of records using GET', async () => {
      let response = await mockRequest.get('/food');
      expect(response.status).toEqual(200);
    });

    test('Read a single record using GET', async () => {
      let response = await mockRequest.get('/food/1');
      expect(response.status).toEqual(200);
    });

    test('Add a single record using POST', async () => {
      let response = await mockRequest.post('/food').send(food);
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('ribs');
      expect(response.body.baseType).toEqual('pork');
    });

    test('Update a record using PUT', async () => {
      let response = await mockRequest.put('/food/1');
      expect(response.status).toEqual(200);
    });

    test('Destroy a record using DELETE', async () => {
      let response = await mockRequest.delete('/food/1');
      expect(response.status).toEqual(200);
    });

  });

});