const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
app.use(express.urlencoded({extended : true}));

//Cookie parser setup
app.use(cookieParser());

//middleware for route
app.use('/' , require('./routes')); 

// EJS setup
app.set('view engine','ejs');
app.set('views' ,'./views');

//CSS or assets setup 
app.use('/assets',express.static('assets'));
app.listen(port , function(err)
{
    if(err)
    {
        console.log('Error occuried in set up express');
        return;
    }
    console.log('Your server is running on ',port);
});