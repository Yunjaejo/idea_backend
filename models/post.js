const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;
const postSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  spec: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  place: {
    type: String,
    required: true,
  },
  like: [{ type: ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Post", postSchema); // 이 스키마를 모델링해서 내보내겠다 !
