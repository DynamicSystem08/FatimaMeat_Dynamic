import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Button from '@mui/material/Button';
import img14 from "../../../Image/ourRecipes1.jpg"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setBillAmount } from '../../../store/slices/orderSlice'

import "./index.css"

function ConfirmOrder() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const details = useSelector(state => state.orderReducer.shippingDetails)
    const cartItems = useSelector(state => state.cartReducer.cart)
    const cartTotal = useSelector(state => state.orderReducer.cartTotal)

    const handleClick = () => {
        dispatch(setBillAmount(totalAmmount))
        navigate('/checkout/payment')
    }

    // if (!details) {
    //     navigate('/checkout/shippingDetails')
    //     return <div>loading</div>
    // }

    // if (!cartTotal) {
    //     navigate('/cart')
    //     return <div>loading</div>
    // }

    if (!cartItems[0]) {
        navigate('/cart')
        return <div>loading</div>
    }

    // if (!details) {
    //     navigate('/cart')
    //     return <div>loading</div>
    // }

    const shippingCharges = 100
    const gst = cartTotal * 0.17
    const totalAmmount = cartTotal + shippingCharges + gst


    return <div style={{ paddingBottom: "50px", backgroundColor: "white" }}>
        <Container style={{ textAlign: "center", paddingTop: "140px" }} maxWidth="md">
            <Grid container>
                <Grid item lg={5.5} md={5.5} sm={5.5} xs={5.5} >
                    <Grid container>
                        <Grid item lg={3.5} md={3.5} sm={3.5} xs={3.5}>
                            <LocalShippingIcon sx={{ fontSize: "35px", marginTop: "-10px", color: "rgb(25,25,25)" }} />
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
                            <CheckBoxIcon sx={{ fontSize: "35px", marginTop: "-10px", color: "rgb(25,25,25)" }} />
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

        <Container maxWidth="lg">
            <Grid container>
                <Grid item lg={8} md={8} sm={6} xs={12} style={{ marginTop: "30px" }}>
                    <h3 style={{ fontSize: "25px", fontFamily: "Garamond,serif", marginBottom: "20px" }}><b>Shipping Info</b></h3>
                    <p style={{ marginLeft: "20px" }}><b>Name: </b>
                        {details.name}
                    </p>
                    <p style={{ marginLeft: "20px" }}><b>Phone: </b>
                        {details.phoneNumber}
                    </p>
                    <p style={{ marginLeft: "20px" }}><b>City: </b>
                        {details.city}
                    </p>
                    <p style={{ marginLeft: "20px" }}><b>Adress: </b>
                        {details.address}
                    </p>

                    <h3 style={{ fontSize: "25px", marginTop: "50px", fontFamily: "Garamond,serif" }}><b>Your Cart Items:</b></h3>
                    {cartItems.map((item, index) => {
                        return <div key={index}>
                            <Grid container style={{ marginTop: "50px", marginLeft: "30px" }}>
                                <Grid item lg={2} md={2} sm={2.5} xs={2.5} className="confirm_order_img" >
                                    <img src={item.meatType.img} />
                                </Grid>
                                <Grid item lg={2} md={2.3} sm={3.5} xs={3} className="confirm_Order_text" >
                                    <p>{item.name}
                                    {/* {" ("}x{item.quantity}{")"} */}
                                    </p>
                                </Grid>
                                <Grid item lg={1} md={5} sm={3} xs={3} style={{ marginTop: "20px" }}>
                                    <p>X{item.quantity}</p>
                                </Grid>
                                <Grid item lg={6} sm={1.5} style={{ textAlign: "end", marginTop: "20px" }} >
                                    <p>Rs. {item.meatType.price} </p>
                                </Grid>
                            </Grid>
                        </div>
                    })}

                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12} style={{ borderLeft: "1px solid black" }}>
                    <h3 style={{ fontSize: "25px", marginLeft: "10px", marginTop: "50px", fontFamily: "Garamond,serif" }}><b>Order Summery</b></h3>
                    <hr style={{ width: "300px" }}></hr>
                    <Grid container>
                        <Grid item lg={6} md={5} sm={3} xs={7} style={{ marginLeft: "50px" }}>
                            <p>Subtotal:</p>
                            <p>Shipping Charges:</p>
                            <p>17% GST:</p>
                        </Grid>
                        <Grid item lg={2}>
                            <p>Rs. {cartTotal}</p>
                            <p>Rs. {shippingCharges}</p>
                            <p>Rs. {gst}</p>
                        </Grid>
                    </Grid>
                    <hr style={{ width: "300px" }}></hr>

                    <Grid container style={{ marginTop: "50px" }}>
                        <Grid item lg={6} md={8} sm={6} xs={7} style={{ marginLeft: "50px" }}>
                            <b>Total:</b>
                        </Grid>
                        <Grid item lg={2}>
                            <b>Rs. {totalAmmount}</b>
                        </Grid>
                    </Grid>
                    <div style={{ textAlign: "center", marginTop: "30px" }}>
                        <Button onClick={handleClick} style={{ backgroundColor: "rgb(208,13,30)", color: "white", width: "200px" }}>Proceed To Payment</Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div>
}

export default ConfirmOrder