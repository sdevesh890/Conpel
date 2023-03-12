const express = require('express');
const router = express.Router();
const homeCont = require('../controller/home_cont');

router.get('/',homeCont.home);
router.use('/user',require('./user'));

module.exports = router;