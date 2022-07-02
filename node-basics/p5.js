// callback hell

var task1 = function(n,callback){
    console.log("Task 1 executed : "+n);
    callback(n+2);
}

var task2 = function(n,callback){
    console.log("Task2 executed : "+n);
    callback(n+2);
}

var task3 = function(n){
    console.log("Task3 executed : "+n);
};

// Callback hell
task1(20,function(n){
    task2(n,function(n){
        task3(n);
    });
});
