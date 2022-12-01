import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import img1 from "../../Image/cardImg1.png"
import {useNavigate} from "react-router-dom"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./index.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function ProductDetail() {
  const navigte=useNavigate()
  return <div style={{ backgroundColor: "rgb(58,26,15)", paddingTop: "120px", paddingBottom: "50px" }}>
    <Container style={{ backgroundColor: "white", paddingTop: "50px", paddingBottom: "50px" }}>
      <h1 style={{ textAlign: "center" }}><b>Rabbit Meat</b></h1>

      <Grid container className="product_detail_main">
        <Grid item lg={5.5} className="product_detail_slider">
          {/* <img src={mutonimg1} alt="" /> */}
          <>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
            </Swiper>
          </>


        </Grid>
        <Grid item lg={5.5} className="product_detail_text">
          <p>Rs 1,000 - 1,5000.0</p>
          <Grid container>
            <Grid item lg={4}>
              <p style={{ fontSize: "20px", marginTop: "5px", cursor: "pointer" }}><b>Meat Type</b></p>
            </Grid>
            <Grid item lg={8}>

              <select style={{ width: "100%", height: "50px", border: "1px solid lightgray", paddingLeft: "20px" }} >
                <option value="volvo">Choose An Option</option>
                <option value="saab">Kg</option>
                <option value="mercedes">Pc</option>
              </select>
            </Grid>
          </Grid>
          <hr style={{ marginTop: "50px" }}></hr>
          <p>Rs 1,5000.0</p>
          <Grid container style={{ marginBottom: "25px" }}>
            <Grid item lg={2} className="detail_product_input">
              <input type="number" placeholder='1' style={{ width: "100%", height: "40px", paddingLeft: "35px" }} />
            </Grid>
            <Grid item lg={2}></Grid>
            <Grid item lg={8}>
              <Button style={{ width: "100%", backgroundColor: "rgb(58,26,15)", color: "white", fontSize: "20px" }} onClick={()=>navigte("/card")}>Add To Card</Button>
            </Grid>
          </Grid>
          <text style={{ fontSize: "20px" }}>SKU: N/A</text><br></br>
          <text style={{ fontSize: "20px" }}>Categories:<b>Organi Meat,Rabbit</b></text>
        </Grid>
      </Grid>
    </Container>
    <Container>
      <Grid container className='product_descripton_btn'>
        <Grid item lg={3.7}>
          <Button style={{ width: "100%", backgroundColor: "rgb(213,188,157)", color: "white", fontSize: "20px", height: "50px" }}>Description</Button>

        </Grid>
        <Grid item lg={3.7}>
          <Button style={{ width: "100%", backgroundColor: "rgb(213,188,157)", color: "white", fontSize: "20px", height: "50px" }}>Additional Information</Button>

        </Grid>
        <Grid item lg={3.7}>
          <Button style={{ width: "100%", backgroundColor: "rgb(213,188,157)", color: "white", fontSize: "20px", height: "50px" }}>Review(0)</Button>

        </Grid>
      </Grid>
      <Grid container style={{ backgroundColor: "white", paddingBottom: "0px" }} >
        <Grid item lg={10} className="Rabbit_meat_ul" npn>
          <p>Rabbit Meat</p>
          <ul>
            <li>One of the best white meats available on the market today.</li>
            <li>One of the best white meats available on the market today.</li>
            <li>Has a high percentage of easily digestible protein.</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  </div>
}
export default ProductDetail

