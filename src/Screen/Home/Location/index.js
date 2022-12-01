import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AddIcon from '@mui/icons-material/Add';

import React, { useState } from 'react';
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


    return <div style={{ backgroundColor: "rgb(58,26,15)" ,paddingTop:"20px",paddingBottom:"080px"}}>

        <h1 className="location_heading">FATIMA MEAT LOCATION</h1>
        <Container>
            <Grid container>
                <Grid item lg={12} className="location_img">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28922.729504401806!2d67.1145400498032!3d25.02249281236537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb346f4ee2f512f%3A0x75bf3f7abcacdafc!2sGulshan-e-Maymar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1669604660733!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Grid>
            </Grid>
            <Grid container className='our_location'>
                <Grid item lg={2.7} className="our_location_text">
                    <Grid container>
                        <Grid item lg={2.5}>
                            <FmdGoodIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                        <Grid item lg={3} className="location_text">
                            <Button style={{ backgroundColor: "transparent", color: "black", border: "none", marginTop: "-3px" }} onClick={handleShows}>
                                KARACHI
                            </Button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton style={{ backgroundColor: "rgb(58,26,15)", color: "white" }}>
                                    <Modal.Title >KARACHI LOCATION</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    I will not close if you click outside me. Don't even try to
                                </Modal.Body>
                                <hr></hr>
                                <Modal.Body>
                                    I will not close if you click outside me. Don't even try to press
                                </Modal.Body>
                            </Modal>
                        </Grid>
                        <Grid item lg={3}></Grid>
                        <Grid item lg={2}>
                            <AddIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={2.7} className="our_location_text">
                    <Grid container>
                        <Grid item lg={2.5}>
                            <FmdGoodIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                        <Grid item lg={3} className="location_text">
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
                                    I will not close if you click outside me. Don't even try to press
                                    escape key.
                                </Modal.Body>
                            </Modal>
                        </Grid>
                        <Grid item lg={3}></Grid>
                        <Grid item lg={2}>
                            <AddIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={2.7} className="our_location_text">
                    <Grid container>
                        <Grid item lg={2.5}>
                            <FmdGoodIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                        <Grid item lg={3} className="location_text">
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
                                    I will not close if you click outside me. Don't even try to press
                                    escape key.
                                </Modal.Body>
                                <Modal.Body>
                                    I will not close if you click outside me. Don't even try to press
                                    escape key.
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
                        <Grid item lg={2}>
                            <AddIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={2.7} className="our_location_text">
                    <Grid container>
                        <Grid item lg={2.5}>
                            <FmdGoodIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                        <Grid item lg={3} className="location_text">
                            <Button style={{ backgroundColor: "transparent", color: "black", border: "none", marginTop: "-3px" }} onClick={gurJawala}>
                                GURJANAWALA
                            </Button>
                            <Modal
                                show={gurjawala}
                                onHide={gurJawalaClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>GUJRANWALA</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    I will not close if you click outside me. Don't even try to press
                                    escape key.
                                </Modal.Body>
                                <Modal.Body>
                                    I will not close if you click outside me. Don't even try to press
                                    escape key.
                                </Modal.Body>
                                {/* <Modal.Footer>
                                    <Button variant="secondary" onClick={gurJawalaClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer> */}
                            </Modal>
                        </Grid>
                        <Grid item lg={3}></Grid>
                        <Grid item lg={2}>
                            <AddIcon style={{ fontSize: "55px", paddingLeft: "12px", color: "rgb(213,188,157)" }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>

}
export default Location