import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import FAQ from './FAQ';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    isMember: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      reason: '',
      isMember: '',
    });
    console.log('Form submitted', formData);
  };

  return (
    <>
      <div style={{ boxShadow:'0px 0px 5px rgba(0,0,0,0.15)', padding:'10px 10px', marginBottom:'30px'}}>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalReason">
            <Form.Label column sm={2}>
              Reason
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                placeholder="Reason for Contact"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Are you a member?
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="isMember"
                  value="yes"
                  checked={formData.isMember === 'yes'}
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="isMember"
                  value="no"
                  checked={formData.isMember === 'no'}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" style={{ marginBottom: '30px' }}>Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      <FAQ />
    </>
  );
};

export default ContactForm;
