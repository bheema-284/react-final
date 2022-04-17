const { mongoose } = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://bheemudu_284:bheemudu_284@cluster0.x4nhc.mongodb.net/teacherslist",
  );
};


