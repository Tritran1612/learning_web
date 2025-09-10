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

module.exports = {
    getAllUsers
}