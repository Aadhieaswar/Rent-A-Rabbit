// import required modules
const mysql = require('mysql');

// get environment variables
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PWD;
const db = process.env.DB;

// function to create a connection
function createConnection() {

  // creat the connection
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: db
  });

  return connection;
}

// export the function
module.exports = createConnection;
