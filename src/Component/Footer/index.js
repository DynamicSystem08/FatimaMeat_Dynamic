import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import FacebookIcon from '@mui/icons-material/Facebook';

import "./index.css"
function Footer() {
    return <div>
        <div className="footer_bg_img" >
            <p>CONTACT US</p>
            <Container style={{ paddingBottom: "50px" }}>
                <Grid container className='footer_text'>
                    <Grid item lg={3.5}>
                        <input type="text" placeholder='*Name' style={{ backgroundColor: "transparent", outline: "none", border: "none", borderBottom: "1px solid white", color: "white", width: "100%" }} /><br></br><br></br>
                        <input type="text" placeholder='*Tel' style={{ backgroundColor: "transparent", outline: "none", border: "none", borderBottom: "1px solid white", color: "white", width: "100%" }} /><br></br><br></br>
                        <input type="email" placeholder='*Email' style={{ backgroundColor: "transparent", outline: "none", border: "none", borderBottom: "1px solid white", color: "white", width: "100%" }} /><br></br><br></br>
                    </Grid>
                    <Grid item lg={3.5}>
                        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='*Message' style={{ backgroundColor: "transparent", outline: "none", border: "none", borderBottom: "1px solid white", color: "white", width: "100%" }}></textarea><br></br><br></br>
                        <Button style={{ backgroundColor: "rgba(213, 188,157)", color: "white" }}>submit</Button>
                    </Grid>
                    <Grid item lg={4} className="head_office">
                        <p>HEAD OFFICE</p>
                        <Grid container>
                            <Grid item lg={1.5}>
                                <LocationOnIcon style={{ fontSize: "40px", color: "rgba(213, 188,157" }} />
                            </Grid>
                            <Grid item lg={10}>
                                <text style={{ color: "white" }}>Suite G/5/5, 3rd Floor Mansoor Tower, Clifton Block 9, Karachi, Pakistan</text>
                            </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: "30px" }}>
                            <Grid item lg={1.5}>
                                <CallIcon style={{ fontSize: "40px", color: "rgba(213, 188,157", marginTop: "-10px" }} />
                            </Grid>
                            <Grid item lg={10}>
                                <text style={{ color: "white" }}>PH:(021):111-145-563</text>
                            </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: "30px" }}>
                            <Grid item lg={1.5}>
                                <MarkunreadIcon style={{ fontSize: "40px", color: "rgba(213, 188,157", marginTop: "-10px" }} />
                            </Grid>
                            <Grid item lg={10}>
                                <text style={{ color: "white" }}> Email: customercare@FatimamMeat.net</text>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </div>
        <div style={{ backgroundColor: " rgb(58,26,15)" }}>
            <Container>
                <Grid container>
                    <Grid item lg={10}>
                        <p style={{color:"white",paddingTop:"5px"}}>Copyright 2000 © www.FatimaMeat.net
                        </p>
                    </Grid>
                    <Grid item lg={1}>
                    <FacebookIcon style={{ fontSize: "40px", color: "white",paddingTop:"5px" }} />

                    </Grid>
                </Grid>
            </Container>

        </div>
    </div>
}
export default Footer