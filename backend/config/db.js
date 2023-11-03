require("dotenv").config();
 const mongoose = require('mongoose');

 const connectDB = async ()=>{
    try{
      await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
      })
      console.log("MongoDb connection sucess");
    } catch(error){
     console.error("MongoDb connection is fail");
     process.exit(1);
    }
 }

 module.exports = connectDB