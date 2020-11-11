var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const db = require('../dao.js');

passport.use('local-signup', new LocalStrategy(
    function(username, password, done) {
        db.getUser(username, function(err, user) {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false, {message: 'Incorrect username'});
            }

            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password'});
            }

            return done(null, user);
        });
    }
));
