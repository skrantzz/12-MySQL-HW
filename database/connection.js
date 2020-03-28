// not a server, my sql is a database. only able to run inside command line
// this is the connection key
var util = require("util");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "VjFmz8(fU7h",
  database: "employeeTracker_db"
});

connection.connect();

// allows us to use async await
connection.query = util.promisify(connection.query);
module.exports = connection;
