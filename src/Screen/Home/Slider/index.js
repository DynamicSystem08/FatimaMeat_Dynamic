import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';

import Carousel from 'react-bootstrap/Carousel';
import "./index.css"
import slideimg1 from "../../../Image/beefImageSlider101.jpg"
import slideimg2 from "../../../Image/beefimageslider102.jpg"
import slideimg3 from "../../../Image/muttonSlide1mg101.jpg"
import chicken1 from "../../../Image/chickenimg1.jpg"
import chicken2 from "../../../Image/sliderrabbit102.jpg"


function Slider() {
    return <div style={{ backgroundColor: "white" }}>
        <div className='slider_main1'></div>
        <div style={{ marginTop: "-90px" }} >
            <Container >
                <Carousel className="sifer_main1" >
                    <Carousel.Item>
                        <Container>
                            <Grid container className='silder_main'>
                                <Grid item lg={5} md={5} sm={3.5} xs={5} className="slider_text">
                                    <h1 class="animate__animated animate__fadeIn animate__delay-1s">Hight quality meat And afordable price</h1>
                                </Grid>
                                <Grid item lg={6.6} md={6} sm={5} xs={5} className="slider_img" data-aos="fade-left" style={{ transition: "0.5s" }}>
                                    <img src={slideimg1} alt="" />
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
                                    <img class="animate__animated animate__slideInUp  animate__delay-1s" src={chicken1} alt="" />

                                </Grid>
                            </Grid>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Grid container className='silder_main'>
                                <Grid item lg={5} md={5} sm={3.5} xs={5} className="slider_text" data-aos="zoom-in" style={{ transition: "1s" }}>
                                    <h1 class="animate__animated animate__fadeIn animate__delay-1s">Fatima quality rabbit  And Afordable Price</h1>
                                </Grid>
                                <Grid item lg={6.6} md={6} sm={6.6} xs={5.5} className="slider_img">
                                    <img class="animate__animated animate__slideInRight animate__delay-1s" src={chicken2} alt="" />
                                </Grid>
                            </Grid>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
        <Container>
            <Grid container style={{ textAlign: "center", marginTop: "50px",justifyContent:"center" }}>
                <Grid item lg={12} md={12} sm={12} xs={11} className="about_text" >
                    <h1>About Fatima Meat</h1>
                    <p>Launched in February 2014, Fatima Meat is a special chain of retail stores which provides its customers with fresh, healthy and quality meat in the most affordable rates. Our primary objective is to provide customers with premium quality meat processed in a hygienic environment. Also, we offer customers with a wide range of products to choose from which includes beef, mutton and chicken. With Fatima Meat, you name it and we have it!</p>
                </Grid>
            </Grid>
        </Container>
    </div>
}
export default Slider