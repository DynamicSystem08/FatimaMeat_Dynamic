import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';

import Mutton from "../../../Image/cardimg4.png"
import chicken from "../../../Image/cardimg2.png"
import Beaf from "../../../Image/cardImg1.png"

import muttonimg1 from "../../../Image/muttonimg1.jpg"
import muttonimg2 from "../../../Image/muttonimg2.jpg"
import muttonimg3 from "../../../Image/muttonimg3.jpg"
import muttonimg4 from "../../../Image/muttonimg4.jpg"
import chickenimg1 from "../../../Image/chickenimg1.jpg"
import chickenimg2 from "../../../Image/chickenimg2.jpg"
import chickenimg3 from "../../../Image/chickenimg3.jpg"
import chickenimg4 from "../../../Image/chickenimg4.jpg"
import beefimg1 from "../../../Image/beefimg1.jpeg"
import beefimg2 from "../../../Image/beefimg2.jpg"
import beefimg3 from "../../../Image/beefimg3.jpg"
import beefimg4 from "../../../Image/beefimg4.jpg"


import "./index.css"
function Product() {
    return <div>
        <Container>
            <Grid container style={{ textAlign: "center", marginTop: "50px" }}>
                <Grid item lg={12} className="about_text">
                    <h1>About Fatima Meat</h1>
                    <p>Launched in February 2014, Khaas Meat is a special chain of retail stores which provides its customers with fresh, healthy and quality meat in the most affordable rates. Our primary objective is to provide customers with premium quality meat processed in a hygienic environment. Also, we offer customers with a wide range of products to choose from which includes beef, mutton and chicken. With Khaas Meat, you name it and we have it!</p>
                </Grid>
            </Grid>
        </Container>

        {/* Meat Product */}
        <Container style={{ marginTop: "100px" }}>
            <Grid container>
                <Grid item lg={12} style={{ textAlign: "center" }}>
                    <h1>FATIMA MEAT PRODUCT</h1>
                </Grid>
            </Grid>

            <Grid container style={{ borderBottom: "3px solid rgb(225,195,157)", marginTop: "10px" }}>
                <Grid item lg={0.9} md={1} sm={2} xs={2.5} className="our_meat_img1">
                    <img src={Mutton} alt="" />
                </Grid>
                <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text1">
                    <h1>MUTTON</h1>
                </Grid>
            </Grid>

            <Grid container className='Conatainer_Recipes'>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Mutton Whole Carcass </p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Mutton Leg</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Mutton Mince</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Mutton Shoulder</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
{/* chicken */}

<Grid container style={{ borderBottom: "3px solid rgb(225,195,157)", marginTop: "10px" }}>
                <Grid item lg={0.9} md={1} sm={2} xs={2.5} className="our_meat_img1">
                    <img src={chicken} alt="" />
                </Grid>
                <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text1">
                    <h1>Chicken</h1>
                </Grid>
            </Grid>

            <Grid container className='Conatainer_Recipes'>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={chickenimg1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Chicken Whole Neck</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={chickenimg2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Chicken DrumStick</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={chickenimg3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Chicken Wings</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={chickenimg4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Chicken Breast BoneLess</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
{/* Beaf */}
<Grid container style={{ borderBottom: "3px solid rgb(225,195,157)", marginTop: "10px" }}>
                <Grid item lg={0.9} md={1} sm={2} xs={2.5} className="our_meat_img1">
                    <img src={Beaf} alt="" />
                </Grid>
                <Grid item lg={2} md={2.5} sm={2.5} xs={2.5} className="our_meat_text1">
                    <h1>Beaf</h1>
                </Grid>
            </Grid>

            <Grid container className='Conatainer_Recipes'>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={beefimg2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Beef Bone-in</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={beefimg1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Beef Bone-Less</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={beefimg3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Beef Mince</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={beefimg4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Beef Trotters</p>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </Container>
    </div>
}
export default Product