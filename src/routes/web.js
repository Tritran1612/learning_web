const express = require('express');
const router = express.Router();
const {
    getHomepage, 
    getAboutPage, 
    postCreateUser, 
    getCreatePage, 
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
} = require('../controller/homeController');

router.get('/', getHomepage);
router.get('/create', getCreatePage);
router.get('/about', getAboutPage);
router.get('/edit/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user', postHandleRemoveUser);
router.post('/delete-user/:id', postDeleteUser);
module.exports = router;
