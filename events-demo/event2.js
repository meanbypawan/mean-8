const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('data',()=>{
    console.log("Data is available to read.");
});

eventEmitter.on('finish',()=>{
    console.log("No Data available to read..");
});
eventEmitter.on('end',()=>{
    console.log("Write operation success...");
});
eventEmitter.on('error',(err)=>{
   console.log("Error..");
});

eventEmitter.emit('data');
eventEmitter.emit('finish');
eventEmitter.emit('end');
eventEmitter.emit('error');

