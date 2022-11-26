import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AddIcon from '@mui/icons-material/Add';

import "./index.css"
import locationImg from "../../../Image/locationimg.jpg"
function Location() {
    return <div style={{ marginTop: "50px", backgroundColor: "rgb(58,26,15)" }}>
        <h1 className="location_heading">FATIMA MEAT LOCATION</h1>
        <Container>
            <Grid container>
                <Grid item lg={12} className="location_img">
                    <img src={locationImg} alt="" />
                </Grid>
            </Grid>
            <Grid container className='our_location'>
                <Grid item lg={2.7} className="our_location_text">
                    <Grid container>
                        <Grid item lg={2.5}>
                            <FmdGoodIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                        <Grid item lg={3} className="location_text">
                            <p>KARACHI</p>
                        </Grid>
                        <Grid item lg={3}></Grid>
                        <Grid item lg={2}>
                            <AddIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={2.7} className="our_location_text">
                    <Grid container>
                        <Grid item lg={2.5}>
                            <FmdGoodIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                        <Grid item lg={3} className="location_text">
                            <p>LAHORE</p>
                        </Grid>
                        <Grid item lg={3}></Grid>
                        <Grid item lg={2}>
                            <AddIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={2.7} className="our_location_text">
                    <Grid container>
                        <Grid item lg={2.5}>
                            <FmdGoodIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                        <Grid item lg={3} className="location_text">
                            <p>RAALPINDI</p>
                        </Grid>
                        <Grid item lg={3}></Grid>
                        <Grid item lg={2}>
                            <AddIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={2.7} className="our_location_text">
                    <Grid container>
                        <Grid item lg={2.5}>
                            <FmdGoodIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                        <Grid item lg={3} className="location_text">
                            <p>GUJRAWALA</p>
                        </Grid>
                        <Grid item lg={3}></Grid>
                        <Grid item lg={2}>
                            <AddIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>

}
export default Location