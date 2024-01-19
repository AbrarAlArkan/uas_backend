// import EmployeeController

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/employees", (req, res) => {
  res.send("Hello HRD API Express");
});

router.get("/employees", [EmployeesController.class, 'index']);
router.post("/employees", [EmployeesController.class, 'store']);
router.put("/employees/:id", [EmployeesController.class, 'update']);
router.delete("/employees/:id", [EmployeesController.class, 'destroy']);
router.get("/employees/:id", [EmployeesController.class, 'show']);
router.get("/employees/search/:name", [EmployeesController.class, 'search']);
router.get("/employees/status/active", [EmployeesController.class, 'active']);
router.get("/employees/status/inactive", [EmployeesController.class, 'inactive']);
router.get("/employees/status/terminated", [EmployeesController.class, 'terminated']);
// Membuat routing employee

// export router
module.exports = router;
