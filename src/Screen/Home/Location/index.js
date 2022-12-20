import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AddIcon from '@mui/icons-material/Add';

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MetaData from '../../../Component/MetaData';

import "./index.css"
function Location() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShows = () => setShow(true);
    const [lahore, setLahore] = useState(false)
    const lahoreLocation = () => setLahore(true);
    const LahoreClose = () => setLahore(false);
    const [rawalpindi, setRawalpindi] = useState(false)
    const RwalpindiLocation = () => setRawalpindi(true);
    const RawalpindiClose = () => setRawalpindi(false);
    const [gurjawala, setGurjawal] = useState(false)
    const gurJawala = () => setGurjawal(true)
    const gurJawalaClose = () => setGurjawal(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return <div style={{ backgroundColor: "white", marginTop: "52px" }}>
        <MetaData title="Fatima Meat | Contact Us" />

        <div className="background_location">

            <h1 className="location_heading">FATIMA MEAT LOCATION</h1>
            <Container>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} className="location_img">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28922.729504401806!2d67.1145400498032!3d25.02249281236537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb346f4ee2f512f%3A0x75bf3f7abcacdafc!2sGulshan-e-Maymar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1669604660733!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7539.068415314783!2d74.45713239887897!3d31.471629739902188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190920e59fccd3%3A0x56cae6ee2c7a479b!2sDHA%20Phase%206%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1671353338036!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Grid>
                </Grid>
                <Grid container className='our_location'>
                    <Grid item lg={3.3} md={3.5} sm={3.5} xs={12} className="our_location_text">
                        <Grid container>
                            <Grid item lg={2.5} md={2} sm={2.5}>
                                <FmdGoodIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(208,13,30)" }} />
                            </Grid>
                            <Grid item lg={3} md={4} sm={6} xs={7.5} className="location_text">
                                <Button style={{ backgroundColor: "transparent", color: "black", border: "none", marginTop: "-3px" }} onClick={handleShows}>
                                    KARACHI
                                </Button>
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton >
                                        <Modal.Title >KARACHI LOCATION</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Building no 68,Shop no 1, bukhari commerical.dha,Karachi.
                                    </Modal.Body>
                                    {/* <hr></hr> */}
                                </Modal>
                            </Grid>
                            <Grid item lg={3} md={3}></Grid>
                            <Grid item lg={2} md={2}>
                                <AddIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(208,13,30)" }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3.3} md={3.5} sm={3.5} xs={12} className="our_location_text">
                        <Grid container>
                            <Grid item lg={2.5} md={2} sm={2.5}>
                                <FmdGoodIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(208,13,30)" }} />
                            </Grid>
                            <Grid item lg={3} md={7} sm={6} xs={7.5} className="location_text">
                                <Button style={{ backgroundColor: "transparent", color: "black", border: "none", marginTop: "-3px" }} onClick={lahoreLocation}>
                                    LAHORE
                                </Button>
                                <Modal
                                    show={lahore}
                                    onHide={LahoreClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>LAHORE LOCATION</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Plaza no 3, Phase 6 commercial, dha, lahore.
                                    </Modal.Body>
                                </Modal>
                            </Grid>
                            <Grid item lg={3}></Grid>
                            <Grid item lg={2} md={2}>
                                <AddIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(208,13,30)" }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3.3} md={3.5} sm={3.5} xs={12} className="our_location_text">
                        <Grid container>
                            <Grid item lg={2.5} md={2} sm={2.5}>
                                <FmdGoodIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(208,13,30)" }} />
                            </Grid>
                            <Grid item lg={3} md={7} xs={7.5} sm={6} className="location_text">
                                <Button style={{ backgroundColor: "transparent", color: "black", border: "none", marginTop: "-3px" }} onClick={RwalpindiLocation}>
                                    RAWALPINDI
                                </Button>
                                <Modal
                                    show={rawalpindi}
                                    onHide={RawalpindiClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>RAWAL PINDI LOCATION</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Csd, lal kurti, Rawalpindi
                                    </Modal.Body>

                                    {/* <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer> */}
                                </Modal>
                            </Grid>
                            <Grid item lg={3}></Grid>
                            <Grid item lg={2} md={2}>
                                <AddIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(208,13,30)" }} />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </div>
    </div>

}
export default Location