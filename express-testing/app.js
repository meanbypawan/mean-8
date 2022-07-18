const express = require('express');

const app = express();
/*
  GET-->  app.get()
  POST--> app.post()
  PUT --> app.put()
  DELETE-->app.delete()
*/
// /home

app.get("/home",(request,response,next)=>{
  console.log("/home called....");
  return response.end("Home Page");
});

app.get("/about",(request,response,next)=>{
    console.log("/about called....");
    return response.end("About Page");
});
  

app.use((request,response,next)=>{
    console.log("Global called....");
    next();
 });
app.listen(3000,()=>{
    console.log("Server started..");
})
