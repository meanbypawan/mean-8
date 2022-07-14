const fs = require('fs');
const readStream = fs.createReadStream('data.txt');
const writeStream = fs.createWriteStream('copy.txt');
try{
 readStream.pipe(writeStream);
 console.log("success");
}
catch(e){
    console.log(e);
}