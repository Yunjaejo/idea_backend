const express = require("express");
const router = express.Router();
const posts = require("../models/post")
const comments = require("../models/comment") 
require('date-utils');


router.get('/', async(req, res) => {
    try {
        const writes = await write.find().sort("-_Id");
        res.json({ write: writes });
    } catch (err) {
        console.error(err);
        next(err);
    }
});




module.exports = router;