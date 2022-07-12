const events = require('events');
const eventEmitter = new events.EventEmitter();


eventEmitter.on('add',(a,b)=>{
    console.log('Addition : '+(a+b));
});


eventEmitter.emit('add',20,10);