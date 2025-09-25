const express = require("express")
const dotenv= require("dotenv");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

dotenv.config()
const PORT= process.env.PORT;

const app=express();
app.use(express.json())
app.use(cors());
// body {
// title: string;
// description: string
// }


app.post("/todo", async function(req,res) {
    const createPayload = req.body;
    const parsePayload= createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        "msg":"TODO created"
    });
})

app.get("/todos", async function (req,res) {
    const todos = await todo.find({});
    console.log(todos); // promise

    res.json({
        todos: []
    })
})

app.put("/completed", async function(req,res) {
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id : req.update.id
    },
    {
        completed:true
    })

    res.json({
        "msg":"TODO updated / marked as completed"
    });
})

app.listen(PORT, (req,res) => {
    console.log(`listening on PORt ${PORT}`);
})