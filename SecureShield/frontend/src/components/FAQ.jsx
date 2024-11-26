import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
  return (
    <>
      <h3 style={{ marginBottom: '-30px', fontWeight: 'bold', fontFamily: 'Arial', fontSize: '30px' }}>Frequently Asked questions.</h3>
      <Accordion className="mt-5" style={{ marginBottom: '40px' }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Secured Shield Insurance?</Accordion.Header>
          <Accordion.Body>
            Secured Shield Insurance offers comprehensive insurance policies tailored to meet your needs and protect what matters most to you and your loved ones.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How can I file a claim?</Accordion.Header>
          <Accordion.Body>
            You can file a claim by contacting our customer service via phone or email. Detailed instructions are available on our website under the 'Claims' section.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What does home insurance cover?</Accordion.Header>
          <Accordion.Body>
            Our home insurance policies provide coverage for your dwelling, personal belongings, and liability. Whether it's damage from natural disasters, theft, or accidents, our policies are designed to give you peace of mind.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How can I contact customer support?</Accordion.Header>
          <Accordion.Body>
            You can contact our customer support through our website's contact form, by calling our hotline, or by emailing us at support@securedshield.com.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default FAQ;
