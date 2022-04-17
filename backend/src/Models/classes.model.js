// // Main Classes's Model

// const mongoose = require('mongoose');

// const classesSchema = new mongoose.Schema(
//   {
// id: { type: String, required: true },
// grade: { type: String, required: true },
// section: { type: String, required: true },
// subject: { type: String, required: true },
//   },
//   { timestamps: true, versionKey: false },
// );

// const classes = new mongoose.model('classes', classesSchema);

// module.exports = classes;

const mongoose = require('mongoose');

const teacher = require('./teachers.model');

const classSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    grade: { type: String, required: true },
    section: { type: String, required: true },
    subject: { type: String, required: true },
    teacher_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: teacher,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
module.exports = mongoose.model('class', classSchema);
