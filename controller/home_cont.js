module.exports.home = function(req,res)
{
      return res.render('home' ,
     {
        title : "Home" , 
        heading : "Conpel Home Page" 
     });
   
}