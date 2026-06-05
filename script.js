var arr = ['.',"..","...",1,2,3,7,5,3,"....",9,12," Saurabh"];


// //for each
// console.log("For each function");
// arr.forEach(function(val){
//     console.log("Hi"+ val);
// })

// //map
// var newarr = arr.map(function(val){
//     return "Hi"+val;
// })

// console.log("map function "+newarr);

// //filter
// var filArr = arr.filter(function(val){
//     if(val>3)return true;
//     else return false;
// })
// console.log("Filter function "+filArr);


// //find ->give the first element which satisfy the condition

// var find =  arr.find(function(val){
//     if(val>3)return true;
// })
// console.log("Find function "+find);
 

//Objects
var obj =  {
    name:"Saurabh",
    age:25,
    address:"x",
    something:1,
};
//to access the object
 obj.name;
 obj["name"];
//  Object.freeze(obj);// freeze the object
 obj.name = "Saurabh Kumar";


function x(){
    console.log("1");
}
async function y(){
     console.log("2");
}

function z(){
    console.log("3");
}
function a(){
    x();
    y();
    z();
}
a();
