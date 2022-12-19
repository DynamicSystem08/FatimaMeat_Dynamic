import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


import Mutton from "../../../Image/cardimg3.png"
import beef from "../../../Image/cardimg2.png"
import chicken from "../../../Image/cardimg4.png"
import Beaf from "../../../Image/cardImg1.png"

import muttonimg1 from "../../../Image/muttonwholenewimg.png"
import muttonimg2 from "../../../Image/muttonlegnewimg.png"
import muttonimg3 from "../../../Image/muttonimg3.jpg"
import muttonimg4 from "../../../Image/muttonimg4.jpg"
import chickenimg1 from "../../../Image/chickenwholeimgnewimg.jpg"
import chickenimg2 from "../../../Image/chickenimg2.jpg"
import chickenimg3 from "../../../Image/chickenwigsnewimg.jpg"
import chickenimg4 from "../../../Image/chickenimg4.jpg"
import beefimg1 from "../../../Image/beefimg1.jpeg"
import beefimg2 from "../../../Image/beefimg2.jpg"
import beefimg3 from "../../../Image/beefimg3.jpg"
import beefimg4 from "../../../Image/beefimg4.jpg"

import { useNavigate } from 'react-router-dom';
import "./index.css"
import { useEffect } from 'react';

export default function OurMeat() {
    const navigate = useNavigate()

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


            <Grid container style={{ justifyContent: "center" }}>
                <Grid item lg={3.5} md={3} sm={5.6} xs={11}>
                    <Button
                        onClick={() => navigate('/ourMeat')}
                        className='our_home_recipe_botton'
                        style={{ backgroundColor: "rgba(208,13,30)", width: "100%", padding: "10px", color: "white", marginTop: "20px", marginBottom: "60px", height: "50px" }}>View More Meat</Button>
                </Grid>
            </Grid>

        </Container>
    </div>
}