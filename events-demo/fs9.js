
const fs = require('fs');

const writeStream = fs.createWriteStream('js.txt');

let data = "Js is dynamically language. Js is client side as well as server side scripting language";

writeStream.write(data);

writeStream.end();

writeStream.on('finish',()=>{
    console.log("operation success");
});

writeStream.on('error',(err)=>{
    console.log(err);
});