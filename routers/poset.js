const express = require("express");
require('date-utils');
const router = express.Router();
const posts = require("../models")

//게시글 조회
router.get("/post", async (req, res) => {
    try {
        const { category } = req.query;
        const post = await post.find({ category }).sort("-_id");
        res.status(200).send({ post: post });
    } catch (err) {
        res.status(400).send({err:"게시글 조회 오류"});
    }
});
//게시글 상세조회
router.get("/post/:writeId", async (req, res) => {
    const { writeId } = req.params;
    //const writes = await write.findOne({writeId: writeId });
    const test = await write.findOneAndUpdate(
        {writeId:writeId},
        {
            $push:{
                rewrite:{
                    $each:[], $sort:{_id:-1}
                }
            }
        });
    if(test == null){
        res.send({ result: "게시물이존재하지않습니다." });
    }
    else{
        res.json({ detail: test });
    }
});
