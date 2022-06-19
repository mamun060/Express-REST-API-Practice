const studentModel = require('../Models/studuentModel');

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

module.exports = {
    insertStudent
}