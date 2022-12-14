import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import dividerDark from "../../Image/divider.png"
import imgFatima from "../../Image/cardImg1.png"
import beef from "../../Image/cardimg2.png"
import imgFatimaM from "../../Image/cardimg3.png"

import BeefBoneless from "../../Image/BeefBoneless.jpg"
import BeefChops from "../../Image/BeefChops.jpg"
import BeefMince from "../../Image/BeefMince.jpg"
import BeefMixBoti from "../../Image/BeefMixBoti.jpg"
import BeefNihari from "../../Image/BeefNihari.jpg"
import BeefNully from "../../Image/BeefNully.jpg"
import BeefRip from "../../Image/BeefRip.jpg"
import BeepRibs from "../../Image/BeefRibs.jpg"
import BeefT from "../../Image/BeefT.jpg"
import MuttonChops from "../../Image/MuttonChops.jpg"
import MuttonLeg from "../../Image/MuttonLeg.jpg"
import MuttonMince from "../../Image/MuttonMix.jpg"
import MuttonMice from "../../Image/MuttonMince.jpg"
import MetaData from "../../Component/MetaData"
import { useEffect } from 'react';
import "./index.css"
function OurMeat() {
  // useEffect(() => {
  //   window.scroll(0, 0)
  // })
  return <div style={{ marginTop: "-10px" ,backgroundColor:"white"}} >
    <MetaData title="Fatima Meat | Our Meat" />
    <Grid container>
      <Grid item lg={12} className="our_meat_bg">
        <h1 className='our_meat_text' style={{padding:"100px"}}>Our Meat</h1>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className="our_meat_img">
        <p className="our_Meat_main1" style={{fontWeight:"600",color:"black"}} >Fatima Meat</p>
        <img src={dividerDark} alt="" style={{ width: "15%",marginBottom:"-110px",marginTop:"-40px" }} />
      </Grid>
    </Grid>
    <Container>
      <Grid container style={{ borderBottom: "3px solid rgb(208,13,30)", marginTop: "30px" }}>
        <Grid item lg={0.9} md={1} sm={2} xs={2.5} className="our_meat_img1">
          <img src={beef} alt="" />
        </Grid>
        <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text5">
          <h1>Beef</h1>
        </Grid>
      </Grid>
      <div style={{ borderBottom: "3px solid rgb(208,13,30)", paddingTop: "2px" }} ></div>
      <Grid container className='Beef_main_imgs'>
        <Grid item lg={3.7} md={3.5} sm={3.3} xs={10} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p>Beef Boneless Cubes</p>
        </Grid>
        <Grid item lg={3.7} md={3.5} sm={3.3} xs={10} className="Beef_imgs">
          <img src={BeefChops} alt="" />
          <p>Beef Chops</p>
        </Grid>
        <Grid item lg={3.7} md={3.5} sm={3.3} xs={10} className="Beef_imgs">
          <img src={BeefMince} alt="" />
          <p>Beef Mince</p>
        </Grid>

        <Grid item lg={3.7} md={3.5} sm={3.3} xs={10} className="Beef_imgs">
          <img src={BeefMixBoti} alt="" />
          <p>Beef Mix Boti</p>
        </Grid>
        <Grid item lg={3.7} md={3.5} sm={3.3} xs={10} className="Beef_imgs">
          <img src={BeefNihari} alt="" />
          <p>Beef Nihari Cut Boneless</p>
        </Grid>
        <Grid item lg={3.7} md={3.5} sm={3.3} xs={10} className="Beef_imgs">
          <img src={BeefNully} alt="" />
          <p>Beef Nully</p>
        </Grid>

        <Grid item lg={3.7} md={3.5} sm={3.3} xs={10} className="Beef_imgs">
          <img src={BeefRip} alt="" />
          <p>Beef Rib Steak</p>
        </Grid>
        <Grid item lg={3.7} md={3.5} sm={3.3} xs={10} className="Beef_imgs">
          <img src={BeepRibs} alt="" />
          <p>Beef Ribs Eye Steak</p>
        </Grid>
        <Grid item lg={3.7} md={3.5} sm={3.3} xs={10} className="Beef_imgs">
          <img src={BeefT} alt="" />
          <p>Beef T Bone Steak</p>
        </Grid>
      </Grid>

      <Grid container style={{ borderBottom: "3px solid rgb(208,13,30)", marginTop: "50px" }}>
        <Grid item lg={0.9} md={1} sm={2} xs={2.5} className="our_meat_img1">
          <img src={imgFatimaM} alt="" />
        </Grid>
        <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text5">
          <h1>Mutton</h1>
        </Grid>
      </Grid>
      <div style={{ borderBottom: "3px solid rgb(208,13,30)", paddingTop: "2px" }} ></div>
      <Grid container className='mutton_main'>
        <Grid item lg={5.7} md={5.3} sm={5} xs={11.5} className="mutton_main_imgs">
          <img src={MuttonChops} alt="" />
          <p>Mutton Chops</p>
        </Grid>
        <Grid item lg={5.7} md={5.3} sm={5} xs={11.5} className="mutton_main_imgs">
          <img src={MuttonLeg} alt="" />
          <p>Mutton Leg</p>
        </Grid>

        <Grid item lg={5.7} md={5.3} sm={5} xs={11.5} className="mutton_main_imgs">
          <img src={MuttonMice} alt="" />
          <p>Mutton Mince</p>
        </Grid>
        <Grid item lg={5.7} md={5.3} sm={5} xs={11.5} className="mutton_main_imgs" style={{marginBottom:"50px"}}>
          <img src={MuttonMince} alt="" />
          <p>Mutton Mix Boti</p>
        </Grid>
      </Grid>
    </Container>
  </div>
}
export default OurMeat