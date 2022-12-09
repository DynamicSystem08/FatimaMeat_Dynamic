import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

import { signOutUser } from '../../config/firebase'
import { fetchOrders } from '../../store/slices/orderSlice';
import "./index.css"
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/slices/userSlice';
import swal from 'sweetalert';

function Dashboard() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return <div style={{ backgroundColor: "white" }}>
        <Container style={{ paddingTop: "140px", paddingBottom: "50px" }}>
            <Grid container>
                <Grid item lg={3} style={{ padding: "20px" }} className="side_bar_dashboadr">
                    <h2><b>My Account</b></h2>
                    <hr></hr><br></br>
                    <p>Dashboard</p><br></br>
                    <p onClick={() => navigate("/order")}>Orders</p><br></br>
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
                        <p>
                            Hello nabeel (not nabeel? Log out)
                            From your account dashboard you can view your recent orders,
                            manage your shipping and billing addresses, and edit your password and account details.
                        </p>
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    </div>
}
export default Dashboard