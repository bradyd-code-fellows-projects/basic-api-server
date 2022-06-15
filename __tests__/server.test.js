'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../collections');
const mockRequest = supertest(server);

