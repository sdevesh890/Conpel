const User = require('../model/user_model');
module.exports.signin = function(req , res)
{
    res.render('user_signin',{
        title: "Conpel | Sign-in"
    });

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
    if(req.cookies.user_id)
    {
        User.findById(req.cookies.user_id).then(user=>
            {
                if(user)
                {
                   return  res.render('user_profile' , 
                    {
                        title : "Conpel | Profile" ,
                        user : user
                    }); 
                }
                return res.redirect('/user/sign-in');
            });
    }else 
    {
        return res.redirect('/user/sign-in');
    }
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
    User.findOne({email:req.body.usersign_email}).then(user =>
        {
            if(user)
            {
                if(user.password != req.body.usersign_pass)
                {
                    return res.redirect('back');
                }
                res.cookie('user_id',user.id);
                return res.redirect('/user/profile');
            }else 
            {
                return res.redirect('back');
            }
        }).catch(err=>
            {
                console.log('Error occuired while finding user -->> sign-in');
            })
}