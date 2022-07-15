const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
http.createServer((request,response)=>{
   // http://localhost:3000/home
   let parsedUrl = url.parse(request.url,true);
   if(parsedUrl.pathname == "/home" || parsedUrl.pathname=="/"){
      let indexPath = path.join(__dirname,"view/index.html");
      try{
        let data =  fs.readFileSync(indexPath);
        response.write(data.toString());
        return response.end(); 
      }
      catch(e){
        return response.end("Oops! something went wrong..");
      }
   }

}).listen(3000,()=>{
    console.log("Server started..");
});