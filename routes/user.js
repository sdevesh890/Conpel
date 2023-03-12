const express = require('express');
const router = express.Router();
const userCont = require('../controller/user_controller');

router.get('/profile' , userCont.profile);
router.get('/sign-in',userCont.signin);
router.get('/sign-up' , userCont.signup);
router.post('/create' , userCont.create);
router.post('/create-session',userCont.create_session);
module.exports = router;