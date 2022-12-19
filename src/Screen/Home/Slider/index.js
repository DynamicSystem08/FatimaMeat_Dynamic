import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';

import Carousel from 'react-bootstrap/Carousel';
import "./index.css"
import slideimg2 from "../../../Image/12.png"
import slideimg3 from "../../../Image/slidermuttonimg102.png"
import aboutUs from "../../../Image/aboutusImg.jpg"
import beefimg3 from "../../../Image/beefimg3.jpg"
import cuttericon from "../../../Image/cuttericon.png"
import sliderchicken from "../../../Image/11.png"



function Slider() {
    return <div className="slider_bg_icon">
        <div className='slider_main1'></div>
        <div style={{ marginTop: "-90px" }} >
            <Container>
                <Carousel className="sifer_main1" >
                    <Carousel.Item>
                        <Container>
                            <Grid container className='silder_main'>
                                <Grid item lg={5} md={5} sm={3.5} xs={5} className="slider_text">
                                    <h1 class="animate__animated animate__fadeIn animate__delay-1s">Hight quality meat And afordable price</h1>
                                </Grid>
                                <Grid item lg={6.5} md={6} sm={5} xs={5} className="slider_img" data-aos="fade-left" style={{ transition: "0.5s" }}>
                                    <img src="http://www.khaasmeat.net/public/images/4443b-latest.png" alt="" />
                                </Grid>
                            </Grid>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>

                        <Container>
                            <Grid container className='silder_main'>
                                <Grid item lg={5} md={5} sm={3.5} xs={5} className="slider_text" data-aos="zoom-in" style={{ transition: "1s" }}>
                                    <h1 class="animate__animated animate__fadeIn animate__delay-3s">We belive in hygienic and quality beef</h1>
                                </Grid>
                                <Grid item lg={6.6} md={6} sm={6.6} xs={5.5} className="slider_img" >
                                    <img
                                        class="animate__animated animate__slideInLeft animate__delay-1s"
                                        src={slideimg2} alt="" />
                                </Grid>
                            </Grid>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Grid container className='silder_main'>
                                <Grid item lg={5} md={5} sm={3.5} xs={5} className="slider_text" data-aos="zoom-in" style={{ transition: "1s" }}>
                                    <h1 class="animate__animated animate__fadeIn animate__delay-2s">Fatima quality mutton and Afordable price </h1>
                                </Grid>
                                <Grid item lg={6.6} md={6} sm={6.6} xs={5.5} className="slider_img">
                                    <img
                                        class="animate__animated animate__backInDown"
                                        src={slideimg3} alt="" />
                                </Grid>
                            </Grid>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Grid container className='silder_main'>
                                <Grid item lg={5} md={5} sm={3.5} xs={5} className="slider_text" data-aos="zoom-in" style={{ transition: "1s" }}>
                                    <h1 class="animate__animated animate__fadeIn animate__delay-1s">100% hygienic reday-to-cook and chicken cut</h1>
                                </Grid>
                                <Grid item lg={6.6} md={6} sm={6.6} xs={5.5} className="slider_img">
                                    {/* <img class="animate__animated animate__slideInUp  animate__delay-1s" src={chicken1} alt="" /> */}
                                    <img class="animate__animated animate__slideInUp  animate__delay-1s" src={sliderchicken} alt="" />


                                </Grid>
                            </Grid>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Grid container className='silder_main'>
                                <Grid item lg={5} md={5} sm={3.5} xs={5} className="slider_text" data-aos="zoom-in" style={{ transition: "1s" }}>
                                    <h1 class="animate__animated animate__fadeIn animate__delay-1s">Fatima quality Chicken  And Afordable Price</h1>
                                </Grid>
                                <Grid item lg={6.6} md={6} sm={6.6} xs={5.5} className="slider_img">
                                    <img class="animate__animated animate__slideInRight animate__delay-1s" src="http://khaasmeat.net/public/images/df343-chicken.png" alt="" />
                                </Grid>
                            </Grid>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
        <Container>
            <Grid container style={{ marginTop: "50px", justifyContent: "center" }}>
                <Grid item lg={3} md={3} sm={5} xs={10}

                >
                    <Grid container data-aos="flip-right" style={{ transition: "1s" }}>
                        <Grid item lg={2.5} md={2.5} sm={2} xs={3}>
                            <LocalShippingIcon sx={{ fontSize: "43px", marginTop: "10px", color: "rgb(208,13,30)" }} />
                        </Grid>
                        <Grid item lg={8} md={9} sm={9} xs={9}>
                            <p className='text_delivery'><b>Delivery Service</b></p>
                            <p className='free_Shiping'>Free shiping over 5k order</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={3} md={3} sm={5} xs={10}>
                    <Grid container>
                        <Grid item lg={2.7} md={2.7} sm={2.5} xs={3}>
                            <img src={cuttericon} style={{ height: "90px", width: "100%", marginTop: "-15px" }} />
                        </Grid>
                        <Grid item lg={8} md={8} sm={9} xs={9}>
                            <p className='text_delivery'><b>Online Butcher</b></p>
                            <p className='free_Shiping'>Expertly butcher request</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={3} md={3} sm={5} xs={10}>
                    <Grid container>
                        <Grid item lg={2.7} md={2.7} sm={2} xs={3}>
                            {/* <LocalShippingIcon sx={{fontSize:"43px",marginTop:"10px",color:"rgb(208,13,30)"}}/> */}
                            <img src={beefimg3} alt="" className='choose_cut_img' />
                        </Grid>
                        <Grid item lg={8} md={9} sm={9} xs={9}>
                            <p className='text_delivery'><b>Choose Your Cuts</b></p>
                            <p className='free_Shiping'>From distinct range</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={3} md={3} sm={5} xs={10}>
                    <Grid container data-aos="flip-right" style={{ transition: "1s" }}>
                        <Grid item lg={2.6} md={2.2} sm={2.5} xs={3}>
                            <PhonelinkLockIcon sx={{ fontSize: "43px", marginTop: "10px", color: "rgb(208,13,30)" }} />
                        </Grid>
                        <Grid item lg={9} md={9.4} sm={9.5} xs={9}>
                            <p className='text_delivery'><b>Hygienically Packed</b></p>
                            <p className='free_Shiping'>Fresh Meat</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>


        <Container>
            <Grid container style={{ textAlign: "center", marginTop: "50px", justifyContent: "center" }}>
                <Grid item lg={5.5} md={5.5} sm={6} xs={11} className="about_text" >
                    <h1 style={{ textAlign: "start" }}>About Us</h1>
                    <p>Launched in February 2014, Fatima Meat is a special chain of retail stores which provides its customers with fresh, healthy and quality meat in the most affordable rates. Our primary objective is to provide customers with premium quality meat processed in a hygienic environment. Also, we offer customers with a wide range of products to choose from which includes beef, mutton and chicken. With Fatima Meat, you name it and we have it!</p>
                </Grid>
                <Grid item lg={1} md={0.5} sm={0.5}></Grid>
                <Grid item lg={5.5} md={6} sm={5.5} xs={12} className="about_us">
                    <img src={aboutUs}
                        data-aos="fade-up"
                        data-aos-duration="2400"
                    />
                </Grid>
            </Grid>
        </Container>
    </div>
}
export default Slider