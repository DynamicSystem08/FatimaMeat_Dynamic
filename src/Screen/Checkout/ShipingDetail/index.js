import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import CallIcon from '@mui/icons-material/Call';
import PublicIcon from '@mui/icons-material/Public';


import { setShippingDetails } from '../../../store/slices/orderSlice'
import "./index.css"

function Shippingdetails() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartReducer.cart)

    const [details, setDetails] = useState({
        name: "nabeel",
        address: "sector 8",
        city: "karachi",
        pinCode: "12345",
        phoneNumber: "03362319053"
    })
    // console.log(details)

    const handelChange = (key, value) => {
        setDetails({ ...details, [key]: value })
    }

    const handleClick = () => {
        if (!details.name) {
            swal("Error!", "Please enter reciver's name", "error");
            return
        }
        if (!details.address) {
            swal("Error!", "Please enter delivery address", "error");
            return
        }
        if (!details.city) {
            swal("Error!", "Please enter city", "error");
            return
        }
        if (!details.pinCode) {
            swal("Error!", "Please enter pin code", "error");
            return
        }
        if (details.phoneNumber.length !== 11) {
            swal("Error!", "Please enter phone number of 11 digits", "error");
            return
        }

        dispatch(setShippingDetails(details))

        navigate('/checkout/confirmOrder')
    }

    if (!cartItems) {
        navigate('/cart')
        return <div>loading</div>
    }

    return <div style={{ backgroundColor: "white" }}>

        <div style={{ backgroundColor: "white", paddingTop: "140px" }}>

            <Container style={{ textAlign: "center", marginTop: "30px" }} maxWidth="md">
                <Grid container>
                    <Grid item lg={5.5} md={5.5} sm={5.5} xs={5.5} >
                        <Grid container>
                            <Grid item lg={3.5} md={3.5} sm={3.5} xs={3.5}>
                                <LocalShippingIcon sx={{ fontSize: "35px", marginTop: "-10px", color: "rgb(58,26,15)" }} />
                                <p>Shipping Details</p>
                            </Grid>
                            <Grid item lg={8.5} md={8.5} sm={8.5} xs={8.5}>
                                <hr></hr>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={5.5} md={5.5} sm={5.5} xs={5.5} >
                        <Grid container>
                            <Grid item lg={3} md={3} sm={3} xs={3}>
                                <CheckBoxIcon sx={{ fontSize: "35px", marginTop: "-10px", color: "rgb(213,188,157)" }} />
                                <p>Confirm Order</p>
                            </Grid>
                            <Grid item lg={9} md={9} sm={9} xs={9}>
                                <hr></hr>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={1} md={1} sm={1} xs={1}>
                        <AccountBalanceIcon sx={{ fontSize: "35px", marginTop: "-10px", color: "rgb(213,188,157)" }} />
                        <p >Payment</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <p style={{ fontSize: "25px", marginTop: "50px" }}><b>Shipping Details</b></p>
                        {/* <hr style={{ width: "250px" }}></hr> */}
                    </Grid>
                    <Grid container style={{ justifyContent: "center" }}>
                        <Grid item lg={3.5}>
                            <hr style={{ width: "250px" }}></hr>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="xs" className='shiping_info_main' style={{ marginBottom: "30px" }}>
                <Grid container style={{ marginTop: "50px" }} >

                    <Grid item lg={12} md={12} sm={12} xs={12} id="create1" style={{ marginBottom: "20px", marginTop: "-1px" }} className="input12">
                        <div style={{ border: "1px solid lightgray", width: "280px", marginLeft: "50px", marginRight: "50px", marginTop: "50px", marginBottom: "20px" }} className="shping_detail_input">< HomeIcon style={{ paddingLeft: "20px", fontSize: "40px" }} />
                            <input type="text" placeholder='Enter Name ' onChange={(e) => handelChange("name", e.target.value)} value={details.name}
                                style={{ outline: "none", textDecoration: "none", marginTop: "20px", marginBottom: "10px", paddingLeft: "20px", border: "none", fontSize: "15px" }} />
                        </div>
                        {/* <input type="text" placeholder="Enter Nme" /> */}
                        <div style={{ border: "1px solid lightgray", width: "280px", marginLeft: "50px", marginRight: "50px", marginTop: "50px", marginBottom: "20px" }}>< HomeIcon style={{ paddingLeft: "20px", fontSize: "40px" }} />
                            <input type="text" placeholder=' Address ' onChange={(e) => handelChange("address", e.target.value)} value={details.address}
                                style={{ outline: "none", textDecoration: "none", marginTop: "20px", marginBottom: "10px", paddingLeft: "20px", border: "none", fontSize: "15px" }} />
                        </div>
                        <div style={{ border: "1px solid lightgray", width: "280px", marginLeft: "50px", marginRight: "50px", marginTop: "50px", marginBottom: "20px" }}><  LocationCityIcon style={{ paddingLeft: "20px", fontSize: "40px" }} />
                            <input type="text" placeholder=' City ' onChange={(e) => handelChange("city", e.target.value)} value={details.city}
                                style={{ outline: "none", textDecoration: "none", marginTop: "20px", marginBottom: "10px", border: "none", paddingLeft: "20px", fontSize: "15px" }} />
                        </div>
                        <div style={{ border: "1px solid lightgray", width: "280px", marginLeft: "50px", marginRight: "50px", marginTop: "50px", marginBottom: "20px" }}><PersonPinCircleIcon style={{ paddingLeft: "20px", fontSize: "40px" }} />
                            <input type="text" placeholder=' Pin Code ' onChange={(e) => handelChange("zipCode", e.target.value)} value={details.zipCode}
                                style={{ outline: "none", textDecoration: "none", marginTop: "20px", marginBottom: "10px", border: "none", paddingLeft: "20px", fontSize: "15px" }} />
                        </div>
                        <div style={{ border: "1px solid lightgray", width: "280px", marginLeft: "50px", marginRight: "50px", marginTop: "50px", marginBottom: "20px" }}><CallIcon style={{ paddingLeft: "20px", fontSize: "40px" }} />
                            <input type="text" placeholder=' Phone Number ' onChange={(e) => handelChange("phoneNumber", e.target.value)} value={details.phoneNumber}
                                style={{ outline: "none", textDecoration: "none", marginTop: "20px", marginBottom: "10px", border: "none", paddingLeft: "20px", fontSize: "15px" }} />
                        </div>
                        {/* <div style={{ border: "1px solid lightgray", width: "280px", marginLeft: "50px", marginRight: "50px", marginTop: "50px", paddingLeft: "10px" }}><PublicIcon style={{ paddingLeft: "10px", fontSize: "32px" }} />
                            <select type="file" style={{ outline: "none", marginLeft: "25px", marginRight: "90px", paddingRight: "40px", textDecoration: "none", marginTop: "20px", marginBottom: "10px", border: "none", fontSize: "15px" }} >
                                <option value="saab">Country</option>
                                <option value="Web">Mobile</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div> */}


                    </Grid>
                </Grid>
                <Grid container className='shiping_detail_btn'>
                    <Grid item lg={7}>
                        <Button onClick={handleClick} style={{ backgroundColor: "rgb(58,26,15)", color: "white", marginBottom: "30px", width: "100%", marginTop: "20px" }}>Continue</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    </div>
}
export default Shippingdetails