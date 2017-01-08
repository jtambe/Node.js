// Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   //eventEmitter.emit('functionExecuted');
   anotherfnctn();
}

// Bind the connection event with the handler
eventEmitter.on('connect', connectHandler);
 

var anotherfnctn = function test(){
	console.log('under test function');
} 
// Bind the data_received event with the anonymous function
eventEmitter.on('functionExecuted', function(){
   console.log('functionExecuted succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connect');

console.log("Program Ended.");