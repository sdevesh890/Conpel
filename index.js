const express = require('express');
const port = 8000;
const app = express();

app.use('/' , require('./routes')); //middleware for route

app.listen(port , function(err)
{
    if(err)
    {
        console.log('Error occuried in set up express');
        return;
    }
    console.log('Your server is running on ',port);
})