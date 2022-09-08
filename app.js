const http = require('http');
const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("in middileware");
    next();
})

app.use((req,res,next)=>{
    console.log("next middileware");
    res.send("<h1>express learning in easy way</h1>")
})

//const server=http.createServer(app)
//server.listen(3000)

app.listen(3000)