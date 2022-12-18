import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

import { signOutUser } from '../../config/firebase'

import "./index.css"
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/slices/userSlice';
import swal from 'sweetalert';

function Dashboard() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)

    // if (!user) {
    //     navigate('/auth')
    //     return <div>loading</div>
    // }

    if (!user) {
        return
    }

    return <div style={{ backgroundColor: "white" }}>
        <Container style={{ paddingTop: "140px", paddingBottom: "50px" }}>
            <Grid container>
                <Grid item lg={3} md={3.5} sm={4} xs={12} style={{ padding: "20px" }} className="side_bar_dashboadr">
                    <h2 style={{ fontFamily: "Garamond,serif" }}><b>My Account</b></h2>
                    <hr></hr><br></br>
                    <p> Dashboard</p><br></br>
                    <p onClick={() => navigate("/dashboard/orders")}>Orders</p><br></br>
                    {/* <p onClick={() => navigate("/myAccount1")}>My Account</p><br></br> */}
                    <p onClick={() => navigate("/dashboard/account-details")}>Account Detail</p><br></br>
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
                <Grid item lg={1} md={1} sm={1}></Grid>


                <Grid item lg={8} md={7} sm={7} xs={12} style={{ paddingTop: "100px" }}>
                    <Grid container style={{ justifyContent: "center", marginBottom: "20px" }}>
                        {
                            user && <p>
                                Hello {user.displayName}! not {user.displayName}? Click Here To Logout
                                From this account's dashboard. You can view your recent orders,
                                and edit your password and account details.
                            </p>
                        }

                    </Grid>

                </Grid>
            </Grid>
        </Container>
    </div >
}
export default Dashboard