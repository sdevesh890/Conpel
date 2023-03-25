const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/user_model');


// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email, password, done){
        // find a user and establish the identity
        User.findOne({email: email}).then(user=>{
    
            if (!user || user.password != password){
                console.log('Invalid Username/Password');
                return done(null, false);
            }

            return done(null, user);
        });
    }


));

// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id).then((user)=>{
        return done(null, user);
    });
});

passport.checkauthentication = function(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/user/sign-in');
}

passport.setauthenticateduser = function(req,res,next)
{
    if(req.isAuthenticated())
    {
        res.locals.user = req.user;
    }
    next();
}


module.exports = passport;