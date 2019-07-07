
var express=require('express')
var db=require('./db')
var app=express()
// var bodyParser= require("body-parser")
// app.use(bodyParser.raw);
// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({
//     extended: false
// }))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
});

app.get('/wyyx',(req,res)=>{
    console.log(req.query)
        // res.send(req.query)
    
    db.add(req.query,'goods',(err,data)=>{
        res.send(data)
    })
    // db.find({},'data',(err,data)=>{
    //     res.send(data)
    // })
    // db.update({'name':'tom'},{$set:{'name':'cat'}},'data',(err,data)=>{
    //     res.send({"success":"ok"})
    // })
})
app.listen(3000)