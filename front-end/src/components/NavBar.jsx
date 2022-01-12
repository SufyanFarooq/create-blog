import {makeStyles,AppBar,
    Toolbar,Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';
const useStyle=makeStyles({

    component:{
        background:"#FFFFFF",
        color:"black"
    },
    container:{
        justifyContent:"center",
      '& > *':{
          padding:20,
      }
    },
    link:{
        textDecoration:"none",
        color:"inherit"
    }
})
export default function NavBar() {
    const classes=useStyle();
    return (
      <AppBar className={classes.component}>
         <Toolbar className={classes.container}>
            <Link className={classes.link} to="/">
                 <Typography>HOME</Typography>
            </Link> 
             <Typography>ABOUT</Typography>
             <Typography>CONTACT</Typography>
             <Typography>LOGIN</Typography>

         </Toolbar>
      </AppBar>
    )
}
