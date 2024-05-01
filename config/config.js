const mongoose = require('mongoose');
require('colors');

//connectDB Function

const connectDb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow)

    }catch(err){
        console.log(`Error: ${err.message}`.bgRed);
        process.exit(1);
    }
}

//export 
module.exports= connectDb;