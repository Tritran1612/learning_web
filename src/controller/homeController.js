const connection = require('../config/db');
const CRUDService = require('../service/CRUDService');

const getHomepage = async (req, res) => {
    try {
        const results = await CRUDService.getAllUsers();
        return res.render('home.ejs', { users: results });
    } catch (error) {
        console.error('Error in homepage:', error);
        return res.status(500).send('Error loading users');
    }
};

const getAboutPage = (req, res) => {
    res.send('About Page');
};

const postCreateUser = async (req, res) => {
    try {
        console.log(">>> req.body from form: ", req.body);
        let { email, password: name, city } = req.body;
        console.log(`Data received: email=${email}, name=${name}, city=${city}`);

        const [results] = await connection.query(
            'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', 
            [email, name, city]
        );
        console.log("Database insert result:", results);
        return res.redirect('/');
    } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).send('Error creating user');
    }
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

module.exports = {
    getHomepage,
    getAboutPage,
    postCreateUser,
    getCreatePage
};
