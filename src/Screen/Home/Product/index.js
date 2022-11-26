import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';

import Mutton from "../../../Image/cardimg4.png"
import chicken from "../../../Image/cardimg2.png"
import Beaf from "../../../Image/cardImg1.png"

import muttonimg1 from "../../../Image/muttonimg1.jpg"
import muttonimg2 from "../../../Image/muttonimg2.jpg"
import muttonimg3 from "../../../Image/muttoming3.jpg"
import muttonimg4 from "../../../Image/muttonimg4.jpg"
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
                    <h1>Fatima Meat PRODUCT</h1>
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
                            <p>Reshmi Handi</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Mirchi Qeema</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Dum Qeema</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Bihari Boti</p>
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
                        <img src={muttonimg1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Reshmi Handi</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Mirchi Qeema</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Dum Qeema</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Bihari Boti</p>
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
                        <img src={muttonimg1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Reshmi Handi</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Mirchi Qeema</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Dum Qeema</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={muttonimg4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Bihari Boti</p>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </Container>
    </div>
}
export default Product