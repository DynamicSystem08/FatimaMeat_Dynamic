import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import logo from "../../Image/logoFatima.png"
import "./index.css"
import Grid from '@mui/material/Grid';


function NavScrollExample() {
  const navigate=useNavigate()
  return <div>
    <Navbar bg="white" expand="lg" className="sticky-top">
      <Container fluid  id="header" style={{ position: "fixed", marginTop: "50px", backgroundColor: "rgb(213,188,157)" }} >
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ height: '87px', marginLeft: "8%", width: "100%", fontSize: "20px"  }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
             {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
             <Grid container>
                            <Grid item lg={1.5} onClick={()=>navigate("/home")} style={{cursor:"pointer"}} xs={2}className="text_Header">
                                HOME
                            </Grid>
                            <Grid item lg={1.5} xs={2} onClick={()=>navigate("/ourMeat")}  style={{cursor:"pointer"}} className="text_Header">
                                OUR MEAT
                            </Grid>
                            
                            <Grid item lg={1.5} xs={2} onClick={()=>navigate("/recipes")} style={{cursor:"pointer"}} className="text_Header">
                                RECIPES
                              
                            </Grid>
                            {/* <Grid item lg={0.5}></Grid> */}
                            <Grid item lg={2} xs={2} className="logo_img">
                                <img src={logo} alt="" id="img1" />
                            </Grid>
                            <Grid item lg={0.6}></Grid>
                            <Grid item lg={1.5} xs={12} onClick={()=>navigate("/fatimaFood")} style={{cursor:"pointer"}}  className="text_Header" >
                                FATIMA FOOD
                            </Grid>
                           
                            <Grid item lg={1.5} className="text_Header">
                                PRODUCT
                            </Grid>
                            <Grid item lg={1.5} onClick={()=>navigate("/location")} style={{cursor:"pointer"}} className="text_Header">
                                CONTACT US
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