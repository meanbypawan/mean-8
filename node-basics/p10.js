let firstName = ()=>{
    console.log("Insided FirstName...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Merry");
        },2000);
    });
}
let middleName = ()=>{
    console.log("Inside Middle name");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("John");
        },1500);
    });
}
let lastName = ()=>{
    console.log("Inside Last Name...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Alexan");
        },1500);
    });
}

Promise.race([firstName(),middleName(),lastName()])
.then(result=>{
   console.log("Resolved : "+result);
})
.catch(rejectionResult=>{
  console.log("Reject : "+rejectionResult);
});