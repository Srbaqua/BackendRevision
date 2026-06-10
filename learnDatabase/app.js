const express = require('express');
const app = express();
const userModel = require("./usermodel");
const path  = require('path');
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));


app.get('/',function(req,res){
    res.render('index');
})
app.get('/create',async function(req,res){
   let userData =  await userModel.create({ // mongoose codes are async in nature
        name:"Saurabh",
        age:"four",
        email:"sourabh@gmail.com" 
    })
    userData += await userModel.create({
        name:"Yashita",
        age:"5",
        email:"yashita@gmail.com"
    })
    res.send(userData);
})
app.get('/update',async function(req,res){
   let updatedData =  await userModel.findOneAndUpdate({name:"Saurabh"},{name:"Saurabh Chaudhary"},{new:true});
    res.send(updatedData);
})
app.get('/read',async function(req,res){
   let data =  await userModel.find();
    res.send(data);
})
app.get('/delete',async function(req,res){
    deleteData = await userModel.findOneAndDelete({name:"Saurabh"});
    res.send(deleteData);
})
app.listen(3000);
