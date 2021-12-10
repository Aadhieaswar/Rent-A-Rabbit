// import required modules
const mysql = require('mysql');

// function to create a connection
function createConnection() {

  // creat the connection
  const connection = mysql.createConnection({
    host: 'yourHost',
    user: 'yourUser',
    password: 'yourPassword',
    database: 'yourDatabase'
  });

  return connection;
}

// export the function
module.exports = createConnection;
