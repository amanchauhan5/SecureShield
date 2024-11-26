import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavigationBar.css';

const NavigationBar = ({ user, onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3" style={{ fontFamily: 'Arial' }}>
      <Container>
        <Navbar.Brand as={Link} to="/home" className="fs-4 fw-bold text-warning">
          <img
            src={`${process.env.PUBLIC_URL}/HomeImages/Logo.png`}
            alt="SecuredShield Logo"
            className="navbar-logo"
          />
          SecuredShield
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/home" className="mx-2 text-light">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about" className="mx-2 text-light">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact" className="mx-2 text-light">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/policies" className="mx-2 text-light">Your Policies</Nav.Link>
              </Nav.Item>
              {user ? (
                <Nav.Item>
                  <Nav.Link as={Link} to="/home" className="mx-2 text-light" onClick={onLogout}>Logout</Nav.Link>
                </Nav.Item>
              ) : (
                <>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/signup" className="mx-2 text-light">Sign Up</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/login" className="mx-2 text-light">Login</Nav.Link>
                  </Nav.Item>
                </>
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
