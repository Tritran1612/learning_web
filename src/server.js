const express = require('express')
const path = require('path')
require('dotenv').config(); // Load biến môi trường từ file .env
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

console.log("check env:", process.env.PORT);

const app = express()
const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME || 'localhost';

//config template engine
configViewEngine(app);
//config web routes
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`)
})
