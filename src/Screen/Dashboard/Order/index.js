import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

import swal from 'sweetalert';

import { signOutUser } from '../../../config/firebase'
import { fetchOrders } from '../../../store/slices/orderSlice';
import "./index.css"
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../store/slices/userSlice';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Dashboard() {


    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Order Id', 159, 6.0, 24, 4.0),
        createData('Customer Name', 237, 9.0, 37, 4.3),
        createData('Delivery Address', 262, 16.0, 24, 6.0),
        createData('Order Item', 305, 3.7, 67, 4.3),
        createData('Order Date', 356, 16.0, 49, 3.9),
    ];


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [screen, setScreen] = useState()

    const reduxAllOrders = useSelector(state => state.orderReducer.allOrders)
    console.log("Dashboard reduxAllOrders", reduxAllOrders)
    const reduxUser = useSelector(state => state.userReducer.user)
    console.log(reduxUser)

    const callData = async () => {
        const result = await dispatch(fetchOrders())
    }
    
    const callCurentUserOrders = async () => {
        const result = await dispatch(fetchOrders())
    }
    
    useEffect(() => {
        if (reduxUser.email == "admin@fatimameat.com") {
            console.log("admin")
            callData()
        }
        else{
            callCurentUserOrders()
        }
    }, [])

    return <div style={{ backgroundColor: "white" }}>
        <Container style={{ paddingTop: "140px", paddingBottom: "50px" }}>
            <Grid container>
                <Grid item lg={3} style={{ padding: "20px" }} className="side_bar_dashboadr">
                    <h2><b>My Account</b></h2>
                    <hr></hr><br></br>
                    <p onClick={() => navigate("/dashboard")}>Dashboard</p><br></br>
                    <p >Orders</p><br></br>
                    <p onClick={() => navigate("/myAccount")}>Account Details</p><br></br>
                    <p
                        onClick={() => {
                            swal({
                                title: "Are you sure?",
                                text: "You will be logged out!",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            })
                                .then((willDelete) => {
                                    if (willDelete) {
                                        signOutUser().then(
                                            dispatch(logoutUser())
                                        ).catch(e => console.log(e))
                                        swal("Logout Successful!", {
                                            icon: "success",
                                        });
                                    }
                                });
                        }}
                    >Logout</p><br></br>
                </Grid>
                <Grid item lg={1}></Grid>


                <Grid item lg={8}  xs={12} style={{ paddingTop: "50px" }}>
                    {/* <Grid container style={{ justifyContent: "center", marginBottom: "20px" }}>
                        <Grid item lg={2} >
                            <h5>Order Id</h5>
                        </Grid>
                        <Grid item lg={3}>
                            <h5>Customer Name</h5>
                        </Grid>
                        <Grid item lg={3}>
                            <h5>Dilevery Address</h5>
                        </Grid>
                        <Grid item lg={2}>
                            <h5>Order Item</h5>
                        </Grid>
                        <Grid item lg={2}>
                            <h5>Order Date</h5>
                        </Grid>
                    </Grid> */}


                    <TableContainer component={Paper} sx={{ maxHeight: 270, minHeight: 270 ,maxWidth:700,minWidth:300}}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader >
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Order Id</b></TableCell>
                                    <TableCell align="right"><b>Customer Name</b></TableCell>
                                    <TableCell align="right"><b>Delivery Address</b></TableCell>
                                    <TableCell align="right"><b>Order Item</b></TableCell>
                                    <TableCell align="right"><b>Order Date</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center">{row.calories}</TableCell>
                                        <TableCell align="center">{row.fat}</TableCell>
                                        <TableCell align="center">{row.carbs}</TableCell>
                                        <TableCell align="center">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* {reduxAllOrders ? reduxAllOrders.map((item) => {
                        return <div>
                            <Grid container style={{ justifyContent: "center" }}>
                                <Grid item lg={2} >
                                    <p> {item.orderId} </p>
                                </Grid>
                                <Grid item lg={3}>
                                    <p> {item.CustomerName} </p>

                                </Grid>
                                <Grid item lg={3}>
                                    <p> {item.orderId} </p>

                                </Grid>
                                <Grid item lg={2}>
                                    <p> {item.orderNumber} </p>

                                </Grid>
                                <Grid item lg={2}>
                                    <p> {item.orderDate} </p>

                                </Grid>
                            </Grid>
                        </div>
                    })
                        :
                        <div>No Data Found</div>
                    } */}
                </Grid>


            </Grid>
        </Container>
    </div>
}
export default Dashboard