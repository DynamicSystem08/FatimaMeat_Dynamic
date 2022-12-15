import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { useEffect } from 'react'

import Mutton from "../../Image/cardimg3.png"
import beef from "../../Image/cardimg2.png"
import chicken from "../../Image/cardimg4.png"
import fish from "../../Image/cardImg1.png"
import Beaf from "../../Image/cardImg1.png"

import muttonimg1 from "../../Image/muttonimg1.jpg"
import muttonimg2 from "../../Image/muttonimg2.jpg"
import muttonimg3 from "../../Image/muttonimg3.jpg"
import muttonimg4 from "../../Image/muttonimg4.jpg"
import chickenimg1 from "../../Image/chickenimg1.jpg"
import chickenimg2 from "../../Image/chickenimg2.jpg"
import chickenimg3 from "../../Image/chickenimg3.jpg"
import chickenimg4 from "../../Image/chickenimg4.jpg"
import beefimg1 from "../../Image/beefimg1.jpeg"
import beefimg2 from "../../Image/beefimg2.jpg"
import beefimg3 from "../../Image/beefimg3.jpg"
import beefimg4 from "../../Image/beefimg4.jpg"
import rabbitIcom from "../../Image/cardimg5.png"
import rabbitimg1 from "../../Image/rabbitimg1.jpg"
import rabbitimg2 from "../../Image/rabbitimg2.jpg"
import rabbitimg3 from "../../Image/rabbitimg3.jpg"
import rabbitimg4 from "../../Image/rabbitimg4.jpg"
import camelimg1 from "../../Image/camelimg1.jpg"
import camelimg2 from "../../Image/camelimg2.png"
import camelimg3 from "../../Image/camelimg3.jpg"
import camelimg4 from "../../Image/camelimg4.jpg"
import cameIcon from "../../Image/cardimg6.png"
import fish1 from "../../Image/fishimg1.jpg"
import fish2 from "../../Image/fishimg2.jpeg"
import fish3 from "../../Image/fishimg3.jpg"
import fish4 from "../../Image/fishimg4.jpg"
import duck1 from "../../Image/duckimg1.jpg"
import duck2 from "../../Image/duckimg2.jpg"
import duck3 from "../../Image/duckimg3.jpg"
import duck4 from "../../Image/duckimg4.jpg"

import { useNavigate } from 'react-router-dom';

import "./index.css"
export default function AllOurMeat() {

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <div style={{ backgroundColor: "white" }} className="product_background_image">

        {/* Meat Product */}
        <Container style={{ paddingTop: "130px", paddingBottom: "10px" }}>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12} style={{ textAlign: "center" }} className="about_text">
                    <h1>OUR FRESH MEAT COLLECTION</h1>
                </Grid>
            </Grid>

            <Grid
                container style={{ borderBottom: "2px solid rgb(208,13,30)", marginTop: "10px" }}>
                <Grid item lg={0.9} md={0.9} sm={1.4} xs={3} className="our_meat_img1">
                    <img src={Mutton} alt="" />
                </Grid>
                <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text2">
                    <h1>MUTTON</h1>
                </Grid>
            </Grid>

            <Grid container className='Conatainer_Recipes'
            >
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={muttonimg1} alt="Nature" style={{ width: "100%", cursor: "pointer" }}
                        />
                        <div class="text-block_Recipes1">
                            <p>Mutton Whole Carcass </p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={muttonimg2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Mutton Leg</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={muttonimg3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Mutton Mince</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={muttonimg4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Mutton Shoulder</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
            {/* chicken */}

            <Grid
                container style={{ borderBottom: "2px solid rgb(208,13,30)", marginTop: "10px" }}>
                <Grid item lg={0.9} md={0.9} sm={1.4} xs={3} className="our_meat_img1">
                    <img src={chicken} alt="" />
                </Grid>
                <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text2">
                    <h1>Chicken</h1>
                </Grid>
            </Grid>

            <Grid container className='Conatainer_Recipes'
            >
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={chickenimg1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Chicken Whole Neck</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={chickenimg2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Chicken DrumStick</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={chickenimg3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Chicken Wings</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={chickenimg4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Chicken Breast BoneLess</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
            {/* Beaf */}
            <Grid
                container style={{ borderBottom: "2px solid rgb(208,13,30)", marginTop: "10px" }}>
                <Grid item lg={0.9} md={0.9} sm={1.4} xs={3} className="our_meat_img1">
                    <img src={beef} alt="" />
                </Grid>
                <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text2">
                    <h1>Beef</h1>
                </Grid>
            </Grid>

            <Grid container className='Conatainer_Recipes'
            >
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={beefimg2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Beef Bone-in</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={beefimg1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Beef Bone-Less</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={beefimg3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Beef Mince</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={beefimg4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Beef Trotters</p>
                        </div>
                    </div>
                </Grid>
            </Grid>

            {/* Rabit */}
            <Grid
                container style={{ borderBottom: "2px solid rgb(208,13,30)", marginTop: "10px" }}>
                <Grid item lg={0.9} md={0.9} sm={1.4} xs={3} className="our_meat_img1">
                    <img src={rabbitIcom} alt="" />
                </Grid>
                <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text2">
                    <h1>Rabbit</h1>
                </Grid>
            </Grid>

            <Grid container className='Conatainer_Recipes'
            >
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={rabbitimg1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Rabbit Whole Carcass</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={rabbitimg2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Rabbit Breast Boneless</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={rabbitimg3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Rabbit Wings</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={rabbitimg4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Rabbit Bone-Less</p>
                        </div>
                    </div>
                </Grid>
            </Grid>

            {/* camel*/}
            <Grid
                container style={{ borderBottom: "2px solid rgb(208,13,30)", marginTop: "10px" }}>
                <Grid item lg={0.9} md={0.9} sm={1.4} xs={3} className="our_meat_img1">
                    <img src={cameIcon} alt="" />
                </Grid>
                <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text2">
                    <h1>Camel</h1>
                </Grid>
            </Grid>

            <Grid container className='Conatainer_Recipes'
            >
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={camelimg1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Camel Whole Carcass</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={camelimg2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Camel Breast Boneless</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={camelimg3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Camel Wings</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={camelimg4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Camel Bone-Less</p>
                        </div>
                    </div>
                </Grid>
            </Grid>



            {/*FISH*/}
            <Grid
                container style={{ borderBottom: "2px solid rgb(208,13,30)", marginTop: "10px" }}>
                <Grid item lg={0.9} md={0.9} sm={1.4} xs={3} className="our_meat_img1">
                    <img src={fish} alt="" />
                </Grid>
                <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text2">
                    <h1>Fish</h1>
                </Grid>
            </Grid>

            <Grid container className='Conatainer_Recipes'
            >
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={fish1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Fish Whole Carcass</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={fish2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Fish Breast Boneless</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={fish3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Fish Wings</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={fish4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Fish Bone-Less</p>
                        </div>
                    </div>
                </Grid>
            </Grid>


            {/*DUCk*/}
            <Grid
                container style={{ borderBottom: "2px solid rgb(208,13,30)", marginTop: "10px" }}>
                <Grid item lg={0.9} md={0.9} sm={1.4} xs={3} className="our_meat_img1">
                    <img src={fish} alt="" />
                </Grid>
                <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text2">
                    <h1>Duck</h1>
                </Grid>
            </Grid>

            <Grid container className='Conatainer_Recipes'
            >
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={duck1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Duck Whole Carcass</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={duck2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Duck Breast Boneless</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={duck3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Duck Wings</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={duck4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Duck Bone-Less</p>
                        </div>
                    </div>
                </Grid>
            </Grid>




            {/* {Aseel Chicken} */}
            {/* <Grid
                container style={{ borderBottom: "2px solid rgb(208,13,30)", marginTop: "10px" }}>
                <Grid item lg={0.9} md={0.9} sm={1.4} xs={3} className="our_meat_img1">
                    <img src={fish} alt="" />
                </Grid>
                <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text2">
                    <h1>Aseel Chicken</h1>
                </Grid>
            </Grid>

            <Grid container className='Conatainer_Recipes'
            >
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={duck1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Duck Whole Carcass</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={duck2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Duck Breast Boneless</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={duck3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Duck Wings</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7} md={2.5} sm={4.7} xs={12}>
                    <div class="container_Recipes">
                        <img src={duck4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes1">
                            <p>Duck Bone-Less</p>
                        </div>
                    </div>
                </Grid>
            </Grid> */}




        </Container>
    </div>
}