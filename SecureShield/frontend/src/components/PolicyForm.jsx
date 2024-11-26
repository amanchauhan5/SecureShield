import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/PolicyForm.css";

const PolicyForm = ({ onPolicyAdded }) => {
  const [formData, setFormData] = useState({
    policyType: '',
    policyName: '',
    policyNumber: '',
    coverageDetails: '',
    term: '',
    premium: '',
    insuredName: '',
    insuredAddress: '',
    insuredPhone: '',
    insuredEmail: '',
    error: null
  });

  const policyTypes = ['Home Insurance', 'Vehicle Insurance', 'Health Insurance', 'Life Insurance', 'Travel Insurance'];
  const policyNames = ['Basic Plan', 'Standard Plan', 'Premium Plan', 'VIP Plan'];
  const premiums = ['$500/year', '$1000/year', '$1500/year', '$2000/year'];
  const coverageOptions = ['Basic Coverage', 'Extended Coverage', 'Full Coverage', 'Premium Coverage'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.insuredPhone.length !== 10) {
      setFormData({
        ...formData,
        error: 'Insured Phone must be exactly 10 characters.'
      });
      return;
    }

    try {
      const response = await fetch('/api/policies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error);
      }

      // Reset 
      setFormData({
        policyType: '',
        policyName: '',
        policyNumber: '',
        coverageDetails: '',
        term: '',
        premium: '',
        insuredName: '',
        insuredAddress: '',
        insuredPhone: '',
        insuredEmail: '',
        error: null
      });

      console.log('New Policy Added', json);  // callback to refresh policies

      onPolicyAdded();
    } catch (error) {
      setFormData({
        ...formData,
        error: error.message
      });
    }
  };

  return (
    <Container className="create">
      <Form onSubmit={handleSubmit}>
        <h3>Upgrade Your Coverage: Your Next Step to Better Protection</h3>

        <Form.Group className="mb-3">
          <Form.Label>Policy Type</Form.Label>
          <Form.Control as="select" name="policyType" value={formData.policyType} onChange={handleChange}>
            <option value="">Select Policy Type</option>
            {policyTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Policy Name</Form.Label>
          <Form.Control as="select" name="policyName" value={formData.policyName} onChange={handleChange}>
            <option value="">Select Policy Name</option>
            {policyNames.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Policy Number</Form.Label>
          <Form.Control type="text" name="policyNumber" value={formData.policyNumber} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Coverage Details</Form.Label>
          <Form.Control as="select" name="coverageDetails" value={formData.coverageDetails} onChange={handleChange}>
            <option value="">Select Coverage Details</option>
            {coverageOptions.map((coverage, index) => (
              <option key={index} value={coverage}>{coverage}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Term</Form.Label>
          <Form.Control type="text" name="term" value={formData.term} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Premium</Form.Label>
          <Form.Control as="select" name="premium" value={formData.premium} onChange={handleChange}>
            <option value="">Select Premium</option>
            {premiums.map((premium, index) => (
              <option key={index} value={premium}>{premium}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Insured Name</Form.Label>
          <Form.Control type="text" name="insuredName" value={formData.insuredName} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Insured Address</Form.Label>
          <Form.Control type="text" name="insuredAddress" value={formData.insuredAddress} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Insured Phone</Form.Label>
          <Form.Control type="tel" name="insuredPhone" value={formData.insuredPhone} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Insured Email</Form.Label>
          <Form.Control type="email" name="insuredEmail" value={formData.insuredEmail} onChange={handleChange} />
        </Form.Group>

        {formData.error && <Alert variant="danger">{formData.error}</Alert>}

        <Button type="submit" variant="success" className="w-100">Submit Registration</Button>
      </Form>
    </Container>
  );
};

export default PolicyForm;
