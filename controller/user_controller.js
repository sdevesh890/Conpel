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
module.exports.create = function(req , res)
{

}
module.exports.create_session = function(req , res)
{

}