import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function HeaderTop() {
    const navigate = useNavigate()

    return <div style={{ backgroundColor: "black", marginBottom: "50px" }}>
        <Container>
            <Grid container style={{ paddingTop: "5px" }}>
                <Grid item lg={2}>
                    <Grid container>
                        <Grid item lg={2}>
                            <CallIcon style={{ color: "rgba(213,188,157,0.9)", paddingTop: "3px", backgroundColor: "white", borderRadius: "50%" }} />
                        </Grid>
                        <Grid item lg={10} style={{ paddingTop: "3px", paddingBottom: "5px", color: "white" }}>
                            <text>Call Us:0313-763590</text>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={6.5}></Grid>
                <Grid item lg={1.5}>
                    <text style={{ color: "white" }}>CONTACT US</text>
                </Grid>
                <Grid item lg={2}>
                    <Grid container>
                        {/* <p style={{color:"white",paddingTop:"2px",cursor:"pointer"}}>Login/Register</p> */}
                        <text
                            onClick={() => navigate('/auth')}
                            style={{ color: "white", cursor: "pointer" }}>Login/Register</text>

                        {/* <Grid item lg={12}>
                            <Button style={{ backgroundColor: "transparent", width: "100%", color: "white",paddingTop:"-10px" }}>View More Recipes</Button>
                        </Grid> */}
                        {/* <Grid item lg={2}>
                            <FacebookIcon style={{color:"rgba(213,188,157,0.9)",paddingTop:"3px",backgroundColor:"white",borderRadius:"50%"}} />
                        </Grid>
                        <Grid item lg={10} style={{paddingTop:"3px",paddingBottom:"5px",color:"white"}}>
                            <text>Fllow Us</text>
                        </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>
}
export default HeaderTop