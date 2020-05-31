const isAuthorized = (req, res, next) => {
    if (req.user == 'undefined') {
        res.redirect('/auth/login')
    } else {
        return next() 
    }
}


module.exports = {
    isAuthorized,
}