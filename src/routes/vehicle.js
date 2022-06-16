'use strict';

const express = require('express');
const { VehicleModel } = require('../models/vehicle.schema');

const router = express.Router();

router.get('/vehicle', async (req, res, next) => {
  try {
    const allRecords = await VehicleModel.findAll({});
    res.status(200).send(allRecords);
  } catch (e) {
    res.status(404).send('Not found');
  }
});

router.get('/vehicle/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const selectedRecord = await VehicleModel.findOne({where: { id }});
    res.status(200).send(selectedRecord);   
  } catch (e) {
    res.status(404).send('Not found');
  }
});

router.post('/vehicle', async (req, res, next) => {
  const vehicle = req.body;
  try {
    let response = await VehicleModel.create(vehicle);
    console.log('response: ', response);
    res.status(200).send(response);
  } catch (e) {
    res.status(404).send('Cannot perform this method');
  }
});

router.put('/vehicle/:id', async (req, res, next) => {
  const { id } = req.params;
  const updatedRecord = req.body;
  try {
    const selectedRecord = await VehicleModel.findOne({where: { id }});
    await selectedRecord.update(updatedRecord);
    await selectedRecord.save();
    res.status(200).send(selectedRecord);
  } catch (e) {
    res.status(404).send('Cannot perform this method');
  }
});

router.delete('/vehicle/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const recordToDelete = await VehicleModel.findOne({where: { id }});
    await recordToDelete.destroy();
    res.status(200).send(recordToDelete);
  } catch (e) {
    res.status(404).send('Cannot perform this method');
  }
});

module.exports = router;