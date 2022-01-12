
import mongoose from "mongoose";

const PostSchema=mongoose.Schema({

    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        require:false,
    },
    author:{
        type:String,
        require:true,
    },
    catogery:{
        type:String,
        required:false,
    },
    createdDate:{
        type:Date
    },
})

const Post= mongoose.model('Post', PostSchema);

export default Post;