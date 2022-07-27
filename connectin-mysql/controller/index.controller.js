
let User = require('../model/user.model');
exports.indexPage = (request,response,next)=>{
    return response.render("index.ejs");
}
exports.addUser = (request,response,next)=>{
    return response.render('add-user.ejs');
}
exports.saveUser = (request,response,next)=>{
   let name = request.body.name;
   let mobile = request.body.mobile;
   let age = request.body.age;
   let user = new User(null,name,mobile,age);
   user.insert().then(result=>{
    return response.end("User Saved...");
   }).catch(err=>{
    console.log(err);
    return response.send('Something went wrong..');
   });  
}