import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/PolicyDetails.css';
import UpdatePolicy from './UpdatePolicy';
import DeletePolicy from './DeletePolicy';

const PolicyDetails = ({ policy, fetchPolicies }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateClose = () => {
    setIsUpdating(false);
  };

  return (
    <Container fluid className="container-policy policy-details">
      {isUpdating ? (
        <UpdatePolicy
          policy={policy}
          fetchPolicies={fetchPolicies}
          onClose={handleUpdateClose}
        />
      ) : (
        <>
          <Row className="header-policy align-items-center">
            <Col xs={12} md={8}>
              <p className="company-title">© 2024 SecuredShield Insurance, Inc</p>
              <p className="policy-title">{policy.policyName}</p>
            </Col>
            <Col xs={12} md={4} className="text-md-end text-center">
              <Image
                src={`${process.env.PUBLIC_URL}/HomeImages/Logo.png`}
                alt="Company Logo"
                className="company-logo"
                roundedCircle
                fluid
              />
            </Col>
          </Row>

          <Table striped bordered hover responsive className="policy-table mt-4">
            <tbody>
              <tr>
                <td><strong>Policy Type</strong></td>
                <td>{policy.policyType}</td>
              </tr>
              <tr>
                <td><strong>Policy Name</strong></td>
                <td>{policy.policyName}</td>
              </tr>
              <tr>
                <td><strong>Policy Number</strong></td>
                <td>{policy.policyNumber}</td>
              </tr>
              <tr>
                <td><strong>Coverage Details</strong></td>
                <td>{policy.coverageDetails}</td>
              </tr>
              <tr>
                <td><strong>Term</strong></td>
                <td>{policy.term}</td>
              </tr>
              <tr>
                <td><strong>Premium</strong></td>
                <td>{policy.premium}</td>
              </tr>
              <tr>
                <td><strong>Insured Name</strong></td>
                <td>{policy.insuredName}</td>
              </tr>
              <tr>
                <td><strong>Insured Address</strong></td>
                <td>{policy.insuredAddress}</td>
              </tr>
              <tr>
                <td><strong>Insured Phone</strong></td>
                <td>{policy.insuredPhone}</td>
              </tr>
              <tr>
                <td><strong>Insured Email</strong></td>
                <td>{policy.insuredEmail}</td>
              </tr>
            </tbody>
          </Table>

          <Row className="mb-4">
            <Col xs={12} className="d-flex justify-content-center justify-content-md-end gap-2">
              <DeletePolicy policyId={policy._id} fetchPolicies={fetchPolicies} />
              <Button
                className="update"
                onClick={() => setIsUpdating(true)}
                style={{
                  backgroundColor: '#00E676',
                  border: 'none',
                  paddingBlock: '7px',
                  paddingInline: '20px',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  marginRight: '10px',
                  marginBottom: '20px'
                }}
              >
                Update Policy
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default PolicyDetails;
