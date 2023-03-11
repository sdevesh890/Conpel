const express = require('express');
const router = express.Router();
const homeCont = require('../controller/home_cont');

router.get('/home',homeCont.home);

module.exports = router;