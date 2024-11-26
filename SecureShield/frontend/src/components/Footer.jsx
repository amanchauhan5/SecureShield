import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <Navbar bg="dark" variant="dark" className="p-3">
      <Container className="d-flex justify-content-center">
        <Navbar.Text className="text-light fs-6">
          © 2024 SecuredShield Insurance, Inc
        </Navbar.Text>
      </Container>
    </Navbar>
  </footer>
);

export default Footer;
