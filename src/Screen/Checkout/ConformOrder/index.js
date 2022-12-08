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
    console.log(details)
    const cartItems = useSelector(state => state.cartReducer.cart)
    console.log(cartItems)
    const cartTotal = useSelector(state => state.orderReducer.cartTotal)
    console.log(cartTotal)

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

    // if (!cartItems) {
    //     navigate('/cart')
    //     return <div>loading</div>
    // }

    // if (!details) {
    //     navigate('/cart')
    //     return <div>loading</div>
    // }

    const shippingCharges = 100
    const gst = 300
    const totalAmmount = cartTotal + shippingCharges + gst


    return <div style={{ paddingBottom: "50px", backgroundColor: "white" }}>
        <Container style={{ textAlign: "center", paddingTop: "140px" }} maxWidth="md">
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
                            <CheckBoxIcon sx={{ fontSize: "35px", marginTop: "-10px", color: "rgb(58,26,15)" }} />
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

        </Container>

        <Container maxWidth="lg">
            <Grid container>
                <Grid item lg={8} md={8} sm={6} xs={12} style={{ marginTop: "30px" }}>
                    <h3 style={{ fontSize: "25px" }}>Shipping Info</h3>
                    <p style={{ marginLeft: "20px" }}><b>Name:</b>Bilal
                        {/* {details.name} */}
                    </p>
                    <p style={{ marginLeft: "20px" }}><b>Phone:</b> 0314-5838753
                        {/* {details.phoneNumber} */}

                    </p>
                    <p style={{ marginLeft: "20px" }}><b>City:</b>Karachi
                        {/* {details.city} */}
                    </p>
                    <p style={{ marginLeft: "20px" }}><b>Adress:</b> Surjani Town Karachi
                        {/* {details.address} */}
                    </p>

                    {/* yahn map cahala hai */}
                    <h3 style={{ fontSize: "25px", marginTop: "50px" }}>Your Cart Items:</h3>
                    {/* {cartItems.map((item, index) => { */}

                    {/* return <div key={index}> */}
                    <Grid container style={{ marginTop: "50px", marginLeft: "30px" }}>
                        <Grid item lg={2} className="confirm_order_img" >
                            <img src={img14} />
                        </Grid>
                        <Grid item lg={2} md={7} sm={5} xs={5} className="confirm_Order_text" >
                            {/* <p>{item.title}{" ("}x{item.quantity}{")"}</p> */}
                            <p>Bilal Hussain</p>
                        </Grid>
                        {/* <Grid item lg={2} md={5} sm={5} xs={5} >
                                    <p>X{item.quantity}</p>
                                </Grid> */}
                        <Grid item lg={6} style={{ textAlign: "end" }}>
                            {/* <p>Rs. {item.price} </p> */}
                        </Grid>
                    </Grid>
                    {/* </div> */}
                    {/* })} */}

                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12} style={{ borderLeft: "1px solid black" }}>
                    <h3 style={{ fontSize: "25px", textAlign: "center", marginTop: "50px" }}>Order Summery</h3>
                    <hr style={{ width: "300px" }}></hr>
                    <Grid container>
                        <Grid item lg={6} md={5} sm={3} xs={7} style={{ marginLeft: "50px" }}>
                            <p>Subtotal:</p>
                            <p>Shipping Charges:</p>
                            <p>GST:</p>
                        </Grid>
                        <Grid item lg={2}>
                            <p>Rs:1000</p>
                            <p>Rs:400</p>
                            <p>Rs:5000</p>
                            {/* <p>Rs. {cartTotal}</p>
                            <p>Rs. {shippingCharges}</p>
                            <p>Rs. {gst}</p> */}
                        </Grid>
                    </Grid>
                    <hr style={{ width: "300px" }}></hr>

                    <Grid container style={{ marginTop: "50px" }}>
                        <Grid item lg={6} md={8} sm={6} xs={7} style={{ marginLeft: "50px" }}>
                            <b>Total:</b>
                        </Grid>
                        <Grid item lg={2}>
                            <b>Rs:6000</b>
                            {/* <b>Rs. {totalAmmount}</b> */}
                        </Grid>
                    </Grid>
                    <div style={{ textAlign: "center", marginTop: "30px" }}>
                        <Button onClick={handleClick} style={{ backgroundColor: "rgb(58,26,15)", color: "white", width: "200px" }}>Proceed To Payment</Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div>
}

export default ConfirmOrder