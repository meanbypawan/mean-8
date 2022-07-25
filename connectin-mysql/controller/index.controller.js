exports.indexPage = (request,response,next)=>{
    return response.render("index.ejs");
}
exports.addUser = (request,response,next)=>{
    return response.render('add-user.ejs');
}