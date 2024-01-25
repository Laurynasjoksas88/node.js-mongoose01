const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add username"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Please add password"],
    },
    role: {
      type: String,
      default: "Simple",
    },
  },

  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);
