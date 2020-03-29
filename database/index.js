// create queries

var connection = require("./connection");

// db class, passing in connection. anytime we want to query something,
// when functions exist on object, theyre called methods
class DB {
  constructor(connection) {
    this.connection = connection;
  }

  // ------all database queries go here:
  findAllEmployees() {
    return this.connection.query("SELECT * FROM employee");
  }

  findEmpByDept() {
    return this.connection.query(
      "SELECT employee.id, name AS department, first_name, last_name, title, salary FROM employee INNER JOIN role on employee.role_id = role.id INNER JOIN department on role.department_id = department.id"
    );
  }

  findEmpByManager() {
    return this.connection.query(
      "SELECT manager_id, employee.id, first_name, last_name, role_id FROM employee"
    );
  }

  addNewEmp(firstname, lastname, roleID, managerID) {
    //   console.log(firstname, lastname, roleID, managerID)
    return this.connection.query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstname}", "${lastname}", ${roleID}, ${managerID})`
    );
  }

  findAllRoles() {
    return this.connection.query("SELECT * FROM role");
  }

  removeEmployee(removedID) {
     this.connection.query(`DELETE from employee WHERE id = ${removedID}`)
  }
};
module.exports = new DB(connection);
// this new db connection is shorthand - auto exports class constructor

// class Person {
//     constructor(name, age, birth_year) {
//         this.name = name,
//         this.age = age,
//         this.birth_year = birth_year
//     }
//     greeting(){
//         console.log(`Hi my name is ${this.name}`)
//     }
// }
