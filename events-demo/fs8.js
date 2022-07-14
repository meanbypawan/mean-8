/*
 ReadStream
 WriteStream
*/
const fs = require('fs');
const readStream = fs.createReadStream('data.txt');
let data = "";
readStream.on('data',chunk=>{
  console.log("Data event...");
  data += chunk;
});

readStream.on('end',()=>{
   console.log("end event..."); 
   console.log(data);
});

readStream.on('error',(err)=>{
   console.log("Eerror Event : "+err);
});