// async , await
function f1(){
 return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve(100);
     },5000);
 });
}


async function caller(){
   let x =  await f1();
   console.log("After..f1()");
   console.log(x);
}

caller();
/*
f1().then(result=>{
    console.log(result);
});
*/
