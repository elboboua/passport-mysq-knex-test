const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const knex = require('./knex-connection');

passport.serializeUser( (user, done) => {
    done(null, user.id);
})

passport.deserializeUser( async (id, done) => {
    let data = await knex('user').where({id})
    console.log(data)
    let user = {
        id,
        name: data[0].name,
        email: data[0].email,
        google_id: data[0].google_id,
    }
    done(null, user);
})

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: keys.google.callbackURL

    }, async (accessToken, refreshToken, profile, done) => {
        let user = {}
        let data = await knex('user').where({google_id: profile.id})

        if (data.length == 0) {
            await knex('user').insert({
                name: profile.displayName,
                email: profile._json.email,
                google_id: profile.id
            })
            data = await knex('user').where({google_id: profile.id})
        }

        user.id = data[0].id;
        user.email = data[0].email;
        user.name = data[0].name;
        user.google_id = data[0].google_id;

        done(null, user);
    })
)