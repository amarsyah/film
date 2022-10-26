import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigasi() {
  return (
    <Navbar className='navbar shadow' fixed='top' expand='lg'>
      <Container>
        <Navbar.Brand href="#home" className='text-light'>RPL FILM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#trending" className='nav-link text-light'>TRENDING</Nav.Link>
            <Nav.Link href="#superhero" className='nav-link text-light'>SUPERHERO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;