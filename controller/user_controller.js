const User = require('../model/user_model');
module.exports.signin = function(req , res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/user/profile');
    }
    res.render('user_signin',{
        title: "Conpel | Sign-in"
    })
}
module.exports.signup = function(req ,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/user/profile');
    }
    res.render('user_signup', 
    {
        title : "Conpel | Sign-up" 
    })
}
module.exports.profile = function(req ,res)
{
   return res.render( 'user_profile' , 
        {
            title : req.user.name
        }
    )
}
module.exports.create = function(req , res)
{
    if(req.body.user_pass != req.body.user_conf_pass)
    {
       return res.redirect('back');
    }
    User.findOne({email : req.body.user_email }).then(user=>
        {
            if(!user)
            {
                User.create(
                    {
                        name : req.body.user_name , 
                        email : req.body.user_email ,
                        password : req.body.user_pass
                    }
                ).then(()=> 
                    {
                        return res.redirect('/user/sign-in');
                    })
            }else 
            {
                return res.redirect('back');
            }
        }
    ).catch(err=>{
        console.log('Error occuired while finding user',err); 
    });

}
module.exports.create_session = function(req , res)
{
   return res.redirect('/');
}

module.exports.destroySession = function(req,res)
{
    req.logout(function(err)
    {
        if(err)
        {
            console.log(err);
        }
    });
    return res.redirect('/');
}