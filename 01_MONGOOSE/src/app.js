const mongoose =require("mongoose");


//Connection to a existing database of making a new Database if doesn't exist
mongoose.connect("mongodb://0.0.0.0:27017/NewDatabase",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connection Successfull....")
})
.catch((err)=>{
    console.log(err);
})
