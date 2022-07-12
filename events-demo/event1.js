// events

const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('hello',()=>{
  console.log("Hello Friends...");   
});


eventEmitter.emit('hello');