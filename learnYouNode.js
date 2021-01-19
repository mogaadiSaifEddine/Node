//console.log('HELLO WORLD')


/*var args = process.argv.slice(2)
var sum= args.reduce(function(acc ,curr){
    return +acc + +curr
})
console.log(sum)*/
/*var fs = require('fs')
/*var newLine= fs.readFileSync(process.argv[2],"utf-8")
console.log(newLine.toString().match(/\n/g).length)*/
/*fs.readFile(process.argv[2],function(err,data){
if (err){return (console.error(err))}
console.log(data.toString().match(/\n/g).length)
})*/
/*var path=require('path')
fs.readdir(process.argv[2],function(err,list){
    list.forEach(function(file){
        if (path.extname(file)==='.'+process.argv[3]){console.log(file)}

    })
})*/
const { error } = require('console');
var http = require('http')
http.get(process.argv[2],function(res){
    res.setEncoding('utf-8');
    res.on('data',console.log)
    res.on('error',console.error)
})