const express = require("express");
const router = express.Router();
const posts = require("../models/post")

//게시글 조회
router.get("/", async (req, res) => {
    try {
        const { category } = req.query;
        const post = await post.find({ category }).sort("-_id");
        res.status(200).send({ post: post });
    } catch (err) {
        res.status(400).send({err:"게시글 조회 오류"});
    }
});

//게시글 상세조회
router.get("/:postId", async (req, res) => {
    const { postId } = req.params;
    const post = await posts.findById(postId)
    if(test == null){
        res.status(400).send({ err: "게시물이존재하지않습니다." });
    }
    else{
        res.json({ post: post });
    }
});

//게시물 작성
router.post('/', async(req, res) => {
    const { title, spec, nickname, image, desc ,place} = req.body;
    try{
        await posts.create({title:title, spec:spec, nickname:nickname, image:image, desc:desc ,place:place });
        res.status(200).send({ result: "success" });
    }
    catch (err){
        console.log(err)
        res.status(400).send({ err: "err" });
    }
});


//게시물 삭제
router.delete("/:postId", async (req, res) => {
    const { postId } = req.params;
    const { nickname } = req.body;
    const ispost = await posts.findOne({ postId });
    if (ispost.length > 0) {
        if(nickname == ispost["nickname"]){
            await write.deleteOne({ writeId });
            res.status(200).send({ result: "success" });
        }
        else{
            res.status(400).send({result: "사용자 본인이 아님"})
        }
    }
    else{
        res.status(400).send({result: "게시글 존재하지 않음"})
    }
})

//게시물 수정
router.patch("/:postId", async (req, res) => {
    const { postId } = req.params;
    const { title, spec, image, desc, place} = req.body;
    const ispost = await posts.findById({ postId });
    if (ispost.length > 0) {
        if(pw == iswrite[0]["pw"]){
            await write.updateOne({ postId }, { $set: { title:title, spec:spec, image:image, desc:desc, place:place} });
            res.status(200).send({ result: "success" });
        }
        else{
            res.status(400).send({result: "err"})
        }  
    }
    else{
        res.status(400).send({result: "게시글 존재하지 않음"})
    }
})