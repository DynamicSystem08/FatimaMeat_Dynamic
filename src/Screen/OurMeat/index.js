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


import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ClosedCaptionDisabledIcon from '@mui/icons-material/ClosedCaptionDisabled';

import "./index.css"
function OurMeat() {
  // useEffect(() => {
  //   window.scroll(0, 0)
  // })
  return <div style={{ marginTop: "-10px", backgroundColor: "white" }} >
    <MetaData title="Fatima Meat | Our Meat" />
    <Container>
      <h1 style={{ paddingTop: "100px", fontFamily: " Garamond, serif", fontWeight: "900" }}>SHOP</h1>

      <Grid container>
        {/* <Grid item lg={3} md={3.6} sm={5.5} xs={12} id="imgportfolio" style={{ border: "1px solid gray", padding: "20px" }}>
          <div>
            <img src={BeefMince} alt="" />
            <div id="content121">
              <h1>Bussiness Solution</h1>
              <p style={{ marginTop: "-10px" }}>All features available</p>
              <RemoveRedEyeIcon sx={{ fontSize: "40px", cursor: "pointer", marginRight: "15px" }} />
              <ClosedCaptionDisabledIcon sx={{ fontSize: "40px", cursor: "pointer" }} />
            </div>
          </div>
        </Grid> */}
        <Grid item lg={3} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p><b>100% Organic Veal Meat (cow)</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>
        <Grid item lg={3} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p><b>Camel Meat</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>
        <Grid item lg={3} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p><b>Desi Aseel Meat</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>
        <Grid item lg={3} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p><b>Desi Misri Meat</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>


        <Grid item lg={3} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p><b>Duck Meat</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>
        <Grid item lg={3} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p><b>Mutton</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>
        <Grid item lg={3} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p><b>Ostrich Meat</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>
        <Grid item lg={3} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p><b>Quail Meat</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>

        <Grid item lg={3} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p><b>Rabbit Meat</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>
        <Grid item lg={3} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p><b>Sheep/Lamb</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>
        <Grid item lg={3} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p><b>Turkey Meat</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>
        <Grid item lg={3} className="Beef_imgs">
          <img src={BeefBoneless} alt="" />
          <p><b>Veal Camel Meat</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>

        <Grid item lg={3} className="Beef_imgs" style={{ marginBottom: "50px" }}>
          <img src={BeefBoneless} alt="" />
          <p><b>Veal Meat (cow)</b></p>
          <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>₨375.00 – ₨2,400.00</p>
        </Grid>

      </Grid>

    </Container>
  </div>
}
export default OurMeat