// import Model Employee

// buat class EmployeeController
class EmployeeController {
  // buat fungsi
}

const Employee = require('./employee');

exports.addEmployee = (req, res) => {
  const { id, name, gender, phone, address, email, status, hired_on, timestamp } = req.body;
  const newEmployee = new Employee(id, name, gender, phone, address, email, status, hired_on, timestamp);
  // Disini anda bisa menambahkan logic lainnya, misalnya menyimpan data ke database
  res.status(200).json({
     message: 'Employee added successfully',
     employee: newEmployee,
  });
 };

// membuat object EmployeeController
const object = new EmployeeController();

// export object EmployeeController
module.exports = object;
