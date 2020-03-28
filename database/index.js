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
      "SELECT employee.id, name, first_name, last_name, role_id, manager_id, title, salary, department_id FROM employee INNER JOIN role on role_id INNER JOIN department on department_id"
    );
  }

  findEmpByManager() {
      return this.connection.query(
          "SELECT manager_id, employee.id, first_name, last_name, role_id FROM employee"
      );
  }
  
  addEmployee() {
      console.log('trying to add employee')
  }

}

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
