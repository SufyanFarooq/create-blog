import {Box, makeStyles,Typography} from '@material-ui/core';
import { Edit,Delete } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {getPost, deletePost} from '../../services/api.js';
import {useHistory} from 'react-router-dom';
const useStyle=makeStyles((theme)=>({
    container:{
        padding:"0 100px",
        [theme.breakpoints.down('md')]:{
            padding:0
        }

    },
    image:{
        width:"100%",
        height:"50vh",
        objectFit:"cover"
    },
    icons:{
        float:"right"
    },
    icon:{
        margin:10,
        border:"1px solid black",
        borderRadius:10,
        padding:5,
    },
    heading:{
        margin:"50px 0 10px 0",
        textAlign:"center",
        fontSize:38,
        fontWeight:600,
    },
    subheading:{
        display:"flex",
        color:"#878787",
        margin:"20px 0",
        [theme.breakpoints.down("sm")]:{
            display:"block",
        }

    },
    link:{
        color:"ingerit",
        textDecoration:"none",
    }
}))
function DetailView({match}) {
    const classes=useStyle();
    let history=useHistory();
    let [post, setPost]=useState({});
    const url="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"; 
   useEffect(()=>{
    const fetchPost=async()=>{
    let {data}= await getPost(match.params.id);
        console.log("single post",{data});
        setPost(data);
    };
    fetchPost();
   },[]);

   const deleteBlog=async()=>{
    await deletePost(match.params.id);
    history.push('/')

   }
    return (
     
       <Box className={classes.container}>
        <img className={classes.image} src={ post.picture ||url} />
        <Box className={classes.icons}>
           <Link to={`/update/${post._id}`}> <Edit className={classes.icon} color="primary"/></Link>
            <Delete onClick={()=>deleteBlog()} className={classes.icon} color="error"/>
        </Box>
        <Typography className={classes.heading}>{post.title}</Typography>
        <Box className={classes.subheading}>
            <Link className={classes.link} to={`/?author=${post.author}`} >
            <Typography> Author:<strong>{post.author}</strong></Typography>
            </Link>
            <Typography style={{marginLeft:"auto"}}>{new Date(post.createdDate).toDateString()}</Typography>
        </Box>
        <Typography>{post.description}</Typography>
       </Box>
   
    )
}

export default DetailView
