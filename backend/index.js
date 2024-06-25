const express = require("express");
const mongoose=require("mongoose");
const financialRecordRouter = require("./routes/financial-records"); 
const cors = require("cors");

const app= express();
app.use(cors());
app.listen(3008,()=>{
    console.log("Server is running on port 3008");
});
app.use(express.json());

const MongoURI="mongodb+srv://anshyadavprogramming:LRV60MKBKTOAzCYC@financetracker.6efn9oo.mongodb.net/?retryWrites=true&w=majority&appName=financeTracker/"

mongoose.connect(MongoURI).then(()=>{console.log("connected to mongo db!!!f")}).catch((err)=>console.log("could not connect to mongo db"))
app.use("/financial-records",financialRecordRouter);