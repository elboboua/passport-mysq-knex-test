const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/logout', (req, res) => {
    req.logout();
    res.clearCookie('express:sess');
    res.clearCookie('express:sess.sig');
    res.redirect('/auth/login');
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/')
})

module.exports = router