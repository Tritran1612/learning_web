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
    const [users] = await connection.query('SELECT * FROM Users WHERE id = ?', [id]);
    let user = users && users.length > 0 ? users[0] : {};
    return user;
};

module.exports = {
    getAllUsers,
    getUserById
}