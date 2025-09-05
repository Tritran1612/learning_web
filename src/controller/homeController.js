const getHomepage = (req, res) => {
    res.render('sample.ejs')
}

const getAboutPage = (req, res) => {
    res.send('About Page')
}

module.exports = {
    getHomepage,
    getAboutPage
}