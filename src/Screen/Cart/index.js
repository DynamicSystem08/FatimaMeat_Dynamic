import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { updateCartItems, removeCartItems } from '../../store/slices/cartSlice'

import swal from 'sweetalert';
import img1 from "../../Image/footerimg.jpg"
import "./index.css"
import { setCartTotal } from '../../store/slices/orderSlice';
import { useEffect } from 'react';

function Cart() {
    const dispatch = useDispatch()
    const reduxCartItems = useSelector(state => state.cartReducer.cart)
    console.log('cart', reduxCartItems)
    let cartTotal = 0
    console.log(cartTotal)

    const navigate = useNavigate()

    const updateQuantity = (key, item, index) => {
        let copyCartItems = [...reduxCartItems]
        let copyData = { ...item }

        console.log(copyData.quantity)

        if (key === "inc") {
            copyData.quantity = copyData.quantity + 1
            copyCartItems[index] = copyData
            dispatch(updateCartItems(copyCartItems))
        }
        if (key === "dec" && copyData.quantity !== 0) {
            copyData.quantity = copyData.quantity - 1
            copyCartItems[index] = copyData
            dispatch(updateCartItems(copyCartItems))
        }
        dispatch(setCartTotal(cartTotal))
    }

    const removeItem = (index) => {
        let copyData = [...reduxCartItems]
        copyData.splice(index, 1)
        dispatch(updateCartItems(copyData))
        dispatch(setCartTotal(cartTotal))
    }

    const handleClick = () => {
        navigate("/checkout/shippingDetails")
        dispatch(setCartTotal(cartTotal))
    }

    return <div style={{ paddingTop: "100px", backgroundColor: "white", marginTop: "30px" }}>
        <Container>
            <Grid container className='card_detail_main'>
                <Grid item lg={4}>
                    <p><b>Product</b></p>
                </Grid>
                <Grid item lg={2}>
                    <p><b>Price</b></p>
                </Grid>
                <Grid item lg={2}>
                    <p><b>Quantity</b></p>
                </Grid>
                <Grid item lg={2}>
                    <p><b>Subtotal</b></p>
                </Grid>
            </Grid>
            {
                reduxCartItems[0] ? reduxCartItems.map((item, index) => {

                    cartTotal = cartTotal + (item.meatType.price * item.quantity)

                    return <Grid container className='card_detail_main1'>
                        <Grid item lg={4}>
                            <Grid container>
                                <Grid item lg={3.5} className="card_deatil_img">
                                    <img src={img1} alt="" />
                                </Grid>
                                <Grid item lg={1}></Grid>
                                <Grid item lg={7}>
                                    <p style={{ fontSize: "15px", paddingTop: "10px" }}>{item.name}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={2}>
                            <p style={{ fontSize: "18px" }}>Rs: {item.meatType.price}</p>
                        </Grid>
                        <Grid item lg={2} className="card_detail_input">
                            {/* <input type="number" placeholder='1' style={{ width: "50%", height: "40px", paddingLeft: "35px" }} /> */}
                            <button onClick={() => updateQuantity("dec", item, index)}
                                style={{ height: "30px", backgroundColor: "rgb(52, 52, 52)", color: "white", cursor: "pointer" }}>-</button>
                            <text style={{ marginLeft: "10px", marginRight: "10px" }}>{item.quantity}</text>
                            <button onClick={() => updateQuantity("inc", item, index)}
                                style={{ height: "30px", backgroundColor: "rgb(52, 52, 52)", color: "white", cursor: "pointer" }}>+</button>
                        </Grid>
                        <Grid item lg={2}>
                            <p style={{ fontSize: "18px" }}>Rs. {item.meatType.price * item.quantity} </p>
                        </Grid>
                        <p style={{ cursor: "pointer" }}
                            onClick={() => {
                                swal({
                                    title: "Are you sure?",
                                    text: "This item will be removed from cart!",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                })
                                    .then((willDelete) => {
                                        if (willDelete) {
                                            removeItem(index)
                                            swal("Item Removed!", {
                                                icon: "success",
                                            });
                                        }
                                    });
                            }}
                        >X</p>
                    </Grid>
                })
                    :
                    <div>Cart Is Empty</div>
            }

            <Grid container>
                <Grid item lg={10}></Grid>
                <Grid item lg={2}>
                    <Button
                        onClick={() => {
                            swal({
                                title: "Are you sure?",
                                text: "All items in the cart will be removed!",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            })
                                .then((willDelete) => {
                                    if (willDelete) {
                                        dispatch(removeCartItems())
                                        dispatch(setCartTotal(cartTotal))
                                        swal("Successfully cleared!", {
                                            icon: "success",
                                        });
                                    }
                                })
                        }}
                        style={{ width: "100%", backgroundColor: "rgb(58,26,15)", color: "white", fontSize: "20px", marginTop: "30px", marginBottom: "30px" }}
                    >CLEAR CART</Button>
                </Grid>
            </Grid>
            <Grid container className='card_detail_main2'>
                <Grid item lg={4}>
                    <p><b>Subtotal</b></p>
                </Grid>
                <Grid item lg={2}>
                    <p>Rs: {cartTotal}</p>
                </Grid>
            </Grid>
            <Grid container className='card_detail_main2' style={{ paddingTop: "40px" }}>
                <Grid item lg={4}>
                    <p><b>TOTAL</b></p>
                </Grid>
                <Grid item lg={2}>
                    <p>Rs: {cartTotal}</p>
                </Grid>
            </Grid>
            {
                reduxCartItems[0] && <Grid container>
                    <Grid item lg={4}>
                        <Button
                            style={{ width: "100%", backgroundColor: "rgb(58,26,15)", color: "white", fontSize: "20px", marginTop: "40px", marginBottom: "30px" }}
                            onClick={handleClick}>PROCEED TO CHECKOUT</Button>
                    </Grid>
                </Grid>
            }

            <Grid container>
                <Grid item lg={3}>
                    <Button
                        onClick={() => navigate('/product')}
                        style={{ width: "100%", backgroundColor: "rgb(58,26,15)", color: "white", fontSize: "20px", marginTop: "20px", marginBottom: "30px" }}>
                        Return To Shop</Button>
                </Grid>
            </Grid>
        </Container>
    </div>
}
export default Cart