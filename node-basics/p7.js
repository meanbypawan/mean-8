let f1 = (n)=>{
    return new Promise((resolve,reject)=>{
        if(n%2==0)
          resolve();
        else
          reject();  
    });
}

f1(21).then(result=>{
    console.log("Given number is even..");
}).catch(err=>{
    console.log("Given number is odd..");
});