const express = require("express");
const router = express.Router();
const Comment = require("../models/comment") 
require('date-utils');

// postId 검증은 내일하자...!

router.get('/:postId', async(req, res) => {
    const { postId } = req.params; 
    try {
        const comment = await Comment.find({ commentTime : postId})
        res.status(200).send({ comment: comment });
    } catch (err) {
        res.status(400).send({ err: "코맨트 에러" });
    }
});

router.post('/:postId', async(req, res) => {
    const { postId } = req.params; 
    const { nickname, comment} = req.body;
    
    try{
        await comment.create({ nickname:nickname , comment: comment ,upperPost: postId});
        res.status(200).send({ result: "success" });
    }
    catch (err){
        console.log(err)
        res.status(400).send({ err: "err" });
    }
});

router.patch('/:commentId', async(req, res) => {
    const { commentId } = req.params; 
    const {email,comment} = req.body;
    
    const iscomment = await Comment.findById(commentId);
    console.log(iscomment);
    if (iscomment) {
        if(true){
            await Comment.updateOne({ commentId }, { $set: { email: email, comment,comment} });
            res.status(200).send({ result: "success" });
        }
        else{
            res.status(400).send({result: "err"})
        }  
    }
    else{
        res.status(400).send({result: "게시글 존재하지 않음"})
    }
});


router.delete('/:commentId', async(req, res) => {
    const { commentId } = req.params; 
    const iscomment = await Comment.findById(commentId);
    if (iscomment) {
        //nickname == ispost["nickname"]
        if(true){
            await Comment.deleteOne({ commentId });
            res.status(200).send({ result: "success" });
        }
        else{
            res.status(400).send({result: "사용자 본인이 아님"})
        }
    }
    else{
        res.status(400).send({result: "게시글 존재하지 않음"})
    }
});




module.exports = router;