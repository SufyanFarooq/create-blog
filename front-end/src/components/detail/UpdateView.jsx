import {Box,makeStyles,FormControl,InputBase, Button,TextareaAutosize} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useEffect, useState } from 'react';
import { getPost, updatePost, uploadFile } from '../../services/api';
import {useHistory} from "react-router-dom";
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
    form:{
        display:"flex",
        flexDirection:"row",
        marginTop:20
    },
    textfield:{
        flex:1,
        margin:"0 30px",
        fontSize:25
    },
    textarea:{
        fontSize:18,
        width:"100%",
        marginTop:50,
        border:"none",
        outline:"none"
    }
}));
function UpdateView({match}) {
    const classes=useStyle();
    let history=useHistory() 
    const initalValue={
        title:"",
        description:"",
        picture:"",
        createdDate: new Date(),
        author:"sufyanFarooq",
        catogery:"All"
    };
    let [post, setPost]=useState(initalValue);
    let   [file, setFile]=useState('');
    const [image, setImage]=useState('');
    const url= post.picture? post.picture: "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    useEffect(() => {
        const getImage=async()=>{
             if(file){
                 const data= new FormData();
                 data.append('name', file.name);
                 data.append('file', file);
                 const image= await uploadFile(data);
                 post.picture= image.data;
                 setImage(image.data);
                 
 
             }
        };
        getImage();
     }, [file])
    useEffect(()=>{
        const fetchPost=async()=>{
            let {data}= await getPost(match.params.id);
            setPost(data);
            // console.log("update post", data);
        }
        fetchPost();
    },[])
    const handleChange=(e)=>{
        setPost({...post, [e.target.name]:e.target.value})
    }

    const update=async()=>{
        await updatePost(match.params.id, post);
         history.push(`/detail/${match.params.id}`);
    }
  


    return (
        <Box className={classes.container}>
            <img className={classes.image} src={post.picture || url} />
            <FormControl className={classes.form}>
            <label htmlFor="inputfile" >
                <AddCircleIcon fontSize="large" color="action" />
                </label>
                    <input  id="inputfile" 
                    type="file" 
                    style={{display:"none"}}
                    onChange={(e)=>{setFile(e.target.files[0])}}

                    />
                <InputBase value={post.title} 
                name="title"
              onChange={(e)=>handleChange(e)}
                className={classes.textfield}/>
                <Button color="primary" variant="contained" onClick={()=>update()} >Update</Button>
            </FormControl>
            <TextareaAutosize 
            className={classes.textarea}
            rowsMin={5}
            name="description"
            onChange={(e)=>handleChange(e)}

            defaultValue={post.description}
            placeholder="Write your story" />
        </Box>

    )
}

export default UpdateView;
