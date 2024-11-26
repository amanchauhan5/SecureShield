import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/Cards.css';


function Cards() {
  return (
    <div className="cards-container">
      <Row className="mb-4">
        <Col md={4} className="d-flex align-items-stretch">
          <Card className="mb-4 card-box">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/HomeImages/HealthInsurance.jpg`} className='card-img' />
            <Card.Body>
              <Card.Title className='card-title'>Health Insurance</Card.Title>
              <Card.Text className='card-text'>
                Explore our comprehensive health insurance plans that offer extensive coverage for you and your family.
                Our plans include a wide range of benefits such as hospitalization, outpatient services, preventive care,
                and emergency support. With flexible options and affordable premiums, you can choose a plan that best fits
                your needs. Join us today and enjoy peace of mind knowing that your health and well-being are our top priorities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex align-items-stretch">
          <Card className="mb-4 card-box">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/HomeImages/HomeInsurance.jpg`} className='card-img' />
            <Card.Body>
              <Card.Title className='card-title'>Home Insurance</Card.Title>
              <Card.Text className='card-text'>
                Protect your home and personal belongings with our comprehensive home insurance plans.
                Our coverage includes protection against fire, theft, natural disasters, and more.
                With customizable options, you can ensure your home and valuables are safeguarded
                against unexpected events. Secure your home today and enjoy peace of mind knowing
                that we've got you covered.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex align-items-stretch">
          <Card className="mb-4 card-box">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/HomeImages/LifeInsurance.jpg`} className='card-img' />
            <Card.Body>
              <Card.Title className='card-title'>Life Insurance</Card.Title>
              <Card.Text className='card-text'>
                Secure your family's future with our trusted life insurance plans. Our policies provide
                financial support to your loved ones in the event of your untimely passing, ensuring
                they are protected and cared for. With various options, including term life, whole life,
                and universal life insurance, you can select the plan that best suits your needs.
                Invest in life insurance today for a brighter tomorrow.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="d-flex align-items-stretch">
          <Card className="mb-4 card-box">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/HomeImages/VehicleInsurance.jpg`} className='card-img' />
            <Card.Body>
              <Card.Title className='card-title'>Vehicle Insurance</Card.Title>
              <Card.Text className='card-text'>
                Drive with confidence with our reliable vehicle insurance plans. Our coverage includes
                protection against accidents, theft, natural calamities, and third-party liabilities.
                We offer flexible policies that cater to your specific needs, whether you own a car,
                motorcycle, or commercial vehicle. Choose our vehicle insurance and hit the road with
                complete peace of mind.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex align-items-stretch ">
          <Card className="mb-4 card-box">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/HomeImages/TravelInsurance.jpg`} className='card-img' />
            <Card.Body>
              <Card.Title className='card-title'>Travel Insurance</Card.Title>
              <Card.Text className='card-text'>
                Travel with peace of mind with our comprehensive travel insurance plans. Our coverage
                includes medical emergencies, trip cancellations, lost luggage, and more, ensuring you
                are protected no matter where your adventures take you. With affordable premiums and
                extensive coverage options, you can explore the world with confidence. Get your travel
                insurance today and enjoy a worry-free journey.
              </Card.Text>


            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex align-items-stretch ">
          <Card className="mb-4 card-box">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/HomeImages/BusinessInsurance.jpg`} className='card-img' />
            <Card.Body>
              <Card.Title className='card-title'>Business Insurance</Card.Title>
              <Card.Text className='card-text'>
                Safeguard your business with our extensive business insurance plans. Our coverage
                includes property damage, liability protection, employee benefits, and business
                interruption. Whether you run a small business or a large corporation, we offer
                customizable policies to meet your unique needs. Protect your enterprise and ensure
                its continuity with our reliable business insurance solutions.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cards;
