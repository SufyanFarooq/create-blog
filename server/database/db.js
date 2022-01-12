import mongoose from 'mongoose';

const Connection= async()=>{
    try{

        const URL="mongodb://user:Sufi2580@blogweb-shard-00-00.rjl2w.mongodb.net:27017,blogweb-shard-00-01.rjl2w.mongodb.net:27017,blogweb-shard-00-02.rjl2w.mongodb.net:27017/BLOGWEB?ssl=true&replicaSet=atlas-4yxbo2-shard-0&authSource=admin&retryWrites=true&w=majority"
        await mongoose.connect(URL,{useNewUrlParser:  true, useUnifiedTopology:  true,  useCreateIndex: true, })
        console.log("Database connected successfully")
    }catch(error){
        console.log("Error while connectiog MongoDb", error)
    }
}

export default Connection;