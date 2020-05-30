const express = require('express');
const passportSetup = require('./config/passport-setup')
const authRoutes = require('./routes/auth-routes');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys')

const app = express();

app.use(cookieSession({
    keys: keys.sessionKeys,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/auth', authRoutes)

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})