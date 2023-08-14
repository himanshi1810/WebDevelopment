//Import the model

const Todo = require("../Models/Todo");

//Define route handler

exports.deleteTodo = async(req,res) => {
    try {
        const {id} = req.params;
        
        await Todo.findByIdAndDelete(id);


        res.json({
            success:true,
            message:'Entry Deleted Successfully'
        })
    }
    catch(err)
    {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message : err.message,
        })
    }
}