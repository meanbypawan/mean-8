// indexPage is called controller action
const { validationResult } = require('express-validator');
exports.signupUser = (request,response,next)=>{
   const errors = validationResult(request);
   console.log(errors);
   if(!errors.isEmpty())
    return response.status(401).json({error: errors.array()});
   
   let email = request.body.email;
   let password = request.body.password; 
   // Database
   return response.end("Registraion suucess...");
}
exports.signup = (request,response,next)=>{
    return response.render("signup.ejs");
}
exports.signin = (request,response,next)=>{
    return response.render("signin.ejs");
}
exports.indexPage = (request,response,next)=>{
    return response.render("index.ejs");
};

exports.aboutPage = (request,response,next)=>{
    return response.render("about.ejs");
};

exports.contactPage = (request,response,next)=>{
    return response.render("contact.ejs");
};

