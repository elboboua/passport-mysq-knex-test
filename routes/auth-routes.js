const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.send({message: 'Router is functional', name: req.user.name})
});

router.get('/logout', (req, res) => {
    req.logout();
    res.send({message: 'logged out'});
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/auth/login')
})

module.exports = router