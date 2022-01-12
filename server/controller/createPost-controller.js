import e from "express";
import Post from "../schemas/post-schema.js";

export const createPost= async(request, responce)=>{
    try{
       const post= await new Post(request.body);
       post.save();
       responce.status(200).json("blog saved successfylly")

    }catch(error){
        responce.status(500).json(error);
    }

};

export const getAllPosts=async(request, responce)=>{
    let author=request.query.author;
    let catogery=request.query.catogery;
    let posts;
    try{
        if(author){
            posts= await Post.find({author:author})
        }else if(catogery){
            posts= await Post.find({catogery:catogery})
        }else{

            posts= await Post.find({});
        }
        responce.status(200).json(posts);
    }catch(error){
        responce.status(500).json(error);
    }
}

export const getPost= async(request, responce)=>{
    try{
        let post= await Post.findById(request.params.id);
        responce.status(200).json(post);
    }catch(error){
        responce.status(500).json(error);
    }
}


export const updatePost=async(request, responce)=>{
try{
    await Post.findByIdAndUpdate(request.params.id, {$set: request.body});
    responce.status(200).json("Update post")
}catch(error){
    responce.status(500).json(error);
}
}

export const deletePost=async(request, responce)=>{
    try{
        let post= await Post.findById(request.params.id);
        await post.delete();
        responce.status(200).json("post Deleted");
// console.log(request.params.id)
    }catch(error){
        responce.status(500).json(error);
    }
}