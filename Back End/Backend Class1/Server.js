
// step 1: Two lines are used to create server 
const express = require('express');
const app = express();

//used to parse req.body in express
const bodyParser = require('body-parser');

//Specificaly pass json data & add it to the request.body objet
app.use(bodyParser.json());

//Step 2: Port listen and second said to behaviour of the port
app.listen(3000, ()=>
{
    console.log("Server started at port no. 3000")
});

//Step 3: Create routes with the get and post
app.get('/',(req,res) =>
{
    res.send("Hello Jee,Kese ho saare");
})

app.post('/api/cars',(req,res)=>
{
 const {name,brand} = req.body;
 console.log(name);
 console.log(brand);
 res.send("Cars submitted sucessfully");   
})

//Link db and express with mongoose
//In new version we have to write 0.0.0.0 instead of localhost
const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/myDatabase',{
    useNewUrlParser : true,
    useUnifiedTopology:true
})

//Promises
.then(() => {console.log("Connection Successfully")})
.catch((error) => {console.log("Received an Error")});
