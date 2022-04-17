// Main Teachers's Model

const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    
  },
  { timestamps: true, versionKey: false },
);

const teacher = new mongoose.model('teacher', teacherSchema);

module.exports = teacher;
