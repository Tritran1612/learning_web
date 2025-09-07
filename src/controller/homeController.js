const connection = require('../config/db');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getAboutPage = (req, res) => {
    res.send('About Page')
}

// ============== START: CORRECTED FUNCTION ==============
const postCreateUser = (req, res) => {
    // 1. Log the entire request body to the terminal to verify data is arriving.
    console.log(">>> req.body from form: ", req.body);

    // 2. Use object destructuring to get the variables from req.body.
    //    The variable names MUST match the 'name' attribute in your HTML <input> tags.
    let { email, password, city } = req.body;

    // 3. Log the individual variables to be sure.
    console.log(`Data received: email=${email}, name=${password}, city=${city}`);
    // Note: You named the "Name" input field "password" in your HTML.
    // It's better to change <input name="password"> to <input name="name"> for clarity.

    // 4. (Optional) You can now insert this data into your database.
    // connection.query(...)

    // 5. Send a response back to the user.
    res.send('Create User Success! Check your server console for the data.');
}
// ============== END: CORRECTED FUNCTION ==============


module.exports = {
    getHomepage,
    getAboutPage,
    postCreateUser,
}