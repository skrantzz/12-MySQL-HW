// just command line application, don't need routes etc. only listening to DB, so index.js, not server.js

// import chalk to make pretty/colorful
// console.table
// look up npm fun things to view

// inquirer statements only and db query here:

var inquirer = require("inquirer");
var db = require("./database");
const cTable = require("console.table");

async function viewAllEmp() {
  const employees = await db.findAllEmployees();
  console.table(employees);
  askUser();
}

async function viewEmpByDept() {
  const empByDept = await db.findEmpByDept();
  console.table(empByDept);
  askUser();
}

async function viewEmpByManager() {
  const empByManager = await db.findEmpByManager();
  console.table(empByManager);
  askUser();
}

async function addEmp() {
  var roles = await db.findAllRoles();
  var roleChoices = roles.map(function(role) {
    return { name: role.title, value: role.id };
  });
  var employees = await db.findAllEmployees();
  var employeeChoices = employees.map(function(employee) {
    return {
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id
    };
  });

  const addEmployee = await inquirer.prompt([
    {
      type: "input",
      name: "newEmpFN",
      message: "What is the employee's first name?"
    },
    {
      type: "input",
      name: "newEmpLN",
      message: "What is the employee's last name?"
    },
    {
      type: "list",
      name: "newEmpRole",
      message: "What is the employee's role?",
      choices: roleChoices
    },
    {
      type: "list",
      name: "newEmpManager",
      message: "Who is the employee's manager?",
      choices: employeeChoices
    }
  ]);
  const { newEmpFN, newEmpLN, newEmpRole, newEmpManager } = addEmployee;
  // const newEmpFirst = addEmployee.newEmpFN;
  // const newEmpLast = addEmployee.newEmpLN;
  // const newRoleID = addEmployee.newEmpRole;
  // const newEmpManager = addEmployee.newEmpManager;
  const addNewEmpVar = await db.addNewEmp(newEmpFN, newEmpLN, newEmpRole, newEmpManager);
  console.log("New employee added!")
  askUser();
}

// async function addEmployee() {
//   const addEmp
// }

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

  switch (answer.choice) {
    case "allEmployees":
      viewAllEmp();
      break;

    case "empByDept":
      viewEmpByDept();
      break;

    case "empByManager":
      viewEmpByManager();
      break;

    case "addEmp":
      addEmp();
      break;
  }
}
// if (answer.choice === "allEmployees") {
//     viewAllTest();
// }
askUser();

// only work on this file and the index.js in DB
// write switch case for all diff choices with a bunch of async functions that use the db class
// for remove, youre going to want to pass in for each employee concat first name and last name together and pass into the choices, create list in inqu. -

//

// make sure you ask for first and last name after user selects to delete a person.... then look up how to delete specfic entries out of table.. look up how to pass

// create dynamic lists within inqur. so that it represents by the DB
// when hard code in the seed file 7 emps

// call function siwtch case is in .then, listing all functions
