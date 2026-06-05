// ```basic we study-
//         writefile
//         readfile
//         appendfile
//         deletefile
//         copyfile
//         renamefile
//         unlinkfile    
// ```
const fs =  require('fs');
// fs.writeFile('hey.txt',"Hello checking writeFile",function(err){
//     if(err){console.log(err)}
//     else{
//         console.log("File written successfully");
//     }  
// })
// fs.appendFile("hey.txt","\n lets add something more to check append file functionality",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Append successfully");
//     }
// })
// fs.rename("hey.txt","changeNamed.txt",function(err){
//     if(err)console.log(err);
//     else{
//         console.log("Renamed Successfully");
//     }
// })
fs.readFile("changeNamed.txt","utf8",function(err,data){
    if(err)console.log(err);
    else{
        console.log("file read \n",data);
    }
})