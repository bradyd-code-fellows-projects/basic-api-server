'use strict';

const express = require('express');
const { FoodModel } = require('../models/food');

const router = express.Router();

router.get('/food/', async (req, res) => {
  try {
    const allRecords = await FoodModel.findAll({});
    res.status(200).send(allRecords);
  } catch (e) {
    res.status(404).send('Not found');
  }
});

router.get('/food/:id', async (req, res) => {
  const recordId = req.params.id;
  try {
    const selectedRecord = await FoodModel.findOne({where: {id: recordId}});
    res.status(200).send(selectedRecord);   
  } catch (e) {
    res.status(404).send('Not found');
  }
});

router.post('/food', async (req, res) => {
  const food = req.body;
  try {
    let response = await FoodModel.create(food);
    res.status(200).send(response);
  } catch (e) {
    res.status(404).send('Cannot perform this method');
  }
});

router.put('/food/:id', async (req, res) => {
  const recordId = req.params.id;
  const updatedRecord = req.body;
  try {
    const selectedRecord = await FoodModel.findOne({where: {id: recordId}});
    await selectedRecord.update(updatedRecord);
    await selectedRecord.save();
    res.status(200).send(selectedRecord);
  } catch (e) {
    res.status(404).send('Cannot perform this method');
  }
});

router.delete('/food/:id', async (req, res) => {
  const recordId = req.params.id;
  try {
    const recordToDelete = await FoodModel.findOne({where: {id: recordId}});
    await recordToDelete.destroy();
    res.status(200).send(recordToDelete);
  } catch (e) {
    res.status(404).send('Cannot perform this method');
  }
});

module.exports = router;