const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
      trim: true,
      maxlength: 25,
    },
    username: {
      type: String,
      require: true,
      trim: true,
      maxlength: 25,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png",
    },
    role: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    mobile: {
      type: String,
      default: "",
    },
    story: {
      type: String,
      default: "",
      maxleangth: 250,
    },
    website: {
      type: String,
      default: "",
    },
    followers: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
    following: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
