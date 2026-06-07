const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine",'ejs');

app.get("/Profile",function(req,res){
    res.render("index");
})
app.get("/Profile/username/:name",function(req,res){
    res.send(`<h1>Welcome ${req.params.name}</h1>`);
})

app.listen(3000);