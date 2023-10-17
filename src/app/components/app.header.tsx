'use client'
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppHeader() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container >
        <Navbar.Brand>
            <Link href="/" className='navbar-brand'>Trần Trường</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link href="/facebook" className='nav-link'>Facebook</Link>
            <Link href="/youtube" className='nav-link'>Youtube</Link>
            <Link href="/tiktok" className='nav-link'>Tiktok</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;