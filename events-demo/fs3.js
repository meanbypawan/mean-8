// Exception Handling..

const fs = require('fs');
console.log("At the start...");
try{
  fs.writeFileSync('abc.txt',"Javascript dynamicallly typed");
  console.log("Operation Success..."); 
}
catch(e){
  console.log(e);
}
console.log("At the end...");