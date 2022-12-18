import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { updateCartItems, removeCartItems } from '../../store/slices/cartSlice'

import MetaData from '../../Component/MetaData';

import swal from 'sweetalert';
import img1 from "../../Image/footerimg.jpg"
import "./index.css"
import { setCartTotal } from '../../store/slices/orderSlice';

function Cart() {
    const dispatch = useDispatch()
    const reduxCartItems = useSelector(state => state.cartReducer.cart)
    let cartTotal = 0

    const navigate = useNavigate()

    const updateQuantity = (key, item, index) => {
        let copyCartItems = [...reduxCartItems]
        let copyData = { ...item }

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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <div style={{ paddingTop: "100px", backgroundColor: "white", marginTop: "30px" }} className="slider_bg_icon">
        <MetaData title="Fatima Meat | Cart" />
        
        <Container>
            <div className='Scroll_card'>
                <Grid container className='card_detail_main'>
                    <Grid item lg={3.5} md={3.5} sm={3} xs={2} className="card_text101" >
                        <p><b>Product</b></p>
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={1.5} className="card_text101">
                        <p><b>Price</b></p>
                    </Grid>
                    <Grid item lg={2} md={1.8} sm={1.8} xs={2.5} className="card_text101">
                        <p><b>Quantity</b></p>
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={2.3} className="card_text101">
                        <p><b>Subtotal</b></p>
                    </Grid>

                </Grid>
                {
                    reduxCartItems[0] ? reduxCartItems.map((item, index) => {

                        cartTotal = cartTotal + (item.meatType.price * item.quantity)

                        return <Grid container className='card_detail_main1'>
                            <Grid item lg={4} md={4} sm={3.5} xs={2}>
                                <Grid container>
                                    <Grid item lg={3.5} md={3.5} sm={3.5} xs={12} className="card_deatil_img">
                                        <img src={item.meatType.img} alt="" />
                                    </Grid>
                                    <Grid item lg={1} md={1} sm={1} ></Grid>
                                    <Grid item lg={7} md={7} sm={7} xs={12}>
                                        <p style={{ fontSize: "15px", paddingTop: "10px" }}>{item.name}</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={1.5} className="card_text102">
                                <p>Rs: {item.meatType.price}</p>
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2.8} className="card_detail_input">
                                {/* <input type="number" placeholder='1' style={{ width: "50%", height: "40px", paddingLeft: "35px" }} /> */}
                                <button onClick={() => updateQuantity("dec", item, index)}
                                    style={{ height: "30px", backgroundColor: "rgb(208,16,30)", color: "white", cursor: "pointer" }}>-</button>
                                <text style={{ marginLeft: "10px", marginRight: "10px" }}>{item.quantity}</text>
                                <button onClick={() => updateQuantity("inc", item, index)}
                                    style={{ height: "30px", backgroundColor: "rgb(208,16,30)", color: "white", cursor: "pointer" }}>+</button>
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={1} className="card_text103">
                                <p >Rs. {item.meatType.price * item.quantity} </p>
                            </Grid>
                            <p style={{ cursor: "pointer", color: "rgb(208,16,15)" }}
                                className="card_text104"
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
                        <Grid container className='card_detail_main1'>
                            <h5>Cart Is Empty</h5>
                        </Grid>

                }
            </div>

            <Grid container>
                <Grid item lg={10} md={10} sm={9} xs={6}></Grid>
                <Grid item lg={2} md={2} sm={3} xs={6}>
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
                        style={{ width: "100%", backgroundColor: "rgb(208,16,30)", color: "white", fontSize: "20px", marginTop: "30px", marginBottom: "30px" }}
                    >CLEAR CART</Button>
                </Grid>
            </Grid>
            <Grid container className='card_detail_main2'>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <p><b>Subtotal</b></p>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={4}>
                    <p>Rs: {cartTotal}</p>
                </Grid>
            </Grid>
            <Grid container className='card_detail_main2' style={{ paddingTop: "40px" }}>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <p><b>TOTAL</b></p>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={3}>
                    <p>Rs: {cartTotal}</p>
                </Grid>
            </Grid>
            {
                reduxCartItems[0] && <Grid container>
                    <Grid item lg={4} md={4} sm={5} xs={10}>
                        <Button
                            style={{ width: "100%", backgroundColor: "rgb(208,16,30)", color: "white", fontSize: "20px", marginTop: "40px", marginBottom: "30px" }}
                            onClick={handleClick}>PROCEED TO CHECKOUT</Button>
                    </Grid>
                </Grid>
            }

            <Grid container>
                <Grid item lg={3} md={3} sm={3} xs={8}>
                    <Button
                        onClick={() => navigate('/product')}
                        style={{ width: "100%", backgroundColor: "rgb(208,16,30)", color: "white", fontSize: "20px", marginTop: "20px", marginBottom: "30px" }}>
                        Return To Shop</Button>
                </Grid>
            </Grid>
        </Container>

    </div>
}
export default Cart