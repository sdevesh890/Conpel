const express = require('express');
const passport = require('passport');
const router = express.Router();
const userCont = require('../controller/user_controller');

router.get('/profile', passport.checkauthentication ,userCont.profile);
router.get('/sign-in',userCont.signin);
router.get('/sign-up' , userCont.signup);
router.post('/create', userCont.create);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/user/sign-in'},
), userCont.create_session);

router.get('/sign-out' , userCont.destroySession);
module.exports = router;