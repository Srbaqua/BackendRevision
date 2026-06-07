//Framework vs Library
//Framework: Provides a set of classes and methods that can be used to build a complete application.
//Library: Provides a set of functions that can be used to perform specific tasks.

//basic structure of Express.js
    const express = require('express');
    const app  = express();


    app.use(function(req,res,next){
        console.log("Hello I am Middleware");
        next();
    })
    app.use(function(req,res,next){
        console.log("Hello I am Middleware 2");
        next();
    })
    app.get("/",function(req,res){
        res.send("Hello i am home page");
    })

    app.get("/Profile",function(req,res,next){
        res.send("Hello I am Profile page");
        // return next(new Error("Something is Not working"));
    })

    app.use(function(err,req,res,next){
        console.log(err.stack);
        res.status(500).send("Something is Not working");
    })
    app.listen(3000);