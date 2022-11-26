import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import Container from '@mui/material/Container';
// import MetaData from '../../Component/MetaData';
import Recipe3 from "../../Image/Recipe3.jpg"
import ourRecipes1 from "../../Image/ourRecipes1.jpg"
import ourRecipes2 from "../../Image/ourRecipes2.jpg"
import ourRecipes3 from "../../Image/ourRecipes3.jpg"
import ourRecipes4 from "../../Image/ourRecipes4.jpg"
import ourRecipes5 from "../../Image/ourRecipes5.jpg"
import ourRecipes6 from "../../Image/ourRecipes6.jpg"
import ourRecipes7 from "../../Image/ourRecipes7.jpg"
import ourRecipes8 from "../../Image/ourRecipes8.jpg"
import ourRecipes9 from "../../Image/ourRecipes9.jpg"
import ourRecipes10 from "../../Image/ourRecipes10.jpg"
import ourRecipes11 from "../../Image/ourRecipes11.jpg"
import ourRecipes12 from "../../Image/ourRecipes12.jpg"
import ourRecipes13 from "../../Image/ourRecipes13.jpg"
import ourRecipes14 from "../../Image/ourRecipes14.jpg"
import ourRecipes15 from "../../Image/ourRecipes15.jpg"
import ourRecipes16 from "../../Image/ourRecipes16.jpg"

import "./index.css"

function Recipes() {
    // useEffect(() => {
    //     window.scroll(0, 0)
    // })
    return <div style={{ marginTop: "-45px" }} className="Recipes_bg">
        {/* <MetaData title="Fatima Meat | Recipes" /> */}
        <Grid container>
            <Grid item lg={12} className="our_Recipe_bg">
                <h1 className='our_meat_text'>Our Recipes</h1>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className="our_meat_img">
                <p className="our_Meat_main1" style={{marginBottom:"50px",textAlign:"center",marginTop:"50px",fontSize:"50px"}}>Our Recipes</p>
                {/* <img src={dividerDark} alt="" style={{ width: "10%" }} /> */}
            </Grid>
        </Grid>
        <Container>
            <Grid container className='Conatainer_Recipes'>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes1} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Reshmi Handi</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes2} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Mirchi Qeema</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes3} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Dum Qeema</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes4} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Bihari Boti</p>
                        </div>
                    </div>
                </Grid>

                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes5} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Pishawari Chapli Kabab</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes6} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Nawabi Kabab</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes7} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Mutton Kunna</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes8} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Hyderabadi Mutton</p>
                        </div>
                    </div>
                </Grid>

                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes9} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Chicken Shawrama</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes10} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Chicken Paratha</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes11} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Chicken Donuts</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes12} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Chicken Lasanga</p>
                        </div>
                    </div>
                </Grid>
                
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes13} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Chicken Jalfrezi</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes14} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Chicken Manchurian</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes15} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Beef Stake</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img src={ourRecipes16} alt="Nature" style={{ width: "100%" }} />
                        <div class="text-block_Recipes">
                            <p>Beef Pasanday</p>
                        </div>
                    </div>
                </Grid>

            </Grid>

        </Container>


    </div>
}
export default Recipes