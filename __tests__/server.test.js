'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models/index');
const mockRequest = supertest(server);

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
      expect(response.text).toEqual('Cannot perform this method');
    });

  });

  describe('CRUD Status Tests', () => {

    test('Create a record using POST', async () => {
      let response = await (await mockRequest.post('/food')).send({
        name: ``,
        baseType: ``,
      });
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Record successfully added');
    });

    test('Read a list of records using GET', async () => {
      let response = await mockRequest.get('/food');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Full list of records in database returned');
    });

    test('Read a single record using GET', async () => {
      let response = await mockRequest.get('/food/:id');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Specified record returned');
    });

    test('Update a record using PUT', async () => {
      let response = await mockRequest.put('/food/:id');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Record successfully updated');
    });

    test('Destroy a record using DELETE', async () => {
      let response = await mockRequest.delete('/food/:id');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Record successfully deleted from database');
    });

  });

});
