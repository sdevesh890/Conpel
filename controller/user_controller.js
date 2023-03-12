module.exports.signin = function(req , res)
{
    res.render('user_signin',{
        title: "Conpel | Sign-in"
    })
}
module.exports.signup = function(req ,res)
{
    res.render('user_signup', 
    {
        title : "Conpel | Sign-up" 
    })
}
module.exports.profile = function(req ,res)
{
    res.render('user_profile' , 
    {
        title : "Conpel | Profile"
    })
}