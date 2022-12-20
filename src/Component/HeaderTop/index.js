import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import CallIcon from '@mui/icons-material/Call';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { styles } from '../Colors';

function HeaderTop(props) {
    const navigate = useNavigate()

    return <div style={styles}>
        <Container style={{marginBottom:"50px"}}>
            <Grid container style={{ paddingTop: "5px" }}>
                <Grid item lg={3} md={3} sm={3} xs={7.5}>
                    <Grid container>
                        {/* <Grid item lg={2} md={2} xs={2} style={{paddingRight:"30px"}}>
                            <CallIcon style={{ color: "rgba(213,188,157,0.9)",paddingTop: "3px", backgroundColor: "white", borderRadius: "50%" }} />
                        </Grid> */}
                        <Grid item lg={10} md={12} sm={12}xs={12} style={{ paddingTop: "3px", paddingBottom: "5px", color: "white" }}>
                            <text>Call : 042-111-FATIMA-328462</text>
                        </Grid> 
                    </Grid>
                </Grid>
                <Grid item lg={5.5} md={5} sm={3} ></Grid>
                <Grid item lg={1.5} md={1.5} sm={2} xs={3}>
                    <text style={{ color: "white" }}>Your Account</text>
                </Grid>
                <Grid item lg={2} md={2} sm={1.5} xs={10}>
                    <Grid container>
                        {/* <p style={{color:"white",paddingTop:"2px",cursor:"pointer"}}>Login/Register</p> */}
                        {
                            props.user ? <text
                                onClick={() => navigate('/dashboard')}
                                style={{ color: "white", cursor: "pointer" }}>Welcome! {props.user.displayName}</text>
                                :
                                <text
                                    onClick={() => navigate('/auth')}
                                    style={{ color: "white", cursor: "pointer" }}>Login/Register</text>
                        }
                        {/* <text
                            onClick={() => navigate('/auth')}
                            style={{ color: "white", cursor: "pointer" }}>Login/Register</text> */}

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