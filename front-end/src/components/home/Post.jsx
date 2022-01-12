import {Box, Typography,makeStyles} from '@material-ui/core'
const useStyle=makeStyles({
    container:{
        height:350,
        margin:10,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        border:"1px solid #d3cede",
        borderRadius:10,
        "& > *":{
            padding:"0 5px 5px 5px",
        }
    },
    image:{
        height:150,
        width:"100%",
        objectFit:"cover",
        borderRadius:"10px 10px 0 0"
    },
    text:{
        color:"#878788",
        fontSize:12
    },
    heading:{
        fontSize:18,
        fontWeight:600,
        text:"center",
    },
    detail:{
        fontSize:14,
        wordBreak:"break-word",
        overflow:"hidden"
        

    }
})
export default function Post({post}) {
    const classes=useStyle()
    const url= post.picture ||'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';

    return (
      <Box className={classes.container}>
          <img className={classes.image} src={url} alt="image" />
          <Typography className={classes.text}>{post.catogery}</Typography>
          <Typography className={classes.heading}>{post.title}</Typography>
          <Typography className={classes.text}>Author:{post.author}</Typography>
          <Typography className={classes.detail}>{post.description}</Typography>

      </Box>
    )
}
