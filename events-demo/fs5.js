const fs = require('fs');

const readF1 = ()=>{
    return new Promise((resolve,reject)=>{
       fs.readFile('f1.txt',(err,data)=>{
           err ? reject(err) : resolve(data.toString());
       })   
    });
}

const readF2 = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('f2.txt',(err,data)=>{
            err ? reject(err) : resolve(data.toString());
        })
    });
} 

Promise.all([readF1(),readF2()])
.then(results=>{
  fs.writeFile('f3.txt',results[0]+results[1],err=>{
      err ? console.log("Operation failed..") : console.log("Operation Success");
  });
}).catch(err=>{
    console.log(err);
});




