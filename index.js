// function mult(a,b){
//     return a*b;
// }

// console.log(mult(5,6)); 

// // -D : we use for devdependencies

const express = require('express');
const app = express();

app.get("/users",(req,res)=>{
    console.log("the pages is user interaction")
    res.send({
        name: 'Abhilash pandey',
        Marrital_Status: 'married',
        wife : 'Shreya Chaturvedi',
        Children:'1 boy and 1 girl',
        Age: 30,
    })
})


app.get("/",(req,res)=>{
    // res.sendFile(__dirname + '/index.html');
    res.json({
        name: 'Abhilash pandey',
        Marrital_Status: 'married',
        wife : 'Shreya Chaturvedi',
        Children:'1 boy and 1 girl',
        Age: 30,
        success : true,

    })
})

app.listen(4000,()=>{
    console.log('server is running on port 4000')
})