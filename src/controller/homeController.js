const connection = require('../config/db');

const getHomepage = async (req, res) => {
    try {
        const [users] = await connection.query('SELECT * FROM Users');
        return res.render('home.ejs', { users });
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error fetching users');
    }
}

const getAboutPage = (req, res) => {
    res.send('About Page')
}

// ============== START: CORRECTED FUNCTION ==============
// The function is now declared as 'async' to allow the use of 'await'.
const postCreateUser = async (req, res) => {
    try {
        console.log(">>> req.body from form: ", req.body);
        let { email, password: name, city } = req.body; // Renaming password to name since that's what your DB expects
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
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
// ============== END: CORRECTED FUNCTION ==============

module.exports = {
    getHomepage,
    getAboutPage,
    postCreateUser,
    getCreatePage
}
