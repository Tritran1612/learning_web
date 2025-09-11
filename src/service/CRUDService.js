const connection = require('../config/db');

const getAllUsers = async () => {
    try {
        const [results] = await connection.query('SELECT * FROM Users');
        return results;
    } catch (error) {
        console.error('Error getting users:', error);
        throw error;
    }
}

const getUserById = async (id) => {
    try {
        const [users] = await connection.query('SELECT * FROM Users WHERE id = ?', [id]);
        return users;
    } catch (error) {
        console.error('Error getting user:', error);
        throw error;
    }
};

const updateUserById = async (id, email, name, city) => {
    try {
        await connection.query(
            'UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?',
            [email, name, city, id]
        );
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

const createNewUser = async (email, name, city) => {
    try {
        await connection.query(
            'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
            [email, name, city]
        );
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    createNewUser
}