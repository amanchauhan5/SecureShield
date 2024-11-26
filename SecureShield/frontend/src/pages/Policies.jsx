import React, { useEffect, useState } from 'react';
import PolicyDetails from '../components/PolicyDetails';
import PolicyForm from '../components/PolicyForm';
import { Row, Col } from 'react-bootstrap';

const Policies = () => {
  const [policies, setPolicies] = useState([]);
  const [error, setError] = useState(null);

  const fetchPolicies = async () => {
    try {
      const response = await fetch('/api/policies');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setPolicies(data);
    } catch (error) {
      console.error('Error fetching policies:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchPolicies();
  }, []);

  return (
    <div className="home" style={{ padding: '20px' }}>
      {error && <div className="error">{error}</div>}
      <Row className="g-4">
        <Col xs={12} md={6}>
          <div className="policies">
            {policies.map((policy) => (
              <PolicyDetails
                key={policy._id}
                policy={policy}
                fetchPolicies={fetchPolicies}
              />
            ))}
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="policy-form">
            <PolicyForm onPolicyAdded={fetchPolicies} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Policies;
