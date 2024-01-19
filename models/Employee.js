// import database

// membuat class Employee
class Employee {
  constructor(id, name, gender, phone, address, email, status, hired_on, timestamp) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.phone = phone;
    this.address = address;
    this.email = email;
    this.status = status;
    this.hired_on = hired_on;
    this.timestamp = timestamp;
}}

// export class Employee
module.exports = Employee;
