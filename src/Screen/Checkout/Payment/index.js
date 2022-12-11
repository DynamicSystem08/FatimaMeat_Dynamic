import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { createOrder, deleteOrderState } from '../../../store/slices/orderSlice'

// import { clearEntireCart } from '../../../store/slices/productSlice'


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


function Payment() {
    const [expanded, setExpanded] = useState('panel1')

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const totalOrderAmount = useSelector(state => state.orderReducer.totalOrderAmount)
    const shippingDetails = useSelector(state => state.orderReducer.shippingDetails)
    // const buyerDetails = useSelector(state => state.userReducer.user)
    const cartItems = useSelector(state => state.cartReducer.cart)
    const cartTotal = useSelector(state => state.orderReducer.cartTotal)

    const [formData, setFormData] = useState({
        paymentMethod: "cash",
        bankName: "COD",
        cardHolderName: "Nabeel",
        cardNo: "12345678912",
        cvsNo: "123"
    })

    const handelChange = (key, value) => {
        setFormData({ ...formData, [key]: value })
    }

    const handleClick = async () => {
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

        data.shippingDetails = shippingDetails
        data.buyerDetails = {}
        data.cartItems = cartItems
        data.paymentInfo = formData

        data.cartInfo = {}
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
        }
        else {
            swal({
                title: "Success!",
                icon: "success",
                text: payload.message,
                button: "Ok!",
            });
        }

        // dispatch(deleteOrderState())
        // dispatch(clearEntireCart())

        // swal({
        //     title: "Success!",
        //     text: "Your order has been placed!",
        //     icon: "success",
        //     button: "Ok!",
        // });
        // navigate("/home")
    }

    return <div style={{ backgroundColor: "white" }}>
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
                    <AccountBalanceIcon sx={{ fontSize: "35px", marginTop: "-10px", color: "rgb(25,25,25)" }} />
                    <p >Payment</p>
                </Grid>
            </Grid>
        </Container>

        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "40px" }}>
                <p style={{ fontSize: "25px", textAlign: "center",fontFamily:"Garamond,serif",marginBottom:"-10px" }}><b>PAYMENT METHOD</b></p>
                <Grid container style={{ justifyContent: "center" }}>
                    <Grid item lg={2}>
                        <hr style={{ width: "250px" }}></hr>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Container maxWidth="xs">
            <Grid container>
                <Grid item lg={12} style={{ marginTop: "30px" }}>

                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" onClick={() => handelChange('bankName', 'easypaisa')} >
                            <Typography >Easy Paisa</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <input type="text" onChange={e => handelChange('cardNo', e.target.value)}
                                    style={{ border: "none", outline: "none", borderBottom: "1px solid gray" }} placeholder="Card Num" /><br></br><br></br>
                                <input type="text" onChange={e => handelChange('cvsNo', e.target.value)}
                                    style={{ border: "none", outline: "none", borderBottom: "1px solid gray" }} placeholder="CVS No" /><br></br><br></br>
                                <input type="text" onChange={e => handelChange('cardHolderName', e.target.value)}
                                    style={{ border: "none", outline: "none", borderBottom: "1px solid gray" }} placeholder="Card Holder Name" /><br></br>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" onClick={() => handelChange('bankName', 'jazzcash')}>
                            <Typography>Jazz Cash</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <input type="text" onChange={e => handelChange('cardNo', e.target.value)}
                                    style={{ border: "none", outline: "none", borderBottom: "1px solid gray" }} placeholder="Card Num" /><br></br><br></br>
                                <input type="text" onChange={e => handelChange('cvsNo', e.target.value)}
                                    style={{ border: "none", outline: "none", borderBottom: "1px solid gray" }} placeholder="CVS No" /><br></br><br></br>
                                <input type="text" onChange={e => handelChange('cardHolderName', e.target.value)}
                                    style={{ border: "none", outline: "none", borderBottom: "1px solid gray" }} placeholder="Card Holder Name" /><br></br>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" onClick={() => handelChange('bankName', '')}>
                            <Typography>Bank Account</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <input type="text" onChange={e => handelChange('bankName', e.target.value)}
                                    style={{ border: "none", outline: "none", borderBottom: "1px solid gray" }} placeholder="Bank Name" /><br></br><br></br>
                                <input type="text" onChange={e => handelChange('cardNo', e.target.value)}
                                    style={{ border: "none", outline: "none", borderBottom: "1px solid gray" }} placeholder="Card Num" /><br></br><br></br>
                                <input type="text" onChange={e => handelChange('cvsNo', e.target.value)}
                                    style={{ border: "none", outline: "none", borderBottom: "1px solid gray" }} placeholder="CVS No" /><br></br><br></br>
                                <input type="text" onChange={e => handelChange('cardHolderName', e.target.value)}
                                    style={{ border: "none", outline: "none", borderBottom: "1px solid gray" }} placeholder="Card Holder Name" /><br></br>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <div style={{ textAlign: "center", marginTop: "30px", width: "400px", marginBottom: "50px" }}>
                        <Button onClick={handleClick}
                            style={{ backgroundColor: "rgb(208,13,30)", color: "white", width: "200px" }}>Pay
                            {/* {totalOrderAmount} */}
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div >
}

export default Payment