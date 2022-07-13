const fs = require('fs');
const readF1 = ()=>{
    return new Promise((resolve,reject)=>{
       fs.readFile('f1.txt',(err,data1)=>{
          if(!err){
              fs.readFile('f2.txt',(err,data2)=>{
                if(!err){
                    fs.writeFile('f3.txt',data1+data2,err=>{
                        if(!err)
                          resolve('Operation success..');
                        else
                          reject("Operation failed");  
                    })
                }
                else
                 reject("Operation failed");
              });
          }
          else
            reject("Operation failed");
       })   
    });
}

readF1().then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
});