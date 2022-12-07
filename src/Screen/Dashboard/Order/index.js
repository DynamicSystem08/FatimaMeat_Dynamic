import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import "./index.css"

function Order() {
    const navigate = useNavigate()
    const obj = [
        { heading: "order 1", items: "car" },
        { heading1:"order 2", item1: "car1" },
        { heading2:"order 3", item2: "car2" },
        { heading3:"order 4", item3: "car3" },
    ]
    return <div style={{ backgroundColor: "white" }}>
        <Container style={{ paddingTop: "140px", paddingBottom: "50px" }}>
            <Grid container>
                <Grid item lg={3} style={{ padding: "20px" }} className="side_bar_dashboadr">
                    <h2><b>My Account</b></h2>
                    <hr></hr><br></br>
                    <p onClick={() => navigate("/dashboard")}>Dashboard</p><br></br>
                    <p onClick={() => navigate("/order")}>Orders</p><br></br>
                    <p>DownLoads</p><br></br>
                    <p>Addresses</p><br></br>
                    <p>Accounts details</p><br></br>
                    <p>Logout</p><br></br>
                </Grid>
                <Grid item lg={1}></Grid>

                <Grid item lg={8} style={{ paddingTop: "100px" }}>
                    {obj.map((item) => {
                        return <div>
                            <Grid container className='dashboard_order'>
                                <Grid item lg={2.5} className="dashboard_order_text">
                                    <h1>{item.heading}</h1>
                                    <p>{item.items}</p>
                                </Grid>
                                <Grid item lg={2.5} className="dashboard_order_text">
                                    <h1>{item.heading}</h1>
                                    <p>{item.items}</p>
                                </Grid>
                                <Grid item lg={2.5} className="dashboard_order_text">
                                    <h1>{item.heading}</h1>
                                    <p>{item.items}</p>
                                </Grid>
                                <Grid item lg={2.5} className="dashboard_order_text">
                                    <h1>{item.heading}</h1>
                                    <p>{item.items}</p>
                                </Grid>
                            </Grid>
                        </div>
                    })}
                </Grid>
            </Grid>
        </Container>
    </div>
}
export default Order