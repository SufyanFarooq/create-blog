 import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { catogeries } from '../../constants/categories';
import { Link } from 'react-router-dom';
const useStyle = makeStyles({
    create: {
        background: "#6495ED",
        color: "#fff",
        margin: 20,
        width: "86%",
    },
    table:{
        border:'1px solid rgba(224, 224, 224, 1)'
    },
    link:{
        textDecoration:"none",
        color:"inherit",
    }
})
export default function Catogeries() {
    const classes = useStyle();
    return (
        <>
          <Link to="/create" className={classes.link}>  <Button varient="contained"  color="primary" className={classes.create}>Create Blog</Button></Link>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <Link to="/"  className={classes.link}>
                        <TableCell>All Catogeries</TableCell>
                        </Link>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        catogeries.map((catogery)=>{

                           return <TableRow>
                                <TableCell>
                               <Link className={classes.link}
                               to={`/?catogery=${catogery}`}>     
                                    {catogery}
                               </Link>
                                    </TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </>
    )
}
