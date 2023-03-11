const express = require('express');
const port = 8000;
const app = express();

app.get('/' , function(req,res)
{
   res.end('<h1>Hello this is working</h1>');
});
app.listen(port , function(err)
{
    if(err)
    {
        console.log('Error occuried in set up express');
        return;
    }
    console.log('Your server is running on ',port);
})