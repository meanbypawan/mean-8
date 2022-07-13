const fs = require('fs');

console.log("At the start...");
if(fs.existsSync('data1.txt')){
  fs.readFile('data.txt',(err,data)=>{
    err ? console.log(err) : console.log(data.toString()); 
  });
}
else
  console.log("File not found...");
console.log("At the end...");