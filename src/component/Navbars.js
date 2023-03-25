import { Container, Nav, Navbar,  } from 'react-bootstrap';

const Navbars = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="">
        <Container>
          <Navbar.Brand href="/">MyDeviceIsBroken</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="YourDevice">YourDevice</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="SignUpPage">SignUp</Nav.Link>
              <Nav.Link eventKey={2} href="./LoginPage">
                LogIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars


