const express = require('express');
const router = express.Router();
const { Hello } = require("../Controller/HelloController");
const {insertStudent} = require("../Controller/studentsController");

router.get('/hello', Hello)


// mongoose 
router.post("/insertStudent", insertStudent);

module.exports = router;