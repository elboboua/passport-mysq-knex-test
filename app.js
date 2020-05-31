const express = require('express');
const passportSetup = require('./config/passport-setup')
const authRoutes = require('./routes/auth-routes');
const todoRoutes = require('./routes/todo-routes');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const hbs = require('express-handlebars')

const authController = require('./controllers/auth-controller');

const app = express();

// middlewares
app.use(cookieSession({
    keys: keys.sessionKeys,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// routes
app.use('/auth', authController.isAuthorized,authRoutes);
app.use('/todo', authController.isAuthorized,todoRoutes);

// view engine
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs'
}))

// start the server
app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})