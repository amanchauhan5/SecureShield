import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function FeaturedPost() {
  return (
    <div className="about-columns" style={{marginBottom:'50px'}}>
      <Col md={12} className="mb-4">
        <Card className="h-100 shadow-sm">
          <div className="row g-0">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary" style={{ fontSize: '20px' }}>IDENTITY</strong>
              <h3 className="mb-0" style={{ fontSize: '30px', paddingBottom: '15px' }}>Who We Are</h3>
              <p className="card-text mb-auto" style={{ fontSize: '16px' }}>
                We are not just a leading insurance company; we are your trusted guardian in times of uncertainty. With over a decade of experience in the industry, we've earned our reputation as a beacon of reliability and security. Our dedicated team is committed to safeguarding what matters most to you, ensuring a brighter, worry-free future.We go beyond merely providing insurance; we forge lasting relationships built on trust, integrity, and empathy. Our unwavering dedication to our clients is reflected in every policy we craft and every claim we handle. With us by your side, you can rest assured that your aspirations, dreams, and assets are in the most capable hands.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                src={`${process.env.PUBLIC_URL}/AboutImages/about_1.jpg`} style={{ width: '500px', height: '400px', objectFit: 'cover' }}
                alt='about_1'>
              </img>
            </div>
          </div>
        </Card>
      </Col>

      <Col md={12} className="mb-4">
        <Card className="h-100 shadow-sm">
          <div className="row g-0">
            <div className="col p-4 d-flex flex-column position-static order-md-2">
              <strong className="d-inline-block mb-2 text-success" style={{ fontSize: '20px' }}>OFFERINGS</strong>
              <h3 className="mb-0" style={{ fontSize: '30px', paddingBottom: '15px' }}>What We Offer</h3>
              <p className="card-text mb-auto" style={{ fontSize: '16px' }}>
                We offer a wide range of insurance products tailored to meet the diverse needs of our clients. Whether you need home insurance, vehicle insurance, health insurance, life insurance, or travel insurance, we have the right plan for you. Our policies are designed to provide maximum coverage and peace of mind.We understand that every individual and family has unique requirements, which is why we specialize in crafting personalized insurance plans. From customizable coverage options to flexible payment arrangements, we ensure that our policies align perfectly with your lifestyle and budget. With our dedicated team of experts guiding you every step of the way, you can navigate life's uncertainties with confidence and ease.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block order-md-1">
              <img
                src={`${process.env.PUBLIC_URL}/AboutImages/about_2.jpg`} style={{ width: '500px', height: '400px', objectFit: 'cover' }}
                alt='about_1'>
              </img>
            </div>
          </div>
        </Card>
      </Col>

      <Col md={12} className="mb-4">
        <Card className="h-100 shadow-sm">
          <div className="row g-0">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-warning" style={{ fontSize: '20px' }}>ADVANTAGE</strong>
              <h3 className="mb-0" style={{ fontSize: '30px', paddingBottom: '15px' }}>Why choose us</h3>
              <p className="card-text mb-auto" style={{ fontSize: '16px' }}>
                Choosing us means selecting a partner dedicated to your security and well-being. With our deep industry knowledge and innovative approach, we deliver services that exceed expectations. Our customer-centric philosophy ensures that you receive personalized attention and support every step of the way. Let us help you reach your objectives with confidence.From proactive risk management strategies to swift claims processing, we go above and beyond to ensure your satisfaction and peace of mind. With us by your side, you can navigate life's challenges with resilience and confidence, knowing that your security and well-being are our top priorities.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                src={`${process.env.PUBLIC_URL}/AboutImages/about_3.jpg`} style={{ width: '500px', height: '400px', objectFit: 'cover' }}
                alt='about_1'>
              </img>
            </div>
          </div>
        </Card>
      </Col>
    </div>
  );
}

export default FeaturedPost;
