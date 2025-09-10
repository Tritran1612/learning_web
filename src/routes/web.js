const express = require('express');
const router = express.Router();
const {
    getHomepage, 
    getAboutPage, 
    postCreateUser, 
    getCreatePage, 
    getUpdatePage,
    postUpdateUser
} = require('../controller/homeController');

router.get('/', getHomepage);
router.get('/create', getCreatePage);
router.get('/about', getAboutPage);
router.get('/edit/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
module.exports = router;
