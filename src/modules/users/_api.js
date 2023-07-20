const express = require('express');
const { postUser, loginUser } = require('./_controllers');

const router = express.Router();

router.post('/users', postUser);
router.post('/users/login',loginUser)
module.exports = router;
