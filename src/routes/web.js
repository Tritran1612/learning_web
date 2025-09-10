const express = require('express');
const router = express.Router();
const {getHomepage, getAboutPage, postCreateUser, 
    getCreatePage, getUpdatePage} = require('../controller/homeController');

router.get('/', getHomepage);
router.get('/create', getCreatePage);
router.get('/about', getAboutPage);
router.get('/update', getUpdatePage);

router.post('/create-user', postCreateUser);
module.exports = router;
