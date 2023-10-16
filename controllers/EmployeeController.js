"use strict";
const firebase = require("../db");
const EmployeeGroup = require("../models/EmployeeGroup");
const Employee = require("../models/Employee");
const firestore = firebase.firestore();
const getFirestore = firebase.firestore();
const doc = firebase.firestore();
const updateDoc = firebase.firestore();
const deleteField = firebase.firestore();

const getAllEmployeeGroup = async (req, res, next) => {
  try {
    const employeeGroup = await firestore.collection("EmployeeGroup");
    const data = await employeeGroup.get();
    const employeeGroupArray = [];
    if (data.empty) {
      res.status(404).send("No Employee Group record found");
    } else {
      data.forEach((doc) => {
        const employeeGroup = new EmployeeGroup(doc.id, doc.data().groupName);
        employeeGroupArray.push(employeeGroup);
      });
      res.send(employeeGroupArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addEmployeeGroup = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("EmployeeGroup").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const deleteEmployeeGroup = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("EmployeeGroup").doc(id).delete();
    // const employee = await firestore.collection("Employee");
    // const data = await employee.get();
    // if (data.empty) {
    //   res.status(404).send("No Employee record found");
    // } else {
    //   data.forEach(async (doc) => {
    //     if (doc.data().group.id == id) {
    //       console.log(doc.data().group.id);
    //       const user = {
    //         description: firebase.firestore.group.delete(),
    //       };
    //       const empdoc = await firestore.collection("Employee").doc(doc.id);
    //       await empdoc.update(user);
    //     }
    //   });
    // }
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// const deleteEmployeeFieldGroup = async (id) => {
//   console.log(id);

//   const docRef = doc(firestore, "Employee", id);

//   updateDoc(docRef, data)
//     .then(() => {
//       console.log("group Field has been deleted successfully");
//     })
//     .catch(() => {
//       console.log(error);
//     });
// };
///////////////////////////////////////////////////////////////////////////////////////

const getAllEmployee = async (req, res, next) => {
  try {
    const employee = await firestore.collection("Employee");
    const data = await employee.get();
    const employeeArray = [];
    if (data.empty) {
      res.status(404).send("No Employee record found");
    } else {
      data.forEach((doc) => {
        const employee = new Employee(
          doc.id,
          doc.data().name,
          doc.data().email,
          new EmployeeGroup(doc.data().group.id, doc.data().group.groupName),
          doc.data().status,
          doc.data().date,
        );
        employeeArray.push(employee);
      });
      res.send(employeeArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addNewEmployee = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("Employee").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const employee = await firestore.collection("Employee").doc(id);
    await employee.update(data);
    res.send("employee record updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("Employee").doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addEmployeeGroup,
  getAllEmployeeGroup,
  addNewEmployee,
  getAllEmployee,
  deleteEmployee,
  updateEmployee,
  deleteEmployeeGroup,
};
