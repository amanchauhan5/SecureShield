import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Heading.css';

const HeadingNews = () => {
  return (
    <div className="header-news">
      <Container className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary bg-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/AboutImages/Home.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '700px',
          overflow: 'hidden',
          color: '#FFD600'
        }}
      >
      </Container>
    </div>
  );
}

export default HeadingNews;
