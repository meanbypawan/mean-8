// let , const
// var and let
/*
let x = 100;
let x = "hello";
console.log(x);
*/
// var is hoisted by default but let is not hoisted

/*
console.log(x);
let x = 100;
*/

// var is funtion scopic and let is block scopic
function f1(){
    if(true){
      //var x = 100;  
      let x = 100;
    }
    console.log(x);
}
f1();

