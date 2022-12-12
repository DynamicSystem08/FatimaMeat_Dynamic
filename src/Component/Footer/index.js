import { useState } from 'react'
import swal from 'sweetalert';

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import FacebookIcon from '@mui/icons-material/Facebook';

import { emailSupportTeam } from '../../store/slices/userSlice'

import "./index.css"
function Footer() {

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: "test@",
        message: "test",
        phoneNumber: "12345678912",
        name: "test"
    })
    // console.log(formData)

    const handleChange = (e, key) => {
        setFormData({ ...formData, [key]: e.target.value })
    }

    const handleClick = async () => {
        setLoading(true)
        if (!formData.email && !formData.name && !formData.phoneNumber && !formData.message) {
            swal("Error!", "Please fill out all fields", "error");
            setLoading(false)
            return
        }
        if (!formData.email.includes('@')) {
            swal("Error!", "Please enter a proper email", "error");
            setLoading(false)
            return
        }
        if (formData.phoneNumber.length !== 11) {
            swal("Error!", "Please enter proper phone number eg. 03362319054", "error");
            setLoading(false)
            return
        }

        const { payload } = await emailSupportTeam(formData)

        if (payload.error) {
            swal({
                title: "Error!",
                icon: "error",
                text: payload.message,
                button: "Ok!",
            });
        }
        else {
            swal({
                title: "Success!",
                icon: "success",
                text: "message recorded",
                button: "Ok!",
            });
            setFormData({
                name: '',
                message: '',
                phoneNumber: '',
                email: ''
            })
        }

        setLoading(false)
    }

    return <div>
        <div className="footer_bg_img" >
            <p>CONTACT US</p>
            <Container style={{ paddingBottom: "50px" }}>
                <Grid container className='footer_text'>
                    <Grid item lg={3.5} md={2.5} sm={5} xs={12}>
                        <input
                            onChange={e => handleChange(e, 'name')}
                            value={formData.name}
                            type="text" placeholder='*Full Name'
                            style={{ backgroundColor: "transparent", outline: "none", border: "none", borderBottom: "1px solid white", color: "white", width: "100%" }} />
                        <br></br><br></br>
                        <input
                            onChange={e => handleChange(e, 'phoneNumber')}
                            value={formData.phoneNumber}
                            type="text" placeholder='*Phone Number'
                            style={{ backgroundColor: "transparent", outline: "none", border: "none", borderBottom: "1px solid white", color: "white", width: "100%" }} />
                        <br></br><br></br>
                        <input
                            onChange={e => handleChange(e, 'email')}
                            value={formData.email}
                            type="email" placeholder='*E-mail Address' style={{ backgroundColor: "transparent", outline: "none", border: "none", borderBottom: "1px solid white", color: "white", width: "100%" }} />
                        <br></br><br></br>
                    </Grid>
                    <Grid item lg={3.5} md={2.4} sm={5} xs={12}>
                        <textarea
                            onChange={e => handleChange(e, 'message')}
                            value={formData.message}
                            id="w3review" name="w3review" rows="4" cols="50" placeholder='*Message' style={{ backgroundColor: "transparent", outline: "none", border: "none", borderBottom: "1px solid white", color: "white", width: "100%" }}></textarea><br></br><br></br>
                        <Button
                            onClick={handleClick}
                            style={{ backgroundColor: "rgba(208,13,30)", color: "white" }}>submit</Button>
                    </Grid>
                    <Grid item lg={4}  className="head_office">
                        <p>HEAD OFFICE</p>
                        <Grid container>
                            <Grid item lg={1.5} md={2}  sm={5} xs={1.5}>
                                <LocationOnIcon style={{ fontSize: "40px", color: "rgba(208,13,30)" }} />
                            </Grid>
                            <Grid item lg={10} xs={10}>
                                <text style={{ color: "white" }}>Suite G/5/5, 3rd Floor Mansoor Tower, Clifton Block 9, Karachi, Pakistan</text>
                            </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: "30px" }}>
                            <Grid item lg={1.5} xs={1.5}>
                                <CallIcon style={{ fontSize: "40px", color: "rgba(208,13,30)", marginTop: "-10px" }} />
                            </Grid>
                            <Grid item lg={10} xs={10}>
                                <text style={{ color: "white" }}>PH: 042-111-FATIMA</text>
                            </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: "30px" }}>
                            <Grid item lg={1.5} xs={1.5} >
                                <MarkunreadIcon style={{ fontSize: "40px", color: "rgba(208,13,30)", marginTop: "-10px" }} />
                            </Grid>
                            <Grid item lg={10}  xs={10}>
                                <text style={{ color: "white" }}> Email: support@FatimamMeat.com</text>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </div>
        <div style={{ backgroundColor: "black" }}>
            <Container>
                <Grid container>
                    <Grid item lg={10} md={10} sm={10} xs={10.5}>
                        <p style={{ color: "white", paddingTop: "5px" }}>Copyright 2000 © www.FatimaMeat.com
                        </p>
                    </Grid>
                    <Grid item lg={1} md={1} sm={1} xs={1}>
                        <FacebookIcon style={{ fontSize: "40px", color: "rgb(208,13,30)", paddingTop: "5px" }} />

                    </Grid>
                </Grid>
            </Container>

        </div>
    </div>
}
export default Footer