const fs = require('fs');
const readF1 = async ()=>{
    return new Promise((resolve,reject)=>{
       fs.readFile('f1.txt',(err,data)=>{
           err ? reject('error') : resolve(data.toString());
       })   
    });
}

const readF2 = async ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('f2.txt',(err,data)=>{
            err ? reject('error') : resolve(data.toString());
        })
    });
} 

const writeF3 = async ()=>{
    let resultOfF1 = await readF1();
    if(resultOfF1 == 'error')
      return;
    
    let resultOfF2 =  await readF2();
    
    if(resultOfF2 == 'error')
      return;
    try{
        fs.writeFileSync('f3.txt',resultOfF1+resultOfF2);
        return 'operation success';
    }
    catch(e){
        return e;
    }   
}
writeF3().then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
});