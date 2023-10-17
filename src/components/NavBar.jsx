import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-light">
      <Container>
        <a href="#home"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/OYO_Rooms_%28logo%29.png/600px-OYO_Rooms_%28logo%29.png?20190710031955" alt="OYO logo" width={80}/></a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto"></Nav>
          <Nav>
          <img className='my-3' src={require('../Images/handshake.png')} alt="" width="30" height="40" />
          <Nav.Link href=" " style={{borderRight:'1px solid black'}}><span className='fw-bold'>Become a Member</span><p>Additional 10% off on stays</p></Nav.Link>
          <img className='my-3' src={require('../Images/portfolio.png')} alt="" width="30" height="40" />
          <Nav.Link  href=" " style={{borderRight:'1px solid black'}}><span className='fw-bold'>OYO for Business</span><p>Trusted by 5000 Corporates</p></Nav.Link>
          <img className='my-3' src={require('../Images/apartment.png')} alt="" width="30" height="40" />
          <Nav.Link href=" " style={{borderRight:'1px solid black'}}><span className='fw-bold'>List Your Property</span><p>Start earning in 30 mins</p></Nav.Link> 
          <img className='my-3' src={require('../Images/phone.png')} alt="" width="30" height="40" />
          <Nav.Link href=" " style={{borderRight:'1px solid black'}}><span className='fw-bold'>0124-6201611</span><p>Call us to Book now</p></Nav.Link>
          <img className='my-3' src={require('../Images/globe.png')} alt="" width="30" height="40" />
          <NavDropdown className='fw-bold my-3' title="English" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href=" " className='fw-bold py-3'style={{borderLeft:'1px solid black'}} ><img src={require('../Images/user.png')} alt=""  width={40}/> Login/Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar