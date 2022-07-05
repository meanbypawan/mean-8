let p = new Promise((resolve,reject)=>{
  resolve('Hello promise is resolved..');
});

p.then(result=>{
    console.log(result);
}).catch();