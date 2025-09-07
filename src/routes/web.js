const express = require('express');
const router = express.Router();
const {getHomepage, getAboutPage, postCreateUser} = require('../controller/homeController');

router.get('/', getHomepage);

router.get('/about', getAboutPage);

router.post('/create-user', postCreateUser);
module.exports = router;
