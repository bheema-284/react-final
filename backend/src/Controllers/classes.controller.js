const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const Classes = require('../Models/classes.model');

router.post('/', async (req, res) => {
  try {
    const classesData = await Classes.create(req.body);
    res.status(200).json({ classesData: classesData });
  } catch (e) {
    res.status(500).json({ Staus: 'failed', error: e.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const classessData = await Classes.find().lean().exec();
    res.status(200).json({ classessData: classessData });
  } catch (e) {
    res.status(500).json({ Staus: 'failed', error: e.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const classesData = await Classes.findById(req.params.id).lean().exec();
    res.status(200).json({ classesData: classesData });
  } catch (e) {
    res.status(500).json({ Staus: 'failed', error: e.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const classesData = await Classes.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    )
      .lean()
      .exec();
    res.status(200).json({ classesData: classesData });
  } catch (e) {
    res.status(500).json({ Staus: 'failed', error: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const classesData = await Classes.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    res.status(200).json({ classesData: classesData });
  } catch (e) {
    res.status(500).json({ Staus: 'failed', error: e.message });
  }
});

module.exports = router;
