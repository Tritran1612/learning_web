const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('sample.ejs') // Render file sample.ejs
})

router.get('/about', (req, res) => {
  res.send('About Page')
})
module.exports = router;