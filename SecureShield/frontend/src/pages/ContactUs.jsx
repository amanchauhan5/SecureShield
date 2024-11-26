import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <Container className="mt-5" >
        <h1 style={{marginBottom:'8px',fontWeight:'bold',fontFamily:'Arial',fontSize:'30px'}}>Contact Us</h1>
        <ContactForm />
    </Container>
  );
};

export default ContactUs;
