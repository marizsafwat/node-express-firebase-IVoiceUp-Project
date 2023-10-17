const express = require("express");
const {
  addEmployeeGroup,
  getAllEmployeeGroup,
  addNewEmployee,
  getAllEmployee,
  deleteEmployee,
  updateEmployee,
  deleteEmployeeGroup,
} = require("../controllers/EmployeeController");


const { SignUp, login } = require("../controllers/AuthController");

const router = express.Router();

router.post("/EmployeeGroup", addEmployeeGroup);
router.get("/EmployeeGroup", getAllEmployeeGroup);
router.delete("/EmployeeGroup/:id", deleteEmployeeGroup);

router.post("/Employee", addNewEmployee);
router.get("/Employee", getAllEmployee);
router.delete("/Employee/:id", deleteEmployee);
router.put("/Employee/:id", updateEmployee);

router.post("/Login", login);
router.post("/SignUp", SignUp);


module.exports = {
  routes: router,
};