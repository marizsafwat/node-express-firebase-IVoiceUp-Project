'use strict';

const firebase = require('../db');
const EmployeeGroup = require('../models/EmployeeGroup');
const firestore = firebase.firestore();


const addEmployeeGroup = async (req, res, next) => {
    try {
        console.log(req.body);
        const data = req.body;
        await firestore.collection('EmployeeGroup').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllEmployeeGroup = async (req, res, next) => {
  try {
    const employeeGroup = await firestore.collection("EmployeeGroup");
    const data = await employeeGroup.get();
    const employeeGroupArray = [];
    if (data.empty) {
      res.status(404).send("No student record found");
    } else {
      data.forEach((doc) => {
        const employeeGroup = new EmployeeGroup(
          doc.id,
          doc.data().groupName,
          
        );
        employeeGroupArray.push(employeeGroup);
      });
      res.send(employeeGroupArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { addEmployeeGroup, getAllEmployeeGroup };