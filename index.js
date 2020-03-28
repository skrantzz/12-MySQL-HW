// just command line application, don't need routes etc. only listening to DB, so index.js, not server.js

// import chalk to make pretty/colorful
// console.table
// look up npm fun things to view

// inquirer statements only and db query here:

var inquirer = require("inquirer");
var db = require("./database");

async function viewAllTest() {
  const employees = await db.findAllEmployees();
  console.log(employees);
  askUser();
}


async function askUser() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all employees",
          value: "allEmployees"
        },
        {
          name: "View all employees by department",
          value: "empByDept"
        },
        {
          name: "View all employees by manager",
          value: "empByManager"
        },
        {
          name: "Add employee",
          value: "addEmp"
        },
        {
          name: "Remove employee",
          value: "removeEmp"
        },
        {
          name: "Update employee role",
          value: "updateEmpRole"
        },
        {
          name: "Update employee manager",
          value: "updateEmpManager"
        }
      ]
    }
  ]);
  
  // value is what answer.choice will point to
  console.log(answer);
  if (answer.choice === "allEmployees") {
      viewAllTest();
  }

}
askUser();

// only work on this file and the index.js in DB
// write switch case for all diff choices with a bunch of async functions that use the db class 
// for remove, youre going to want to pass in for each employee concat first name and last name together and pass into the choices, create list in inqu.
// create dynamic lists within inqur. so that it represents by the DB
// when hard code in the seed file 7 emps
