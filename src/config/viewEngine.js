const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    // config template engine
    console.log("check dir nameL", path.join('./src','views'))
    app.set('views', path.join('./src','views')); // Thư mục views
    app.set('view engine', 'ejs') // Sử dụng EJS làm view engine

    app.use(express.static(path.join('./src', '../public')));//khai báo route

    
}

module.exports = configViewEngine;
