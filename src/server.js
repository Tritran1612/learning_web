const express = require('express')
const path = require('path')
require('dotenv').config(); // Load biến môi trường từ file .env

console.log("check env:", process.env.PORT);

const app = express()
const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME || 'localhost';

app.set('views', path.join(__dirname,'views')); // Thư mục views
app.set('view engine', 'ejs') // Sử dụng EJS làm view engine


//khai báo route
app.get('/', (req, res) => {
  res.render('sample.ejs') // Render file sample.ejs
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`)
})
