import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import "./index.css"

function Dashboard()
{
    return<div>
        <Container style={{marginTop:"140px",marginBottom:"50px"}}>
            <Grid container>
                <Grid item lg={3} style={{padding:"20px"}} className="side_bar_dashboadr">
                    <h2><b>My Account</b></h2>
                    <hr></hr><br></br>
                    <p>Dashboard</p><br></br>
                    <p>Orders</p><br></br>
                    <p>DownLoads</p><br></br>
                    <p>Addresses</p><br></br>
                    <p>Accounts details</p><br></br>
                    <p>Logout</p><br></br>                   
                </Grid>
                <Grid item lg={1}></Grid>
                <Grid item lg={8} style={{paddingTop:"100px"}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tenetur. Quas incidunt, illo numquam maiores eos assumenda quisquam, mollitia dicta ipsam asperiores magnam modi a tenetur hic minima, sunt laboriosam.
                    </p>
                    <p>Lorem ipsueriam tenetur illum id, optio eaque qui nobis dolore exercitationem sapiente aut numquam sunt unde. A asperiores ducimus nihil reprehenderit.</p>
                </Grid>
            </Grid>
        </Container>
    </div>
}
export default Dashboard