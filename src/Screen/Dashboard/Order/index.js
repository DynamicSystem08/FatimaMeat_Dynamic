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

function Dashboard() {

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

    useEffect(() => {
        if (reduxUser.email == "admin@fatimameat.com") {
            console.log("admin")
            callData()
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


                <Grid item lg={8} style={{ paddingTop: "100px" }}>
                    <Grid container style={{ justifyContent: "center", marginBottom: "20px" }}>
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
                    </Grid>

                    {reduxAllOrders ? reduxAllOrders.map((item) => {
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
                    }
                </Grid>


            </Grid>
        </Container>
    </div>
}
export default Dashboard