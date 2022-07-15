const http = require('http');
const url = require('url');

http.createServer((request,response)=>{
    let parsedUrl = url.parse(request.url,true);
    console.log(parsedUrl);
    console.log(request.method);

    if(parsedUrl.pathname == "/home"){

    }
    else if(parsedUrl.pathname == "/add" && request.method=="GET"){
        let a = parsedUrl.query.a*1;
        let b = parsedUrl.query.b*1;
        return response.end("Addition : "+(a+b));
    }
})
.listen(3000,()=>{
    console.log("server Started at http://localhost:3000");
});