// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  username: "xnoiy35xgo7zx249",
  password: "dhyk20hh51afdcie",
  database: "ctgdkav6510fscqo"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
