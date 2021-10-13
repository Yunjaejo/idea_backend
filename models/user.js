const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pw: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  //ref를 위한 문법
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }],
});

module.exports = mongoose.model("User", userSchema); // 이 스키마를 모델링해서 내보내겠다 !
