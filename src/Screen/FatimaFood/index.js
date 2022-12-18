import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import dividerDark from "../../Image/divider.png"
import { useEffect } from 'react';
import MetaData from '../../Component/MetaData';
import logo from "../../Image/logo5.png"
import "./index.css"

export default function ZabeehaShop() {

  useEffect(() => {
    window.scroll(0, 0)
  })

  return <div style={{ marginTop: "10px", backgroundColor: "white", paddingBottom: "20px" }}>
    <MetaData title="Fatima Meat | Contact Us" />
    <Grid container>
      <Grid item lg={12} className="our_shop_bg">
        <h1 className='our_meat_text1' style={{ padding: "100px", color: "white", fontWeight: "900" }}>Our Shop</h1>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className="our_meat_img">
        <p className="our_Meat_main1" style={{ fontWeight: "600", color: "rgb(25,25,25)" }}>Locate Fatima Foods Shops</p>
        <img src={dividerDark} alt="" style={{ width: "15%", marginTop: "-60px", marginBottom: "-100px" }} />
      </Grid>
    </Grid>
    <Container>
      <Grid container style={{ borderBottom: "3px solid rgb(208,13,30)", marginTop: "30px" }}>
        <Grid item lg={1.2} md={1.3} sm={2} xs={2.5} className="our_meat_img1">
          <img src={logo} alt="" />
        </Grid>
        <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text3">
          <h1 style={{ marginTop: "60px" }}>Rawalpindi</h1>
        </Grid>
      </Grid>
      <div style={{ borderBottom: "3px solid rgb(208,13,30)", paddingTop: "2px", marginBottom: "20px" }} ></div>
      <Grid item lg={12} md={12} sm={12} xs={12} className="comimg_soon">
        <p><i>COMING SOON</i></p>
      </Grid>

    </Container>

    <Container>
      <Grid container style={{ borderBottom: "3px solid rgb(208,13,30)", marginTop: "30px" }}>
        <Grid item lg={1.2} md={1.3} sm={2} xs={2.5} className="our_meat_img1">
          <img src={logo} alt="" />
        </Grid>
        <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text3">
          <h1 style={{ marginTop: "60px" }}>Lahore</h1>
        </Grid>
      </Grid>
      <div style={{ borderBottom: "3px solid rgb(208,13,30)", paddingTop: "2px" }} ></div>
      <Grid item lg={12} md={12} sm={12} xs={12} className="comimg_soon">
        <p><i>COMING SOON</i></p>
      </Grid>
    </Container>

    <Container>
      <Grid container style={{ borderBottom: "3px solid rgb(208,13,30)", marginTop: "30px" }}>
        <Grid item lg={1.2} md={1.3} sm={2} xs={2.5} className="our_meat_img1">
          <img src={logo} alt="" />
        </Grid>
        <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text3">
          <h1 style={{ marginTop: "60px" }}>Karachi</h1>
        </Grid>
      </Grid>
      <div style={{ borderBottom: "3px solid rgb(208,13,30)", paddingTop: "2px" }} ></div>
      <Grid item lg={12} md={12} sm={12} xs={12} className="comimg_soon">
        <p style={{ paddingBottom: "50px" }}><i>COMING SOON</i></p>
      </Grid>
    </Container>
  </div>
}