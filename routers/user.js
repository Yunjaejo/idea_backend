const express = require('express');
const User = require('../schemas/user');
const jwt = require('jsonwebtoken');
const router = express.Router(); 
const uf = require('./userFunction.js');

// 회원가입
router.post('/signUp', async (req, res) => {
  const { email, pw, pwCheck, nickname } = req.body;
  const existId = await User.findOne({ userId: email });

  if (existId) {
  } else if (!uf.nickeck(nickname)) {
    res.status(400).send({});
  } else if (!uf.idCheck(email)) {
    res.status(401).send({});
  } else if (!uf.pwConfirm(pw, pwCheck)) {
    res.status(401).send({});
  } else if (!uf.pwLenCheck(pw)) {
    res.status(401).send({});
  } else if (!uf.pw_idCheck(email, pw)) {
    res.status(401).send({});
  } else {
    await User.create({
      userId: email,
      pw: pw,
    });
    res.send({ result: 'success' });
  }
});

// 로그인
router.post('/login', async (req, res) => {
  const { email, pw } = req.body;
  const users = await User.findOne({ userId: email });
  if (users) {
    if (users.pw === pw) {
      const token = jwt.sign({ userId: users.userId }, '4W-idea-key');
      res.cookie('user', token);
      res.json({ token });
    } else {
      res.status(400).send({});
    }
  } else {
    res.status(400).send({});
  }
});

module.exports = router;