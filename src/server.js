const express = require('express')
const path = require('path')
require('dotenv').config(); // Load biến môi trường từ file .env
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mysql = require('mysql2');

console.log("check env:", process.env.PORT);

const app = express()
const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME || 'localhost';

//config template engine
configViewEngine(app);
//config web routes
app.use('/', webRoutes);

//test connection database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT

})

// simple query

connection.query(
  'select * from Users u',
  function(err, results, fields) {

    console.log('Query results:', results);
    console.log('Fields results:', fields);
  }
)

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`)
})
