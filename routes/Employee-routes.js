const express = require("express");
const {
  addEmployeeGroup,
  getAllEmployeeGroup,
} = require("../controllers/EmployeeController");

const router = express.Router();

router.post("/EmployeeGroup", addEmployeeGroup);
router.get("/EmployeeGroup", getAllEmployeeGroup);

module.exports = {
  routes: router,
};