const express = require('express');
const router = express.Router();
const {getHomepage, getAboutPage} = require('../controller/homeController');

router.get('/', getHomepage);

router.get('/about', getAboutPage);
module.exports = router;
