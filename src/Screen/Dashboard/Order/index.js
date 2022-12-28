import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';

import swal from 'sweetalert';

import { signOutUser, cancelOrder, markCompletedOrder, markPendingOrder } from '../../../config/firebase'
import { fetchOrders, fetchCurrentUserOrders } from '../../../store/slices/orderSlice';
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
import Button from '@mui/material/Button';

function Dashboard() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [data, setData] = useState()

    const reduxOrders = useSelector(state => state.orderReducer.allOrders)
    const reduxUser = useSelector(state => state.userReducer.user)

    const callData = async () => {
        await dispatch(fetchOrders())
    }

    const callCurentUserOrders = async () => {
        await dispatch(fetchCurrentUserOrders(reduxUser.uid))
    }

    useEffect(() => {
        if (reduxUser.email == "admin@fatimameat.com") {
            callData()
        }
        else {
            callCurentUserOrders()
        }
    }, [data])

    if (!reduxUser) {
        return
    }

    if (reduxOrders == "undefined") {
        return <div>loading</div>
    }

    return <div div className="slider_bg_icon">
        <Container style={{ paddingTop: "140px", paddingBottom: "50px" }}>
            <Grid container>
                <Grid item lg={3} md={3.5} sm={4} xs={12} style={{ padding: "20px", backgroundColor: "white" }} className="side_bar_dashboadr">
                    <h2><b>My Account</b></h2>
                    <hr></hr><br></br>
                    <p onClick={() => navigate("/dashboard")}>Dashboard</p><br></br>
                    <p >Orders</p><br></br>
                    <p onClick={() => navigate("/dashboard/account-details")}>Account Details</p><br></br>
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
                <Grid item lg={0.5} md={1} sm={1}></Grid>


                <Grid item lg={8.5} md={7} sm={7} xs={12} style={{ paddingTop: "50px" }}>

                    {
                        reduxOrders ?
                            <Paper sx={{ width: '100%', overflow: 'hidden' }}>

                                <TableContainer component={Paper} sx={{ maxHeight: 300, minHeight: 300, maxWidth: 1100, minWidth: 300 }}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>

                                            {/* <TableRow>
                                                {reduxOrders.map((row) => (
                                                    <TableCell
                                                        key={row.id}
                                                        align={row.align}
                                                        style={{ minWidth: row.minWidth, fontWeight: 700 }}
                                                    >
                                                        {row.label}
                                                    </TableCell>
                                                ))}

                                            </TableRow> */}
                                            <TableRow>
                                                <TableCell><b>Order Id</b></TableCell>
                                                <TableCell align="center" style={{ width: "12%" }}><b>Customer Name</b></TableCell>
                                                <TableCell align="center" style={{ width: "12%" }}><b>Delivery City</b></TableCell>
                                                <TableCell align="center" style={{ width: "12%" }}><b>Delivery Address</b></TableCell>
                                                <TableCell align="center" style={{ width: "12%" }}><b>Ordered Items</b></TableCell>
                                                <TableCell align="center" style={{ width: "12%" }}><b>Cart Total</b></TableCell>
                                                <TableCell align="center" style={{ width: "12%" }}><b>Order Date</b></TableCell>
                                                <TableCell align="center"><b>Order Status</b></TableCell>
                                                <TableCell align="center"><b>Order Actions</b></TableCell>
                                            </TableRow>


                                        </TableHead>
                                        <TableBody>

                                            {reduxOrders && (
                                                <>{reduxOrders
                                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                                                    .map((row) => (
                                                        <TableRow
                                                            key={row}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {row.orderDetails.orderId}
                                                            </TableCell>
                                                            <TableCell align="center">{row.buyerDetails.displayName}</TableCell>
                                                            <TableCell align="center">{row.shippingDetails.city}</TableCell>
                                                            <TableCell align="center">{row.shippingDetails.address}</TableCell>
                                                            <TableBody>
                                                                <TableRow

                                                                >
                                                                    {
                                                                        row.cartItems.map((item, index) => {
                                                                            console.log(item)
                                                                            return <div key={index}>
                                                                                {item.name}-{item.meatType.type}-x{item.quantity}
                                                                            </div >
                                                                        })
                                                                    }
                                                                </TableRow>
                                                            </TableBody>
                                                            <TableCell align="center">{row.cartInfo.totalOrderAmount}</TableCell>

                                                            <TableCell align="center">{row.orderDetails.orderDateTime}</TableCell>
                                                            <TableCell align="center">{row.orderDetails.orderStatus}</TableCell>
                                                            {
                                                                reduxUser.email === "admin@fatimameat.com" ?
                                                                    <TableCell align="center">
                                                                        <Button
                                                                            onClick={() => {
                                                                                swal({
                                                                                    title: "Are you sure you want to mark as completed?",
                                                                                    text: "This action is reversable!",
                                                                                    icon: "warning",
                                                                                    buttons: true,
                                                                                    dangerMode: true,
                                                                                })
                                                                                    .then((willDelete) => {
                                                                                        if (willDelete) {
                                                                                            markCompletedOrder(row.docId, row.orderDetails)
                                                                                                .then((data) => {
                                                                                                    swal("Order marked as completed", {
                                                                                                        icon: "success",
                                                                                                    });
                                                                                                    setData(data)
                                                                                                })
                                                                                                .catch(e => console.log(e))
                                                                                        }
                                                                                    });
                                                                            }
                                                                            }
                                                                        >Mark Completed</Button>
                                                                        <Button
                                                                            onClick={() => {
                                                                                swal({
                                                                                    title: "Are you sure you want to mark as pending?",
                                                                                    text: "This action is reversable!",
                                                                                    icon: "warning",
                                                                                    buttons: true,
                                                                                    dangerMode: true,
                                                                                })
                                                                                    .then((willDelete) => {
                                                                                        if (willDelete) {
                                                                                            markPendingOrder(row.docId, row.orderDetails)
                                                                                                .then((data) => {
                                                                                                    swal("Order marked as pending", {
                                                                                                        icon: "success",
                                                                                                    });
                                                                                                    setData(data)
                                                                                                })
                                                                                                .catch(e => console.log(e))
                                                                                        }
                                                                                    });
                                                                            }
                                                                            }
                                                                        >Mark Pending</Button>
                                                                    </TableCell>
                                                                    :
                                                                    <div>
                                                                        {
                                                                            row.docUpdate && <TableCell align="center">
                                                                                <Button
                                                                                    onClick={() => {
                                                                                        swal({
                                                                                            title: "Are you sure you want to cancel your order?",
                                                                                            text: "This action is irreversable!",
                                                                                            icon: "warning",
                                                                                            buttons: true,
                                                                                            dangerMode: true,
                                                                                        })
                                                                                            .then((willDelete) => {
                                                                                                if (willDelete) {
                                                                                                    cancelOrder(row.docId)
                                                                                                    swal("Order cancelled", {
                                                                                                        icon: "success",
                                                                                                    });
                                                                                                    window.location.reload()
                                                                                                }
                                                                                            });
                                                                                    }
                                                                                    }
                                                                                >Cancel</Button>
                                                                            </TableCell>
                                                                        }
                                                                    </div>
                                                            }


                                                            {/* <TableCell component="th" scope="row">
                                                                {row.accountcode3}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {row.accountlevel3Code}

                                                            </TableCell>

                                                            <TableCell align="center">{row.accountlevel3Description}</TableCell>
                                                            <TableCell align="center">{row.accountdescription}</TableCell>
                                                            <TableCell align="center">{row.accountStatus}</TableCell> */}
                                                        </TableRow>
                                                    ))}
                                                </>)}

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={reduxOrders && reduxOrders.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </Paper>

                            // <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            //     <TableContainer component={Paper} sx={{ maxHeight: 270, minHeight: 270, minWidth: 300 }}>
                            //         <Table sx={{ minWidth: 1400 }} aria-label="simple table" stickyHeader >
                            //             <TableHead>
                            //                 <TableRow>
                            //                     <TableCell><b>Order Id</b></TableCell>
                            //                     <TableCell align="center" style={{ width: "12%" }}><b>Customer Name</b></TableCell>
                            //                     <TableCell align="center" style={{ width: "12%" }}><b>Delivery City</b></TableCell>
                            //                     <TableCell align="center" style={{ width: "12%" }}><b>Delivery Address</b></TableCell>
                            //                     <TableCell align="center" style={{ width: "12%" }}><b>Ordered Items</b></TableCell>
                            //                     <TableCell align="center" style={{ width: "12%" }}><b>Cart Total</b></TableCell>
                            //                     <TableCell align="center" style={{ width: "12%" }}><b>Order Date</b></TableCell>
                            //                     <TableCell align="center"><b>Order Status</b></TableCell>
                            //                     <TableCell align="center"><b>Order Actions</b></TableCell>
                            //                 </TableRow>
                            //             </TableHead>
                            //             <TableBody>
                            //                 {reduxOrders[0] && reduxOrders.map((row) => (
                            //                     <TableRow
                            //                         key={row.orderDetails.orderId}
                            //                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            //                     >
                            //                         <TableCell component="th" scope="row">
                            //                             {row.orderDetails.orderId}
                            //                         </TableCell>
                            //                         <TableCell align="center">{row.buyerDetails.displayName}</TableCell>
                            //                         <TableCell align="center">{row.shippingDetails.city}</TableCell>
                            //                         <TableCell align="center">{row.shippingDetails.address}</TableCell>

                            //                         <TableBody>
                            //                             <TableRow

                            //                             >
                            //                                 {
                            //                                     row.cartItems.map((item, index) => {
                            //                                         console.log(item)
                            //                                         return <div key={index}>
                            //                                             {item.name}-{item.meatType.type}-x{item.quantity}
                            //                                         </div >
                            //                                     })
                            //                                 }
                            //                             </TableRow>
                            //                         </TableBody>

                            //                         <TableCell align="center">{row.cartInfo.totalOrderAmount}</TableCell>

                            //                         <TableCell align="center">{row.orderDetails.orderDateTime}</TableCell>
                            //                         <TableCell align="center">{row.orderDetails.orderStatus}</TableCell>
                            //                         {
                            //                             reduxUser.email === "admin@fatimameat.com" ?
                            //                                 <TableCell align="center">
                            //                                     <Button
                            //                                         onClick={() => {
                            //                                             swal({
                            //                                                 title: "Are you sure you want to mark as completed?",
                            //                                                 text: "This action is reversable!",
                            //                                                 icon: "warning",
                            //                                                 buttons: true,
                            //                                                 dangerMode: true,
                            //                                             })
                            //                                                 .then((willDelete) => {
                            //                                                     if (willDelete) {
                            //                                                         markCompletedOrder(row.docId, row.orderDetails)
                            //                                                             .then((data) => {
                            //                                                                 swal("Order marked as completed", {
                            //                                                                     icon: "success",
                            //                                                                 });
                            //                                                                 setData(data)
                            //                                                             })
                            //                                                             .catch(e => console.log(e))
                            //                                                     }
                            //                                                 });
                            //                                         }
                            //                                         }
                            //                                     >Mark Completed</Button>
                            //                                     <Button
                            //                                         onClick={() => {
                            //                                             swal({
                            //                                                 title: "Are you sure you want to mark as pending?",
                            //                                                 text: "This action is reversable!",
                            //                                                 icon: "warning",
                            //                                                 buttons: true,
                            //                                                 dangerMode: true,
                            //                                             })
                            //                                                 .then((willDelete) => {
                            //                                                     if (willDelete) {
                            //                                                         markPendingOrder(row.docId, row.orderDetails)
                            //                                                             .then((data) => {
                            //                                                                 swal("Order marked as pending", {
                            //                                                                     icon: "success",
                            //                                                                 });
                            //                                                                 setData(data)
                            //                                                             })
                            //                                                             .catch(e => console.log(e))
                            //                                                     }
                            //                                                 });
                            //                                         }
                            //                                         }
                            //                                     >Mark Pending</Button>
                            //                                 </TableCell>
                            //                                 :
                            //                                 <div>
                            //                                     {
                            //                                         row.docUpdate && <TableCell align="center">
                            //                                             <Button
                            //                                                 onClick={() => {
                            //                                                     swal({
                            //                                                         title: "Are you sure you want to cancel your order?",
                            //                                                         text: "This action is irreversable!",
                            //                                                         icon: "warning",
                            //                                                         buttons: true,
                            //                                                         dangerMode: true,
                            //                                                     })
                            //                                                         .then((willDelete) => {
                            //                                                             if (willDelete) {
                            //                                                                 cancelOrder(row.docId)
                            //                                                                 swal("Order cancelled", {
                            //                                                                     icon: "success",
                            //                                                                 });
                            //                                                                 window.location.reload()
                            //                                                             }
                            //                                                         });
                            //                                                 }
                            //                                                 }
                            //                                             >Cancel</Button>
                            //                                         </TableCell>
                            //                                     }
                            //                                 </div>
                            //                         }

                            //                     </TableRow>
                            //                 ))}
                            //             </TableBody>
                            //         </Table>

                            //     </TableContainer>
                            //     <TablePagination
                            //         rowsPerPageOptions={[1, 25, 100]}
                            //         component="div"
                            //         count={reduxOrders && reduxOrders.length}
                            //         rowsPerPage={rowsPerPage}
                            //         page={page}
                            //         onPageChange={handleChangePage}
                            //         onRowsPerPageChange={handleChangeRowsPerPage}
                            //     />

                            // </Paper>
                            :
                            <div>
                                <div>You Currently have no orders</div>
                                <div
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => navigate('/product')}
                                >Click here to browse our products</div>
                            </div>
                    }

                </Grid>

            </Grid>
        </Container>
    </div >
}
export default Dashboard