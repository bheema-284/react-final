const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const Teacher = require('../Models/teachers.model');

router.post('/', async (req, res) => {
  try {
    const teacherData = await Teacher.create(req.body);
    res.status(200).json({ teacherData: teacherData });
  } catch (e) {
    res.status(500).json({ Staus: 'failed', error: e.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const teachersData = await Teacher.find().lean().exec();
    res.status(200).json({ teachersData: teachersData });
  } catch (e) {
    res.status(500).json({ Staus: 'failed', error: e.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const teacherData = await Teacher.findById(req.params.id).lean().exec();
    res.status(200).json({ teacherData: teacherData });
  } catch (e) {
    res.status(500).json({ Staus: 'failed', error: e.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const teacherData = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    )
      .lean()
      .exec();
    res.status(200).json({ teacherData: teacherData });
  } catch (e) {
    res.status(500).json({ Staus: 'failed', error: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const teacherData = await Teacher.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    res.status(200).json({ teacherData: teacherData });
  } catch (e) {
    res.status(500).json({ Staus: 'failed', error: e.message });
  }
});

module.exports = router;
