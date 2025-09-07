const connection = require('../config/db');

const getHomepage = (req, res) => {

    let users = [];

    connection.query(
        'select * from Users u',
        function(err, results, fields) {
            users= results;
            console.log('Query results:', results);

            //console.log("check users:", users)
            //res.send("Hello tran nguyen minh tri")
            res.send(JSON.stringify(users))
        }
    );

}

const getAboutPage = (req, res) => {
    res.send('About Page')
}

module.exports = {
    getHomepage,
    getAboutPage
}