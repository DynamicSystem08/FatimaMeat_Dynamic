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

import codIcon from "../../../Image/payicon2.png"
import easypaisaIcon from "../../../Image/payicon3.png"
import jazzcashIcon from "../../../Image/payicon4.png"

import FormHelperText from '@mui/material/FormHelperText';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import "./index.css"

function Payment() {
    // const [expanded, setExpanded] = useState('panel1')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const totalOrderAmount = useSelector(state => state.orderReducer.totalOrderAmount)
    const shippingDetails = useSelector(state => state.orderReducer.shippingDetails)
    // const buyerDetails = useSelector(state => state.userReducer.user)
    const cartItems = useSelector(state => state.cartReducer.cart)
    const cartTotal = useSelector(state => state.orderReducer.cartTotal)

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState();

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleClick = async () => {
        setLoading(true)

        if (value === 'jazzcash' || value === 'easypaisa' || value === 'bank') {
            setHelperText('Sorry, only cash on delivery is available right now!');
            setError(true);
            setLoading(false)
            return
        }
        else if (!value) {
            setHelperText('Please select an option.');
            setError(true);
            setLoading(false)
            return
        }

        let data = {}
        data.buyerDetails = {}
        data.cartInfo = {}
        data.orderDetails = {}

        data.shippingDetails = shippingDetails
        data.cartItems = cartItems
        data.paymentInfo = { paymentMethod: value }

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

    return <div className="slider_bg_icon">
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
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="cod"
                            name="radio-buttons-group"
                            value={value}
                            onChange={handleRadioChange}
                        >

                            <Grid container style={{ justifyContent: "center", border: "1px solid lightgray", marginTop: "10px" }} >
                                <Grid item lg={1} md={1} sm={1} xs={1.5}>
                                    <FormControlLabel value="jazzcash" name="jazzcash" control={<Radio />} />
                                </Grid>
                                <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} className="payicon">
                                    <img src={jazzcashIcon} alt="" />
                                </Grid>
                                <Grid item lg={5} md={5} sm={5} xs={5}>
                                    <p className='pay_text'><b>JAZZ CASH</b></p>
                                </Grid>
                            </Grid>

                            <Grid container style={{ justifyContent: "center", border: "1px solid lightgray", marginTop: "10px" }} >
                                <Grid item lg={1} md={1} sm={1} xs={1.5}>
                                    <FormControlLabel value="easypaisa" name="easypaisa" control={<Radio />} />
                                </Grid>
                                <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} className="payicon">
                                    <img src={easypaisaIcon} alt="" />
                                </Grid>
                                <Grid item lg={5} md={5} sm={5} xs={5}>
                                    <p className='pay_text'><b>EASY PAISA</b></p>
                                </Grid>
                            </Grid>

                            <Grid container style={{ justifyContent: "center", border: "1px solid lightgray", marginTop: "10px" }} >
                                <Grid item lg={1} md={1} sm={1} xs={1.5}>
                                    <FormControlLabel value="bank" name="bank" control={<Radio />} />
                                </Grid>
                                <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} className="payicon">
                                    <AccountBalanceIcon sx={{ fontSize: "35px", marginTop: "4px", color: "rgb(208,13,30)" }} />
                                </Grid>
                                <Grid item lg={5} md={5} sm={5} xs={5}>
                                    <p className='pay_text'><b>BANK ACCOUNT</b></p>
                                </Grid>
                            </Grid>

                            <Grid container style={{ justifyContent: "center", border: "1px solid lightgray", marginTop: "10px" }} >
                                <Grid item lg={1} md={1} sm={1} xs={1.5}>
                                    <FormControlLabel value="cod" name="cod" control={<Radio />} />
                                </Grid>
                                <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} className="payicon">
                                    <img src={codIcon} alt="" />
                                </Grid>
                                <Grid item lg={5} md={5} sm={5} xs={5}>
                                    <p className='pay_text'><b>CASH ON DELIVERY</b></p>
                                </Grid>
                            </Grid>
                            <FormHelperText>{helperText}</FormHelperText>
                            <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "50px" }}>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    onClick={handleClick}
                                    style={{ backgroundColor: "rgb(208,13,30)", color: "white", width: "200px" }}>Place Order
                                </Button>
                            </div>
                        </RadioGroup>
                    </FormControl>


                </Grid>
            </Grid>
        </Container>
    </div >
}

export default Payment