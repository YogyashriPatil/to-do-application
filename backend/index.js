const express = require("express")
const dotenv= require("dotenv");
const { createTodo, updateTodo } = require("./types");
const mongoose=require("mongoose");

dotenv.config()
const PORT= process.env.PORT;

const app=express();
app.use(express.json())

const mongourl=process.env.MONGO_DB
mongoose.connect(mongourl)

// body {
// title: string;
// description: string
// }


app.post("/todo", function(req,res) {
    const createPayload = req.body;
    const parsePayload= createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    // put it in mongodb
    const todo = new User({
        title:title,
        description:description
    });

    todo.save();

    res.json({
        "msg":"TODO list added"
    });
})

app.get("/todos", function (req,res) {
    
})

app.put("/completed", function(req,res) {
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
})

app.listen(PORT, (req,res) => {
    console.log(`listening on PORt ${PORT}`);
})