import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

import { signOutUser, getAllOrders } from '../../config/firebase'
import { fetchOrders } from '../../store/slices/orderSlice';
import "./index.css"
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const reduxAllOrders = useSelector(state => state.orderReducer.allOrders)
    console.log("add", reduxAllOrders)

    const callData = async () => {
        const result = await dispatch(fetchOrders())
    }

    useEffect(() => {
        getAllOrders()
        callData()
    }, [])


    return <div style={{ backgroundColor: "white" }}>
        <Container style={{ paddingTop: "140px", paddingBottom: "50px" }}>
            <Grid container>
                <Grid item lg={3} style={{ padding: "20px" }} className="side_bar_dashboadr">
                    <h2><b>My Account</b></h2>
                    <hr></hr><br></br>
                    <p>Dashboard</p><br></br>
                    <p onClick={() => navigate("/order")}>Orders</p><br></br>
                    <p onClick={() => navigate("/myAccount")}>My Accounts</p><br></br>
                    <p>Addresses</p><br></br>
                    <p>Accounts details</p><br></br>
                    <p
                        onClick={signOutUser}
                    >Logout</p><br></br>
                </Grid>
                <Grid item lg={1}></Grid>
           
                      
                <Grid item lg={8} style={{ paddingTop: "100px" }}>
                <Grid container style={{ justifyContent: "center",marginBottom:"20px" }}>
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

                {reduxAllOrders.map((item) => {
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
                    })}
                </Grid>

          
            </Grid>
        </Container>
    </div>
}
export default Dashboard