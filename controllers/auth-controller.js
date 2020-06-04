const isAuthorized = (req, res, next) => {
    if (!req.user) {
        res.redirect('/auth/login')
    } else {
        return next() 
    }
}


module.exports = {
    isAuthorized,
}