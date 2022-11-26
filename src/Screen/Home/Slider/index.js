import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';

import Carousel from 'react-bootstrap/Carousel';
import "./index.css"
import slideimg1 from "../../../Image/slideimg1.jpg"
import slideimg2 from "../../../Image/slideimg2.jpg"
import slideimg3 from "../../../Image/slideimg3.jpeg"
import chicken1 from "../../../Image/chickenimg1.jpg"
import chicken2 from "../../../Image/chickenimg2.jpg"


function Slider() {
    return <div style={{paddingTop:"290px",backgroundColor:"rgb(58,26,15)"}}> 
        <Container >
            <Carousel className="sifer_main1" >
                <Carousel.Item>
                    {/* animate__rotateInUpRight */}
                    <Container>
                        <Grid container className='silder_main'>
                            <Grid item lg={5} className="slider_text" data-aos="zoom-in" style={{ transition: "1s" }}>
                                <h1 class="animate__animated animate__jello animate__delay-1s">Hight Quality Meat And Afordable Price</h1>
                                {/* <div class="animate__animated animate__bounce animate__delay-2s">Example</div> */}
                            </Grid>
                            <Grid item lg={6.6} className="slider_img">
                                <img src={slideimg1} alt=""/>
                                {/* <img 
                             class="animate__animated animate__lightSpeedInRight animate__delay-0.7s"
                              src={img1} alt="" /> */}
                            </Grid>
                        </Grid>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    {/* animate__rotateInUpRight */}
                    <Container>
                        <Grid container className='silder_main'>
                            <Grid item lg={5} className="slider_text" data-aos="zoom-in" style={{ transition: "1s" }}>
                                <h1 class="animate__animated animate__jello animate__delay-1s">Bilal Quality Meat And Afordable Price</h1>
                                {/* <div class="animate__animated animate__bounce animate__delay-2s">Example</div> */}
                            </Grid>
                            <Grid item lg={6.6} className="slider_img">
                            <img src={slideimg2} alt=""/>
                                {/* <img 
                             class="animate__animated animate__lightSpeedInRight animate__delay-0.7s"
                              src={img1} alt="" /> */}
                            </Grid>
                        </Grid>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    {/* animate__rotateInUpRight */}
                    <Container>
                        <Grid container className='silder_main'>
                            <Grid item lg={5} className="slider_text" data-aos="zoom-in" style={{ transition: "1s" }}>
                                <h1 class="animate__animated animate__jello animate__delay-1s">Bilal Quality Meat And Afordable Price</h1>
                                {/* <div class="animate__animated animate__bounce animate__delay-2s">Example</div> */}
                            </Grid>
                            <Grid item lg={6.6} className="slider_img">
                            <img src={slideimg3} alt=""/>
                                {/* <img 
                             class="animate__animated animate__lightSpeedInRight animate__delay-0.7s"
                              src={img1} alt="" /> */}
                            </Grid>
                        </Grid>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    {/* animate__rotateInUpRight */}
                    <Container>
                        <Grid container className='silder_main'>
                            <Grid item lg={5} className="slider_text" data-aos="zoom-in" style={{ transition: "1s" }}>
                                <h1 class="animate__animated animate__jello animate__delay-1s">Bilal Quality Meat And Afordable Price</h1>
                                {/* <div class="animate__animated animate__bounce animate__delay-2s">Example</div> */}
                            </Grid>
                            <Grid item lg={6.6} className="slider_img">
                            <img src={chicken1} alt=""/>
                                {/* <img 
                             class="animate__animated animate__lightSpeedInRight animate__delay-0.7s"
                              src={img1} alt="" /> */}
                            </Grid>
                        </Grid>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    {/* animate__rotateInUpRight */}
                    <Container>
                        <Grid container className='silder_main'>
                            <Grid item lg={5} className="slider_text" data-aos="zoom-in" style={{ transition: "1s" }}>
                                <h1 class="animate__animated animate__jello animate__delay-1s">Bilal Quality Meat And Afordable Price</h1>
                                {/* <div class="animate__animated animate__bounce animate__delay-2s">Example</div> */}
                            </Grid>
                            <Grid item lg={6.6} className="slider_img">
                            <img src={chicken1} alt=""/>
                                {/* <img 
                             class="animate__animated animate__lightSpeedInRight animate__delay-0.7s"
                              src={img1} alt="" /> */}
                            </Grid>
                        </Grid>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </Container>
    </div>

}
export default Slider