// Main Teachers's Controll

const Teacher = require('../Models/teachers.model');
const express = require('express');

const router = express.Router();

router.post('', async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    return res.status(200).send(teacher);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get('', async (req, res) => {
  try {
    const teacher = await Teacher.find().lean().exec();
    return res.status(200).send(teacher);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    return res.status(200).send(teacher);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(teacher);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(teacher);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
