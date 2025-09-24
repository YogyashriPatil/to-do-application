const mongoose = require("mongoose")
const dotenv=require("dotenv");
const { boolean } = require("zod");
dotenv.config();

const mongo_url= process.env.MONGO_DB

mongoose.connect(mongo_url)
const todolist = mongoose.Schema(
    {
        title:String,
        description:String,
        completed:boolean
});

const todo = mongoose.model("todos", todolist);

module.exports = {
    todo
}