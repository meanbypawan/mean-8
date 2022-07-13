const fs = require('fs');

console.log("At the start....");
fs.writeFile('data.txt','Node.Js is single threader',err=>{
   err ? console.log(err) : console.log('Operation success');
});
console.log("At the end...");