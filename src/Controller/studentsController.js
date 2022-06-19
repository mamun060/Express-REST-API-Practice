const studentModel = require('../Models/studuentModel');


// Create data 
const insertStudent = (req, res) => {
    let reqBody = req.body;

    studentModel.create(reqBody, (error, data)=>{
        if(error){
            res.status(400).json({status: "fail", data: error});
        } else {
            res.status(201).json({status: "Success", data:data})
        }
    })
}

// read data
const readStudentInfo = ( req, res) => {
    let query = {};
    let items = "Name Roll Class Remark";
   studentModel.find(query, items, (error, data)=>{
        if(error){
            res.status(400).json({status: "Invalid requrest", error})
        }else {
            res.status(201).json({status: 'success', data: data})
        }
   }).limit().sort({Roll: 1})
}

// update data
const updateStudent = (req, res) => {
    let id = req.params.id;
    let query = { _id: id };
    let updateData = req.body;
    studentModel.updateOne(query, updateData, (error, data)=>{
        if(error){
            res.status(400).json({status: "Invalid requiest, Something wrong", error})
        } else {
            res.status(201).json({success: true, data: data})
        }
    })
}

// remove student
const removeStudent = (req, res) => {
    const id = req.params.id;
    let query = { _id: id };
    studentModel.remove(query, (error, data)=>{
        if(error){
            res.status(400).json({status: "Invalid request to remove", error})
        }else {
            res.status(201).json({success: true, data: data})
        }
    })
}

module.exports = {
    insertStudent,
    readStudentInfo,
    updateStudent,
    removeStudent
}