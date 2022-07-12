const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('event1',()=>{
    console.log("Event-1 handled..");
});

eventEmitter.addListener('event2',()=>{
    console.log("Event 2 handled..");
});

eventEmitter.once('event3',()=>{
    console.log("Event-3 handled...");
});

eventEmitter.emit('event3');
eventEmitter.emit('event3');
eventEmitter.emit('event3');