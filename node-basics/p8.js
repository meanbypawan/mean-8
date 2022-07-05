let roomCleaning = ()=>{
    console.log("Room cleaning in progress...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Room Cleaned..');
        },5000);
    });
}

let removingGarbage = ()=>{
    console.log("Removing garbage in progress...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Garbage removed');
        },3000);
    });
}

Promise.all([roomCleaning(),removingGarbage()])
.then(result=>{
    console.log(result.length);
    console.log(result[0]);
    console.log(result[1]);
    console.log('Finally i got a ice cream..');
})
.catch(err=>{
    console.log('I lost icecream..');
});