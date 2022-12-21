import { useSelector } from 'react-redux'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import logo from "../../Image/logo5.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import HomeIcon from '@mui/icons-material/Home';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Grid from '@mui/material/Grid';

import "./index.css"

import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 37,
    top: -5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    color: "white",
    backgroundColor: "rgb(208,13,30)"
  },
}));

function NavScrollExample() {
  const navigate = useNavigate()

  const reduxCartItems = useSelector(state => state.cartReducer.cart)

  return <div className='responsive_top_header'>
    <Navbar style={{ backgroundColor: "black" }} expand="lg" className="sticky-top " >
      <Container fluid id="header" style={{ position: "fixed", marginTop: "50px", width: "100%", backgroundColor: "rgb(25,25,25)" }} >
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" className='navbar-light' style={{ color: "white" }} />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0 " id="b"
            navbarScroll>
            <Grid container>
              <Grid item lg={0.6} md={0.2}></Grid>
              <Grid item lg={1.3} md={1.3} sm={10} xs={12} onClick={() => navigate("/home")} className="text_Header">
                <Grid container>
                  <Grid item lg={2.3} md={3} xs={4}>
                    <HomeIcon className="HEADER_ICON" />
                  </Grid>
                  <Grid item lg={9} md={6} xs={2}>
                    <p className='responsive_header'>HOME</p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={1.6} md={1.8} sm={10} xs={12} onClick={() => navigate("/products")} style={{ cursor: "pointer" }} className="text_Header">
                {/* <p className='responsive_headerp'>PRODUCTS</p> */}
                <Grid container>
                  <Grid item lg={2} md={2.5} xs={4}>
                    <Inventory2Icon className="HEADER_ICON" />
                  </Grid>
                  <Grid item lg={9} xs={2}>
                    <p className='responsive_header'>PRODUCTS</p>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={1.6} md={1.3} sm={10} xs={10} onClick={() => navigate("/recipes")} style={{ cursor: "pointer" }} className="text_Header">
                {/* <p className='responsive_header1'>RECIPES</p> */}
                <Grid container>
                  <Grid item lg={2} md={3.5} xs={5}>
                    <MenuBookIcon className="HEADER_ICON" />
                  </Grid>
                  <Grid item lg={9} xs={2.5}>
                    <p className='responsive_header'>RECIPES</p>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item lg={0.5}></Grid> */}
              <Grid item lg={1.4} md={1.5} sm={5} xs={12} className="logo_img">
                <img src={logo} alt="" id="img101" />
              </Grid>
              <Grid item lg={0.6} md={0.6}></Grid>
              <Grid item lg={1.6}md={2} sm={10} xs={10} onClick={() => navigate("/contactUs")} style={{ cursor: "pointer" }} className="text_Header" >
                {/* <p className='responsive_header2'> CONTACT US</p> */}
                <Grid container>
                  <Grid item lg={1.5} xs={3}>
                    <EditLocationIcon sx={{ fontSize: "24px" }} className="HEADER_ICON1" />
                  </Grid>
                  <Grid item lg={9} xs={8}>
                    <p className='responsive_header'>CONTACT US</p>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={2.3} md={2} sm={10} xs={10} onClick={() => navigate("/ourMeat")} style={{ cursor: "pointer" }} className="text_Header">
                {/* <p className='responsive_headero'>OUR MEAT</p> */}
                <Grid container>
                  <Grid item lg={1.4} md={2.5} xs={3}>
                    <KebabDiningIcon className="HEADER_ICON1" />
                  </Grid>
                  <Grid item lg={9} md={7} xs={8}>
                    <p className='responsive_header'>CORPORATE PRODUCT</p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={1} md={1} xs={10} onClick={() => navigate("/cart")} style={{ cursor: "pointer" }} className="text_Header">
                <p className='responsive_headerc'>
                  {/* <ShoppingCartIcon style={{ fontSize: "35px", marginTop: "-10px" }} /> */}
                  <IconButton aria-label="cart" >

                    <StyledBadge badgeContent={reduxCartItems.length}  >
                      <ShoppingCartIcon style={{ color: "white", fontSize: "35px", marginTop: "-10px" }} />
                    </StyledBadge>

                  </IconButton>
                </p>
              </Grid>
            </Grid>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <h1 style={{ marginTop: "2000px" }}>ALLAH</h1> */}
  </div>
}

export default NavScrollExample;

