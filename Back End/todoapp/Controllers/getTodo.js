//Import the model

const Todo = require("../Models/Todo");

//Define route handler

exports.getTodo = async(req,res) => {
    try {
        //fetch all todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:'Entire Todo data is fetched'
        })
    }
    catch(err)
    {
        console.error(err);
         
        res.status(500)
        .json({
            success:false, 
            error : err.message,
            message : 'Server Error',
        }); 
    }
}

exports.getTodoById = async(req,res) => {
    try {
       //Extract todo item basis on id
       const id = req.params.id;
       const todo = await Todo.findById({_id: id})

       //data for given id is not find
       if(!todo){
        return res.status(404).json({
            success:false,
            message:"No data found for given id",
        })
       }
        //data for giben id found
    res.status(200).json({
        success:true,
        data:true,
        message: `Todo ${id} data successfully found`,
    })
    }

   
    catch(err)
    {
        console.error(err);
         
        res.status(500)
        .json({
            success:false, 
            error : err.message,
            message : 'Server Error',
        }); 
    }

}
   
