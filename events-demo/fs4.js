const fs = require('fs');
console.log("At the start...");
try{
  let data = fs.readFileSync('data.txt');
  console.log(data.toString()); 
}
catch(e){
    console.log(e);
}  

console.log("At the end...");