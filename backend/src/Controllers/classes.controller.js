// // Main Classes's Controll

// const express = require('express');

// const router = express.Router();

// const Classes = require('../Models/classes.model');

// const Teacher = require('./teachers.controller');

// router.post('/', async (req, res) => {
//   try {
//     const classes = await classes.create(req.body);
//     res.status(200).json({ classes: classes });
//   } catch (err) {
//     res.status(500).json({ Status: 'failed', error: err.message });
//   }
// });
// router.get('/', async (req, res) => {
//   try {
//     const page = +req.query.Page || 1;
//     const size = +req.query.size || 3;
//     const offset = (page - 1) * size;
//     const classes = await classes
//       .find()
//       .populate({
//         path: 'teacher_id',
//         select: {
//           firstname: 1,
//           lastname: 1,
//           gender: 1,
//           profile_pic: 1,
//         },
//       })
//       .skip(offset)
//       .limit(size)
//       .lean()
//       .exec();
//     const total_pages = Math.ceil(
//       (await Classes.find().countDocuments()) / size,
//     );
//     res.status(200).json({ classes, total_pages });

//     // const classess = await classes.find().lean().exec();
//     // res.status(200).json({ classess: classess });
//   } catch (err) {
//     res.status(500).json({ Status: 'failed', error: err.message });
//   }
// });

// router.get('/lowToHigh', async (req, res) => {
//   try {
//     const page = +req.query.Page || 1;
//     const size = +req.query.size || 3;
//     const offset = (page - 1) * size;
//     const classes = await Classes.find()
//       .sort({ year: 1 })
//       .populate({
//         path: 'teacher_id',
//         select: {
//           firstname: 1,
//           lastname: 1,
//           gender: 1,
//           profile_pic: 1,
//         },
//       })
//       .skip(offset)
//       .limit(size)
//       .lean()
//       .exec();
//     const total_pages = Math.ceil(
//       (await Classes.find().countDocuments()) / size,
//     );
//     res.status(200).json({ classes, total_pages });

//     // const classess = await classes.find().lean().exec();
//     // res.status(200).json({ classess: classess });
//   } catch (err) {
//     res.status(500).json({ Status: 'failed', error: err.message });
//   }
// });
// router.get('/highToLow', async (req, res) => {
//   try {
//     const page = +req.query.Page || 1;
//     const size = +req.query.size || 3;
//     const offset = (page - 1) * size;
//     const classes = await Classes.find()
//       .sort({ year: -1 })
//       .populate({
//         path: 'teacher_id',
//         select: {
//           firstname: 1,
//           lastname: 1,
//           gender: 1,
//           profile_pic: 1,
//         },
//       })
//       .skip(offset)
//       .limit(size)
//       .lean()
//       .exec();
//     const total_pages = Math.ceil(
//       (await Classes.find().countDocuments()) / size,
//     );
//     res.status(200).json({ classes, total_pages });

//     // const classess = await classes.find().lean().exec();
//     // res.status(200).json({ classess: classess });
//   } catch (err) {
//     res.status(500).json({ Status: 'failed', error: err.message });
//   }
// });

// router.get('/teacherwise/:teacher', async (req, res) => {
//   try {
//     const page = +req.query.Page || 1;
//     const size = +req.query.size || 3;
//     const offset = (page - 1) * size;

//     const teacher = await Teacher.find({ name: req.params.teacher })
//       .lean()
//       .exec();

//     console.log(teacher);
//     // const classes = await classes.find({"teacher_id":teacher._id})
//     //   .sort({ year: -1 })
//     //   .populate({
//     //     path: "teacher_id",
//     //     select: {
//     //       firstname: 1,
//     //       lastname: 1,
//     //       gender: 1,
//     //       profile_pic: 1,
//     //     },
//     //   })
//     //   .skip(offset)
//     //   .limit(size)
//     //   .lean()
//     //   .exec();
//     // const total_pages = Math.ceil((await classes.find().countDocuments()) / size);
//     res.status(200).json({ teacher });

//     // const classess = await classes.find().lean().exec();
//     // res.status(200).json({ classess: classess });
//   } catch (err) {
//     res.status(500).json({ Status: 'failed', error: err.message });
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const classes = await Classes.findById(req.params.id).lean().exec();
//     res.status(200).json({ classes: classes });
//   } catch (err) {
//     res.status(500).json({ Status: 'failed', error: err.message });
//   }
// });
// router.patch('/:id', async (req, res) => {
//   try {
//     const classes = await Classes.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     })
//       .lean()
//       .exec();
//     res.status(200).json({ classes: classes });
//   } catch (err) {
//     res.status(500).json({ Status: 'failed', error: err.message });
//   }
// });
// router.delete('/:id', async (req, res) => {
//   try {
//     const classes = await Classes.findByIdAndDelete(req.params.id)
//       .lean()
//       .exec();
//     res.status(200).json({ classes: classes });
//   } catch (err) {
//     res.status(500).json({ Status: 'failed', error: err.message });
//   }
// });
// module.exports = router;
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
