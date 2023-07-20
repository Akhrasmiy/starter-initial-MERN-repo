const express = require('express');
const { postUser } = require('./_controllers');

const router = express.Router();

router.post('/users', postUser);

module.exports = router;
