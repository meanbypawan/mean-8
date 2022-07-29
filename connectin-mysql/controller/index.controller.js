const { validationResult } = require('express-validator');
let User = require('../model/user.model');
let Admin = require('../model/admin.model');
exports.signout = (request,response,next)=>{
   request.session.current_user = null;
   request.session.destroy();
   return response.redirect("/signin");
}
exports.signIn = (request,response,next)=>{
   let admin = new Admin();
   admin.username = request.body.username;
   admin.password = request.body.password;
   admin.signIn().then(result=>{
     if(result.length!=0){
        request.session.current_user=admin.username;
        //return response.render('index.ejs',{currentUser: request.session.current_user});
        return response.redirect("/");
     }
     else
      return response.render('signin.ejs',{currentUser: request.session.current_user});
   }).catch(err=>{
     console.log(err);
     return response.end("Something went wrong..");
   });
}
exports.signInPage = (request,response,next)=>{
    return response.render('signin.ejs',{currentUser: request.session.current_user});
}
exports.userList = (request,response,next)=>{
    User.getUserList().then(results=>{
      return response.render('user-list.ejs',{userList: results,currentUser: request.session.current_user});
    }).catch(err=>{
      return response.end('Something went wrong..');
    });
}
exports.indexPage = (request,response,next)=>{
    return response.render("index.ejs",{currentUser: request.session.current_user});
}
exports.addUser = (request,response,next)=>{
    return response.render('add-user.ejs',{errors:[],currentUser: request.session.current_user});
}
exports.saveUser = (request,response,next)=>{
   const errors = validationResult(request);
   if(!errors.isEmpty()){
      console.log(errors.array());
      return response.render('add-user.ejs',{errors: errors.array(),currentUser: request.session.current_user});
   }
   let user = new User();//user->id,name,mobile,age
   user.name = request.body.name;
   user.mobile = request.body.mobile;
   user.age = request.body.age;
   user.insert().then(result=>{
    return response.end("User Saved...");
   }).catch(err=>{
    console.log(err);
    return response.send('Something went wrong..');
   });  
}