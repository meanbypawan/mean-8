/* 
 Promise
 To Handle Multiple Asynchronous operation
 in js application
 It is solution callback Hell

 What is promise :-
 Promise is an object that may
 produce single value some time
 in future.
 There are four possible state of promise

 1. Pending
 2. resolved/fullfilled
 3. rejected
 4. settled

 How to create Promise in js

 var p = new Promise((resolve,reject)=>{
     
 });

 // How to consume promise code
 p.then().catch();
 */
let p = new Promise((resolve,reject)=>{
   //resolve();
   reject(); 
});

p.then(result=>{
  console.log("Promise resolved..");
}).catch(err=>{
  console.log("Promise is rejected..");
});











