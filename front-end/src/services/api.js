
import axios from 'axios';

const URL="http://localhost:8000";
export const createPost= async(post)=>{
 
    try{
        return await axios.post(`${URL}/create`,post)
    }catch(error){
        console.log("error while create post", error);
    }

}


export const getAllPosts=async(param)=>{
    try{
    
        let responce= await axios.get(`${URL}/posts${param}`);
        return responce.data;
    }catch(error){
        console.log("Error while calling getpost api", error);
    }
}

export const getPost= async(id)=>{
    try{

        let responce= await axios.get(`${URL}/post/${id}`);
        return responce;
    }catch(error){
        console.log("Error while get post", error);
    }

}

export const updatePost=async(id, post)=>{
try{
   await axios.post(`${URL}/update/${id}`, post);
}catch(error){
console.log("Error while update post", error)
}
}

export const deletePost=async(id)=>{
    try{

         await axios.delete(`${URL}/delete/${id}`);
    }catch(error){
        console.log("Error while deleting post", error);
    }
}

export const uploadFile=async(data)=>{
    try{
       return await axios.post(`${URL}/file/upload`, data)
    }catch(error){
        console.log("error while upload image", error)
    }
}