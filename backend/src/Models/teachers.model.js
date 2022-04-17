// Main Teachers's Model
const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const teacherSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

teacherSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash;
    return next();
  });
});

teacherSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (err, same) {
      if (err) return reject(err);
      return resolve(same);
    });
  });
};

module.exports = mongoose.model('teacher', teacherSchema);
