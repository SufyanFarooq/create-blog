import Post from "./Post"
import { Grid } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllPosts } from "../../services/api";
export default function Posts() {
   
    let [post, setPost]= useState([]);
    let {search}=useLocation()
    useEffect(()=>{
     const fetchData= async()=>{
        let data= await getAllPosts(search);
        setPost(data);
        console.log("all posts",data);
     };
     fetchData();
    },[search])
    return (      
        
              post?.map(post=>(
                <Grid item  lg={3}  sm={4} xs={12}>
                  <Link to={`/detail/${post._id}`} style={{color:"inherit", textDecoration:"none"}}>
                  <Post post={post} />
                  </Link>
                  
                </Grid>
              ))
        
       )
    
}
