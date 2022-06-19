const express = require('express');
const router = express.Router();
const { Hello } = require("../Controller/HelloController");



router.get('/hello', Hello)

module.exports = router;