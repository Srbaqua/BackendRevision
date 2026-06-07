const express = require('express');
const path = require('path')


const app  = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")));
app.set('view engine','ejs');

app.get("/:name",function(req,res){
    var name = req.params.name;
    res.send(`I am ${name}`) 
})

app.listen(3000);