/*var http = require('http')
var express =require('express')
var fs =require("fs")
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':"text/plain"})
    res.end('hello world\n')
}).listen(8081)
console.log('bhgyhc')
 fs.readFile("a.txt",function(err,data) {
if (err) return console.log.error(err);
console.log(data.toString())

 }) 

*/
/*var events =require('events')
var eventEmitter= new events.EventEmitter()
var connectHandler = function connected(){
    console.log('conncection done');
}
eventEmitter.emit('datarecieved')
eventEmitter.on('connection',connectHandler)
eventEmitter.on('datarecieved',function(){console.log('data recieved')})
eventEmitter.on('conncetion') */
// Import events module
/*var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended."); */
/*var event = require('events')
var eventEmitter = new event.EventEmitter()
var listener1 = function listener1(){
    console.log('listener1')
}
var listener2 = function listener2(){
    console.log('listner 2')
}
eventEmitter.addListener('hello',listener1)
eventEmitter.on('hello',listener2)




var eventListners = require('events').EventEmitter.listenerCount(eventEmitter,'hello')
console.log(eventListners + " Listner(s) listening to hello")
eventEmitter.emit('hello')
eventEmitter.removeListener('hello',listener1)
console.log('1 dosent work')
eventEmitter.emit('hello')
eventListners=require('events').listenerCount(eventEmitter,'hello') */
//ASYNC
        var fs = require('fs')
/* fs.readFile('a.txt',function(err,data){
    if (err){
        return (console.error(err))
    }
    console.log (data.toString())
})*/
//SYNC

/*var data = fs.readFileSync('a.txt')
console.log ((data.toString()))*/
/*fs.open('a.txt','r+',function(err,data){
    if (err) {return console.error(err)}
    console.log(data.toString())
})*/


/*fs.stat('a.txt',function(err,data){
    if (err){console.error(err)}
    console.log(data)
        
    console.log(data.isFile())
    console.log(data.isFIFO())
    console.log(data.isDirectory())
    })*/
   /* fs.writeFile('a.txt','bonjour',function(err){
        if (err){console.error(err)}

    })
    fs.readFile('a.txt',function(err,data){
        if (err){console.error(err)}
        console.log(data.toString())
    }) */
    var buf= new Buffer(1024)
    fs.open('a.txt','r+',function(err,fd){
        if (err){console.error(err)}
         fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if (err){console.error(err)}
        if (bytes>0){console.log(buf.slice(0,bytes).toString())}
    })
    })
    console.log(__filename)
    console.log(__dirname)
    function printhello(){
        console.log("hellowrold")
    }
var t =setTimeout(printhello,2000)
clearTimeout(t)

setInterval(printhello , 2000)