const express = require('express');
const router = express.Router();
const { Hello } = require("../Controller/HelloController");
const {insertStudent, readStudentInfo, updateStudent, removeStudent} = require("../Controller/studentsController");

router.get('/hello', Hello)


// mongoose 
router.post("/insertStudent", insertStudent);
router.get("/readStudentInfo", readStudentInfo);
router.post("/updateStudent/:id", updateStudent);
router.delete("/removeStudent/:id", removeStudent);

module.exports = router;