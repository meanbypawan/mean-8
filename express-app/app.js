const express = require('express');

const app = express();
app.set("view engine","ejs");

app.get("/",(request,response,next)=>{
  return response.render('index.ejs');
}); 
app.get("/about",(request,response,next)=>{
  return response.render('about.ejs');
});
app.listen(3000,()=>{
    console.log("Server Started...");
});