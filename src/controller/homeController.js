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

const getUpdatePage = async (req, res) => {
    try {
        const id = req.params.id;
        const [users] = await connection.query('SELECT * FROM Users WHERE id = ?', [id]);
        
        if (users.length === 0) {
            return res.send('User not found');
        }
        
        return res.render('edit.ejs', { user: users[0] });
    } catch (error) {
        console.error('Error getting user:', error);
        return res.status(500).send('Error getting user');
    }
};

const postUpdateUser = async (req, res) => {
    try {
        const { id, email, name, city } = req.body;
        await connection.query(
            'UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?',
            [email, name, city, id]
        );
        return res.redirect('/');
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).send('Error updating user');
    }
};

module.exports = {
    getHomepage,
    getAboutPage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
};
