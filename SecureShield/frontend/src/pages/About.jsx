import React from 'react';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import FeaturedPost from '../components/AboutLayout/Column';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadingNews from '../components/AboutLayout/Heading';

const About = () => {
  return (
    <Container>
      <HeadingNews />
      <FeaturedPost/>
    </Container>
  );
}

export default About;
