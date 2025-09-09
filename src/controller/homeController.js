const connection = require('../config/db');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getAboutPage = (req, res) => {
    res.send('About Page')
}

// ============== START: CORRECTED FUNCTION ==============
const postCreateUser = (req, res) => {
    console.log(">>> req.body from form: ", req.body);
    let { email, password, city } = req.body;
    console.log(`Data received: email=${email}, name=${password}, city=${city}`);

    connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
        [email, password, city],
        function(err, results) {
            if (err) {
                console.log(err);
                return res.status(500).send('Error creating user');
            }
            res.send('User created successfully');
        }
    );
}
// ============== END: CORRECTED FUNCTION ==============
module.exports = {
    getHomepage,
    getAboutPage,
    postCreateUser,
}