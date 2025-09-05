const express = require('express')
const path = require('path')

const app = express()
const port = 8081

app.set('views', path.join(__dirname,'views')); // Thư mục views
app.set('view engine', 'ejs') // Sử dụng EJS làm view engine


//khai báo route
app.get('/', (req, res) => {
  res.render('sample.ejs') // Render file sample.ejs
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
