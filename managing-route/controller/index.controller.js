// indexPage is called controller action
exports.indexPage = (request,response,next)=>{
    return response.render("index.ejs");
};

exports.aboutPage = (request,response,next)=>{
    return response.render("about.ejs");
};

exports.contactPage = (request,response,next)=>{
    return response.render("contact.ejs");
}

