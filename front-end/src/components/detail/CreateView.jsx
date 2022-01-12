import {Box,makeStyles,FormControl,InputBase, Button,TextareaAutosize} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { createPost, uploadFile } from '../../services/api';

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
const initalValue={
    title:"",
    description:"",
    picture:"",
    createdDate: new Date(),
    author:"sufiShah",
    catogery:"Music"
}
function CreateView() {
    const classes=useStyle();
    const [post, setPost]=useState(initalValue);
    let   [file, setFile]=useState('');
    const [image, setImage]=useState('');
    const url= post.picture ? post.picture : "http://localhost:8000/file/1633591921848-blog-react.png";

    const history=useHistory();
    const handleChange=(e)=>{
        setPost({...post, [e.target.name]:e.target.value})
    }
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
    
    const savePost= async()=>{
        await createPost(post);
        history.push('/')
    }
    return (
        <Box className={classes.container}>
            <img className={classes.image} src={url} />
            <FormControl className={classes.form}>
                <label htmlFor="inputfile" >
                <AddCircleIcon fontSize="large" color="action" />
                </label>
                    <input  id="inputfile" 
                    type="file" 
                    style={{display:"none"}}
                    onChange={(e)=>{setFile(e.target.files[0])}}

                    />
                <InputBase 
                 className={classes.textfield}
                 placeholder="Title"
                 onChange={(e)=>handleChange(e)}
                 name="title"
                 />
                <Button onClick={()=>savePost()} color="primary" variant="contained" >Publish</Button>
            </FormControl>
            <TextareaAutosize
              onChange={(e)=>handleChange(e)}
              name="description"
            className={classes.textarea}
            minRows="5"
            placeholder="Write your story" />
        </Box>

    )
}

export default CreateView
