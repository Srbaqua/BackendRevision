const express = require('express');
const app = express();

//Form handling sessions and cookies.
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(req,res,next){
    console.log("i am Middle ware");
    next();
})

app.get('/Profile',function(req,res){
    return console.log("Yes i am working");
    
})
app.get('/',function(req,res){
    res.send("I am homepage");
})
app.get('/Section',function(req,res){
    var x = "I am section module";
    console.log(x+" console");
    res.send(x+"--Frontend")
})

app.listen(4000);

