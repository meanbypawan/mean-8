const http = require('http');

const server = http.createServer((request,response)=>{
     response.write("Hello Client..");
     response.end();
});

server.listen(3000,()=>{
    console.log("Server started...");
});


// http://www.facebook.com --> ip
// http://localhost:3000
// localhost --> 127.0.0.1