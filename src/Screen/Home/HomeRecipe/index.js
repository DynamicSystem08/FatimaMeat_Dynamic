import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';

import Recipe1 from "../../../Image/Recipe1.jpg"
import Recipe2 from "../../../Image/Recipe2.jpg"
import Recipe3 from "../../../Image/Recipe3.jpg"
import "./index.css"
function HomeRecipe() {
    // const navigate = useNavigate()
    return <div style={{ marginTop: "50px" }}>
        <Container>
            <Grid className='Recipes_Home_Main'>
                <Grid container className='Recipes_Home_Container'>
                    <Grid item lg={3.7}>
                        <div class="container">
                            <img src={Recipe1} alt="Nature" style={{ width: "100%" }} />
                            <div class="text-block">
                                <p>Dum Qeema</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={3.7}>
                        <div class="container">
                            <img src={Recipe2} alt="Nature" style={{ width: "100%" }} />
                            <div class="text-block">
                                <p>Dhuwan Gosht</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={3.7}>
                        <div class="container">
                            <img src={Recipe3} alt="Nature" style={{ width: "100%" }} />
                            <div class="text-block">
                                <p>Chicken Donuts</p>
                            </div>
                        </div>
                    </Grid>
                    <Button
                    //  onClick={() => navigate("/recipes")}
                      style={{ backgroundColor: "rgba(213, 188,157)", width: "30%", padding: "10px", color: "white",marginTop:"20px",marginBottom:"60px",height:"50px" }}>View More Recipes</Button>
                </Grid>
            </Grid>
        </Container>


    </div>
}
export default HomeRecipe