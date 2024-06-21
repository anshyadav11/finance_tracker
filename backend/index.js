const express = require("express");
const mongoose=require("mongoose")


const app= express();
app.listen(3008,()=>{
    console.log("Server is running on port 3008");
});
app.use(express.json());

const MongoURI="mongodb+srv://anshyadavprogramming:3dMZpsJYvAZZINzY@financetracker.g9asisj.mongodb.net/"

mongoose.connect(MongoURI).then(()=>{console.log("connected to mongo db!!!f")}).catch((err)=>console.log("could not connect to mongo db"))