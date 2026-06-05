var arr = ['.',"..","...",1,2,3,7,5,3,"....",9,12," Saurabh"];


//for each
console.log("For each function");
arr.forEach(function(val){
    console.log("Hi"+ val);
})

//map
var newarr = arr.map(function(val){
    return "Hi"+val;
})

console.log("map function "+newarr);

//filter
var filArr = arr.filter(function(val){
    if(val>3)return true;
    else return false;
})
console.log("Filter function "+filArr);


//find ->give the first element which satisfy the condition

var find =  arr.find(function(val){
    if(val>3)return true;
})
console.log("Find function "+find);
