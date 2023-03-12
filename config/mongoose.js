const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Conpel_db');
const db = mongoose.connection;

db.on('error',console.error.bind(console ,'Error'));
db.once('open' , function()
{
    console.log('Successful connected to Conpel DB');
});