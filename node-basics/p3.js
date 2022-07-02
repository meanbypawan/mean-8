console.log("At the start...");
var servicingCar = function(){
    setTimeout(function(){
        console.log("Servicing Done...");
    },4000);
}

var meetingWithFriends = function(){
    setTimeout(function(){
        console.log("Meeting Done...");
    },2000);
}

var eatingPizza = function(){
    setTimeout(function(){
        console.log("Pizza Done...");
    },1000);
}

servicingCar();
meetingWithFriends();
eatingPizza();

console.log("At the end..");