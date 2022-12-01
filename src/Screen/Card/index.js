import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import img1 from "../../Image/footerimg.jpg"
import "./index.css"
function Card() {
    const navigte=useNavigate()
    return <div style={{ paddingTop: "100px", backgroundColor: "white",marginTop:"30px" }}>
        <Container>
            <Grid container className='card_detail_main'>
                <Grid item lg={4}>
                    <p><b>Product</b></p>
                </Grid>
                <Grid item lg={2}>
                    <p><b>Price</b></p>
                </Grid>
                <Grid item lg={2}>
                    <p><b>Quantity</b></p>
                </Grid>
                <Grid item lg={2}>
                    <p><b>Subtotal</b></p>
                </Grid>
            </Grid>

            <Grid container className='card_detail_main1'>
                <Grid item lg={4}>
                    <Grid container>
                        <Grid item lg={3.5} className="card_deatil_img">
                            <img src={img1} alt="" />
                        </Grid>
                        <Grid item lg={1}></Grid>
                        <Grid item lg={7}>
                            <p style={{ fontSize: "15px", paddingTop: "10px" }}>Chicken Qeema Show</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={2}>
                    <p style={{ fontSize: "18px" }}>Rs:2,300</p>
                </Grid>
                <Grid item lg={2} className="card_detail_input">
                    <input type="number" placeholder='1' style={{ width: "50%", height: "40px", paddingLeft: "35px" }} />

                </Grid>
                <Grid item lg={2}>
                    <p style={{ fontSize: "18px" }}>Rs:2,300</p>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={10}></Grid>
                <Grid item lg={2}>
                    <Button style={{ width: "100%", backgroundColor: "rgb(58,26,15)", color: "white", fontSize: "20px", marginTop: "30px" ,marginBottom:"30px"}}>UPDATE CARD</Button>
                </Grid>
            </Grid>
            <Grid container className='card_detail_main2'>
                <Grid item lg={4}>
                    <p><b>Subtotal</b></p>
                </Grid>
                <Grid item lg={2}>
                    <p>Rs:2,3000</p>
                </Grid>
            </Grid>
            <Grid container className='card_detail_main2' style={{paddingTop:"40px"}}>
                <Grid item lg={4}>
                    <p><b>TOTAL</b></p>
                </Grid>
                <Grid item lg={2}>
                    <p>Rs:2,3000</p>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={4}>
                    <Button style={{ width: "100%", backgroundColor: "rgb(58,26,15)", color: "white", fontSize: "20px", marginTop: "40px" ,marginBottom:"30px"}} onClick={()=>navigte("/shipingDeatils")}>PROCEED TO CHECKOUT</Button>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={3}>
                    <Button style={{ width: "100%", backgroundColor: "rgb(58,26,15)", color: "white", fontSize: "20px", marginTop: "20px" ,marginBottom:"30px"}}>Return To Shop</Button>
                </Grid>
            </Grid>
        </Container>
    </div>
}
export default Card