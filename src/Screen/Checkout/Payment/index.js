import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Button from '@mui/material/Button';
import { createOrder, deleteOrderState } from '../../../store/slices/orderSlice'
import { removeCartItems } from '../../../store/slices/cartSlice'

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import "./index.css"


function Payment() {
    const [expanded, setExpanded] = useState('panel1')

    const [loading, setLoading] = useState(false)



    const dispatch = useDispatch()
    const navigate = useNavigate()

    const totalOrderAmount = useSelector(state => state.orderReducer.totalOrderAmount)
    const shippingDetails = useSelector(state => state.orderReducer.shippingDetails)
    // const buyerDetails = useSelector(state => state.userReducer.user)
    const cartItems = useSelector(state => state.cartReducer.cart)
    const cartTotal = useSelector(state => state.orderReducer.cartTotal)

    const [formData, setFormData] = useState({
        paymentMethod: "cash",
        // bankName: "COD",
        // cardHolderName: "Nabeel",
        // cardNo: "12345678912",
        // cvsNo: "123"
    })

    const handelChange = (key, value) => {
        setFormData({ ...formData, [key]: value })
    }

    const handleClick = async () => {
        setLoading(true)
        // if (!formData.bankName) {
        //     swal("Error!", "Please enter a bank name", "error");
        //     return
        // }
        // if (formData.cardNo.length != 11) {
        //     swal("Error!", "Please enter your card number", "error");
        //     return
        // }
        // if (formData.cvsNo.length != 3) {
        //     swal("Error!", "Please enter your card's cvs number", "error");
        //     return
        // }
        // if (!formData.cardHolderName) {
        //     swal("Error!", "Please enter card holder's name", "error");
        //     return
        // }

        let data = {}
        data.buyerDetails = {}
        data.cartInfo = {}
        data.orderDetails = {}

        data.shippingDetails = shippingDetails
        data.cartItems = cartItems
        data.paymentInfo = formData

        data.cartInfo.totalOrderAmount = totalOrderAmount
        data.cartInfo.cartTotal = cartTotal

        const { payload } = await dispatch(createOrder(data))
        console.log("paymnet", payload)

        if (payload.error) {
            swal({
                title: "Error!",
                icon: "error",
                text: payload.message,
                button: "Ok!",
            });
            setLoading(false)
        }
        else {
            swal({
                title: "Success!",
                icon: "success",
                text: payload.message,
                button: "Ok!",
            });
            dispatch(deleteOrderState())
            dispatch(removeCartItems())
            navigate("/dashboard/orders")
        }
    }

    if (!cartItems[0]) {
        navigate('/cart')
        return <div>loading</div>
    }

    if (!totalOrderAmount) {
        navigate('/checkout/confirmOrder')
        return <div>loading</div>
    }

    return <div style={{ backgroundColor: "white" }}>
        <Container style={{ textAlign: "center", paddingTop: "140px" }} maxWidth="md">
            <Grid container>
                <Grid item lg={5.5} md={5.5} sm={5.5} xs={5} >
                    <Grid container>
                        <Grid item lg={3.5} md={3.5} sm={3.5} xs={3.5}>
                            <LocalShippingIcon sx={{ fontSize: "35px", marginTop: "-10px", color: "rgb(208,13,30)" }} />
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
                            <CheckBoxIcon sx={{ fontSize: "35px", marginTop: "-10px", color: "rgb(208,13,30)" }} />
                            <p>Confirm Order</p>
                        </Grid>
                        <Grid item lg={9} md={9} sm={9} xs={9}>
                            <hr></hr>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1}>
                    <AccountBalanceIcon sx={{ fontSize: "35px", marginTop: "-10px", color: "rgb(208,13,30)" }} />
                    <p >Pay</p>
                </Grid>
            </Grid>
        </Container>

        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "40px" }}>
                <p style={{ fontSize: "25px", textAlign: "center", fontFamily: "Garamond,serif", marginBottom: "-10px" }}><b>PAYMENT METHOD</b></p>
                <Grid container style={{ justifyContent: "center" }}>
                    <Grid item lg={2}>
                        <hr style={{ width: "250px" }}></hr>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Container maxWidth="xs">
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "30px" }} >
                    <Grid container style={{ justifyContent: "center", border: "1px solid lightgray" }} >
                        <Grid item lg={1}>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />}  style={{color:"red"}} />
                                    {/* <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                                </RadioGroup>
                            </FormControl>

                        </Grid>
                        <Grid item lg={2}>
                            <AccountBalanceIcon sx={{ fontSize: "35px", marginTop: "4px", color: "rgb(208,13,30)" }} />
                        </Grid>
                        <Grid item lg={5}>
                            <p className='pay_text'><b>JAZZ CASH</b></p>
                        </Grid>
                    </Grid>



                    <Grid container style={{ justifyContent: "center", border: "1px solid lightgray" ,marginTop:"10px"}} >
                        <Grid item lg={1}>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="females"
                                    name="radio-buttons-groups"
                                >
                                     <FormControlLabel value="jazcash" name="jaz" control={<Radio />}  />
                                </RadioGroup>
                            </FormControl>

                        </Grid>
                        <Grid item lg={2}>
                            <AccountBalanceIcon sx={{ fontSize: "35px", marginTop: "4px", color: "rgb(208,13,30)" }} />
                        </Grid>
                        <Grid item lg={5}>
                            <p className='pay_text'><b>EASY PAISA</b></p>
                        </Grid>
                    </Grid>


                    <Grid container style={{ justifyContent: "center", border: "1px solid lightgray" ,marginTop:"10px"}} >
                        <Grid item lg={1}>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="females"
                                    name="radio-buttons-groups"
                                >
                                     <FormControlLabel value="jazcash" name="jaz" control={<Radio />}  />
                                </RadioGroup>
                            </FormControl>

                        </Grid>
                        <Grid item lg={2}>
                            <AccountBalanceIcon sx={{ fontSize: "35px", marginTop: "4px", color: "rgb(208,13,30)" }} />
                        </Grid>
                        <Grid item lg={5}>
                            <p className='pay_text'><b>BANK ACCOUNT</b></p>
                        </Grid>
                    </Grid>

                    <Grid container style={{ justifyContent: "center", border: "1px solid lightgray" ,marginTop:"10px"}} >
                        <Grid item lg={1}>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="females"
                                    name="radio-buttons-groups"
                                >
                                     <FormControlLabel value="jazcash" name="jaz" control={<Radio />}  />
                                </RadioGroup>
                            </FormControl>

                        </Grid>
                        <Grid item lg={2}>
                            <AccountBalanceIcon sx={{ fontSize: "35px", marginTop: "4px", color: "rgb(208,13,30)" }} />
                        </Grid>
                        <Grid item lg={5}>
                            <p className='pay_text'><b>CASH ON DELIVERY</b></p>
                        </Grid>
                    </Grid>

                    <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "50px" }}>
                        <Button
                            disabled={loading}
                            onClick={handleClick}
                            style={{ backgroundColor: "rgb(208,13,30)", color: "white", width: "200px" }}>Place Order
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div >
}

export default Payment