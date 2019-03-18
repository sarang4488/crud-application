"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var sequelize = require("../db/dbConfig");

router.post("/addStudent", (req, res, next) => {
  console.log(req.body);
  console.log(req.body.studentName);
  let student = sequelize.student_table.build({
    student_name: req.body.studentName,
    counsellor_name: req.body.counsellorName,
    hours: req.body.number,
    role: req.body.role,
    joining_date: req.body.date
  });

  student
    .save()
    .then(userInstance => {
      console.log("Student Registered Successfully");
      res.json({
        student: userInstance,
        message: "Student Registered Successfully!!!",
        status: 200
      });
    })
    .catch(function(err) {
      res.json({
        message: err.message,
        status: 404
      });
    });
});

router.get("/fetchStudents", (req, res) => {
  console.log("Inside get request");

  sequelize.student_table
    .findAll({
      order: [["student_name", "ASC"]],

      attributes: [
        "uid",
        "student_name",
        "counsellor_name",
        "hours",
        "role",
        "joining_date"
      ]
    })
    .then(studentInstances => {
      console.log(studentInstances);

      res.json({
        students: studentInstances,
        status: 200
      });
    })
    .catch(function(err) {
      res.json({
        message: err.message,
        status: 404
      });
    });
});

router.get("/editStudentRequest/:id", function(req, res) {
  console.log("Inside Recruiter Display Post Request");
  console.log("Req Body : ", req.body);
  console.log("Req Params : ", req.params);
  sequelize.student_table
    .findAll({
      where: {
        uid: req.params.id
      },
      attributes: [
        "uid",
        "student_name",
        "counsellor_name",
        "hours",
        "role",
        "joining_date"
      ]
    })
    .then(studentInstances => {
      const studentInstance = studentInstances[0].dataValues;
      res.json({
        student: studentInstance,
        status: 200
      });
    })
    .catch(function(err) {
      res.json({
        message: err.message,
        status: 404
      });
    });
});

router.post("/editStudentRequest", (req, res, next) => {
  console.log(req.body);
  sequelize.student_table
    .findAll({
      where: {
        uid: req.body.id
      },
      attributes: [
        "uid",
        "student_name",
        "counsellor_name",
        "hours",
        "role",
        "joining_date"
      ]
    })
    .then(studentInstances => {
      const studentInstance = studentInstances[0].dataValues;
      res.json({
        student: studentInstance,
        status: 200
      });
    })
    .catch(function(err) {
      res.json({
        message: err.message,
        status: 404
      });
    });
});

router.post("/editStudentDetails", (req, res, next) => {
  console.log("edit student test", req.body);
  sequelize.student_table
    .update(
      {
        student_name: req.body.student_ame,
        counsellor_name: req.body.counsellor_name,
        role: req.body.role,
        hours: req.body.hours,
        joining_date: req.body.joining_date
      },
      { returning: true, where: { uid: req.body.id } }
    )
    .then(updatedStudent => {
      res.json({
        messgage: updatedStudent,
        status: 200
      });
    })
    .catch(function(err) {
      res.json({
        message: err.message,
        status: 404
      });
    });
});

router.post("/deleteStudent", (req, res, next) => {
  console.log(req.body);
  sequelize.student_table
    .destroy({
      where: {
        uid: req.body.id
      }
    })
    .then(deletedInstance => {
      console.log(deletedInstance);

      res.json({
        student: deletedInstance,
        status: 200
      });
    })
    .catch(function(err) {
      res.json({
        message: err.message,
        status: 404
      });
    });
});

module.exports = router;
