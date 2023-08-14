
const express = require("express");
const app = express();

//load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());  

//import routes for todo api
const todoRoutes = require("./Routes/todos");

//Mounting
app.use("/api/v1",todoRoutes);


//Start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT} `)
})

//Connect to the database
const dbConnect = require("./Config/database");
dbConnect();

//default router
app.get("/" ,(req,res)=>{
    res.send(`<h1>This is HomePage</h1>`);
})