const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;
const wishSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  //ref를 위한 문법
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }]
});

module.exports = mongoose.model("Wish", wishSchema); // 이 스키마를 모델링해서 내보내겠다 !
