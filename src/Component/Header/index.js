

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import logo from "../../Image/logo5.png"
import "./index.css"
import Grid from '@mui/material/Grid';


function NavScrollExample() {
  const navigate = useNavigate()
  return <div  className='responsive_top_header'>
    <Navbar style={{backgroundColor:"black"}} expand="lg" className="sticky-top " >
      <Container fluid id="header" style={{ position: "fixed", marginTop: "50px",width:"100%", backgroundColor: "rgb(25,25,25)" }} >
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" className='navbar-light' style={{color:"white"}} />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0 " id="b"
            style={{ height: '87px', width: "100%", fontSize: "20px", backgroundColor: "rgb(25,25,25)"}}
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
              <Grid item lg={0.8} md={0.6}></Grid>
              <Grid item lg={0.9} md={1} sm={10} xs={12} onClick={() => navigate("/home")} className="text_Header">
                <p className='responsive_header'>HOME</p>
              </Grid>
              <Grid item lg={1.4} md={1.4} sm={10}  xs={10} onClick={() => navigate("/ourMeat")} style={{ cursor: "pointer" }} className="text_Header">
              <p className='responsive_header'>PRODUCT</p>
              </Grid>

              <Grid item lg={2} md={2} sm={10} xs={10} onClick={() => navigate("/recipes")} style={{ cursor: "pointer" }} className="text_Header">
              <p className='responsive_header1'>RECIPES</p>
              </Grid>
              {/* <Grid item lg={0.5}></Grid> */}
              <Grid item lg={2} md={2}  sm={5} xs={12} className="logo_img">
                <img src={logo} alt="" id="img1"  />
              </Grid>
              <Grid item lg={0.6} md={0.6}></Grid>
              <Grid item lg={1.6} md={1.8} sm={10} xs={10} onClick={() => navigate("/fatimaFood")} style={{ cursor: "pointer" }} className="text_Header" >
              <p className='responsive_header2'> CONTACT US</p>
              </Grid>

              <Grid item lg={1.3} md={1.3} sm={10} xs={10} onClick={() => navigate("/product")} style={{ cursor: "pointer" }} className="text_Header">
              <p className='responsive_header'>Our Meat</p>
              </Grid>
              <Grid item lg={1} md={1} xs={10} onClick={() => navigate("/cart")} style={{ cursor: "pointer" }} className="text_Header">
              <p className='responsive_header'> CART</p>
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



// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavScrollExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;