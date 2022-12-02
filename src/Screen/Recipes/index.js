import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import MetaData from '../../Component/MetaData';
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
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import img1 from "../../Image/BeefBoneless.jpg"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};



function Recipes() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [one,setOne]=useState(false);
    const oneOpen=()=>setOne(true);
    const oneClose=()=>setOne(false)
    const [two,setTwo]=useState(false);
    const twoOpen=()=>setTwo(true);
    const twoClose=()=>setTwo(false)
    const [four, setFour] = useState(false)
    const fourOpen = () => setFour(true)
    const fourClose = () => setFour(false)
    const [five, setFive] = useState(false)
    const fiveOpen = () => setFive(true)
    const fiveClose = () => setFive(false)
    const [six, setSix] = useState(false)
    const sixOpen = () => setSix(true)
    const sixClose = () => setSix(false)
    const [seven, setSeven] = useState(false)
    const sevenOpen = () => setSeven(true)
    const sevenClose = () => setSeven(false)
    const [eight, setEight] = useState(false)
    const eightOpen = () => setEight(true)
    const eightClose = () => setEight(false)
    const [nine, setNine] = useState(false)
    const nineOpen = () => setNine(true)
    const nineClose = () => setNine(false)
    const [ten, setTen] = useState(false)
    const tenOpen = () => setTen(true)
    const tenClose = () => setTen(false)
    const [tens, setTens] = useState(false)
    const tensOpen = () => setTens(true)
    const tensClose = () => setTens(false)
    const [therteen, setTherteen] = useState(false)
    const therteenOpen = () => setTherteen(true)
    const therteenClose = () => setTherteen(false)
    const [fourteen, setFourteen] = useState(false)
    const fourteenOpen = () => setFourteen(true)
    const fourteenClose = () => setFourteen(false)
    const [fiveteen, setFiveteen] = useState(false)
    const fiveteenOpen = () => setFiveteen(true)
    const fiveteenClose = () => setFiveteen(false)
    const [seventeen, setSeventeen] = useState(false)
    const seventeenOpen = () => setSeventeen(true)
    const seventeenClose = () => setSeventeen(false)
    const [sixteen, setSixteen] = useState(false)
    const sixteenOpen = () => setSixteen(true)
    const sixteenClose = () => setSixteen(false)

    // useEffect(() => {
    //     window.scroll(0, 0)
    // })
    return <div style={{ marginTop: "-10px",backgroundColor:"white",paddingBottom:"30px" }} className="Recipes_bg">
        <MetaData title="Fatima Meat | Recipes" />
        <Grid container>
            <Grid item lg={12} className="our_Recipe_bg">
                <h1 className='our_meat_text' style={{ padding: "100px" }}>Our Recipes</h1>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className="our_meat_img">
                <p className="our_Meat_main1" style={{ marginBottom: "50px", textAlign: "center", marginTop: "50px", fontSize: "50px" }}>Our Recipes</p>
                {/* <img src={dividerDark} alt="" style={{ width: "10%" }} /> */}
            </Grid>
        </Grid>
        <Container>
            <Grid container className='Conatainer_Recipes'>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">

                        <img onClick={handleOpen} src={ourRecipes1} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a First
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes1} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Reshmi Handi</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={oneOpen} src={ourRecipes2} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={one}
                            onClose={oneClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a Second
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                  Bilal  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes2} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Mirchi Qeema</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={twoOpen} src={ourRecipes3} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={two}
                            onClose={twoClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    T in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes3} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Dum Qeema</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={fourOpen} src={ourRecipes4} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={four}
                            onClose={fourClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes4} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Bihari Boti</p>
                        </div>
                    </div>
                </Grid>

                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={fiveOpen} src={ourRecipes5} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={five}
                            onClose={fiveClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a 
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes5} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Pishawari Chapli Kabab</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={sixOpen} src={ourRecipes6} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={six}
                            onClose={sixClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes6} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Nawabi Kabab</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={sevenOpen} src={ourRecipes7} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={seven}
                            onClose={sevenClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {/* Text in a modal */}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes7} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Mutton Kunna</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={eightOpen} src={ourRecipes8} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={eight}
                            onClose={eightClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes8} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Hyderabadi Mutton</p>
                        </div>
                    </div>
                </Grid>

                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={nineOpen} src={ourRecipes9} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={nine}
                            onClose={nineClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes9} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Chicken Shawrama</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={tenOpen} src={ourRecipes10} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={ten}
                            onClose={tenClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes10} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Chicken Paratha</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={tensOpen} src={ourRecipes11} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={tens}
                            onClose={tensClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes11} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Chicken Donuts</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={therteenOpen} src={ourRecipes12} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={therteen}
                            onClose={therteenClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes12} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Chicken Lasanga</p>
                        </div>
                    </div>
                </Grid>

                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={fourteenOpen} src={ourRecipes13} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={fourteen}
                            onClose={fourteenClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes13} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Chicken Jalfrezi</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={fiveteenOpen} src={ourRecipes14} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={fiveteen}
                            onClose={fiveteenClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* <img src={ourRecipes14} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Chicken Manchurian</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={sixteenOpen} src={ourRecipes15} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={sixteen}
                            onClose={sixteenClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>


                        {/* <img src={ourRecipes15} alt="Nature" style={{ width: "100%" }} /> */}
                        <div class="text-block_Recipes">
                            <p>Beef Stake</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2.7}>
                    <div class="container_Recipes">
                        <img onClick={seventeenOpen} src={ourRecipes16} alt="" style={{ width: "100%", cursor: "pointer" }} />
                        <Modal
                            open={seventeen}
                            onClose={seventeenClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>


                        {/* <img src={ourRecipes16} alt="Nature" style={{ width: "100%" }} /> */}
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