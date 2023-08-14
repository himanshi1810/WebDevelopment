const express = require("express");//import express with using require
const app = express();//Create application
const port = 3000;

//Middle Ware
app.use(express.json());

//Route

//Get request
app.get("/",(req,res) => {
    res.send("This is Home Page");
})

//post request
app.post("/car",(req,res) => {
    res.send("This is post request");
})

app.listen(port, () =>{
    console.log(`App started on port number ${port}`)
})