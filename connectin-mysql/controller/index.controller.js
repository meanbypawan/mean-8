const { validationResult } = require('express-validator');
let User = require('../model/user.model');
let Admin = require('../model/admin.model');
exports.signIn = (request,response,next)=>{
   let admin = new Admin();
   admin.username = request.body.username;
   admin.password = request.body.password;

   admin.signIn().then(result=>{
     if(result.length!=0){
       
     }
     else
      return response.render('signin.ejs');
   }).catch(err=>{
     console.log(err);
     return response.end("Something went wrong..");
   });
}
exports.signInPage = (request,response,next)=>{
    return response.render('signin.ejs');
}
exports.userList = (request,response,next)=>{
    User.getUserList().then(results=>{
      return response.render('user-list.ejs',{userList: results});
    }).catch(err=>{
      return response.end('Something went wrong..');
    });
}
exports.indexPage = (request,response,next)=>{
    return response.render("index.ejs");
}
exports.addUser = (request,response,next)=>{
    return response.render('add-user.ejs',{errors:[]});
}
exports.saveUser = (request,response,next)=>{
   const errors = validationResult(request);
   if(!errors.isEmpty()){
      console.log(errors.array());
      return response.render('add-user.ejs',{errors: errors.array()});
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