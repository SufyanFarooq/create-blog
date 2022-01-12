import {Grid} from '@material-ui/core'
import Banner from './Banner';
import Catogeries from './Catogeries';
import Posts from './Posts';
export default function Home() {
    return (
        <div>
            <Banner/>
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Catogeries/>
                </Grid>
                <Grid container item lg={10} xs={12} sm={10}>
                    <Posts/>
                </Grid>

            </Grid>
        </div>
    )
}
