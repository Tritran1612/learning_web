const connection = require('../config/db');
// Import the new createNewUser function
const { getAllUsers, getUserById, createNewUser, updateUserById } = require('../service/CRUDService');

const getHomepage = async (req, res) => {
    try {
        const results = await getAllUsers();
        return res.render('home.ejs', { users: results });
    } catch (error) {
        console.error('Error in homepage:', error);
        return res.status(500).send('Error loading users');
    }
};

const getAboutPage = (req, res) => {
    res.send('About Page');
};

// --- FIX #1: This function was incomplete. ---
const postCreateUser = async (req, res) => {
    try {
        // --- FIX #2: Changed "password: name" to just "name". ---
        // This assumes your form has fields named 'email', 'name', and 'city'.
        // The `password: name` syntax was renaming the 'password' field to a variable called 'name', which is likely not what you intended.
        let { email, name, city } = req.body;
        console.log(`Data received: email=${email}, name=${name}, city=${city}`);
        
        // Call the new service function to create the user
        await createNewUser(email, name, city);

        // Redirect to the homepage after creating the user
        return res.redirect('/');
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).send('Error creating user');
    }
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

const getUpdatePage = async (req, res) => {
    try {
        const id = req.params.id;
        let user = await getUserById(id); // getUserById returns an array

        // --- FIX #3: Correctly check if the user exists. ---
        // An empty array [] is "truthy" in JS, so `!user` wouldn't work.
        // You need to check the length of the array.
        if (!user || user.length === 0) {
            return res.status(404).send('User not found');
        }
        
        // Pass the user object itself (the first element of the array)
        return res.render('edit.ejs', { userEdit: user[0] });
    } catch (error) {
        console.error('Error getting update page:', error);
        return res.status(500).send('Error loading user data for update');
    }
};

// --- FIX #4: Use the service layer instead of direct DB calls. ---
const postUpdateUser = async (req, res) => {
    try {
        // The id should come from the form body for a POST request.
        const { id, email, name, city } = req.body;
        
        // Call the service function to handle the update logic.
        await updateUserById(id, email, name, city);
        
        // Redirect back to homepage after successful update
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
