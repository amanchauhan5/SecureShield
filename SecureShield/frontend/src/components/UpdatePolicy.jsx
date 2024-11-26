import React, { useState, useEffect } from 'react';

const UpdatePolicy = ({ policy, fetchPolicies, onClose }) => {
  const [updatedPolicy, setUpdatedPolicy] = useState({ ...policy });

  useEffect(() => {
    setUpdatedPolicy({ ...policy });
  }, [policy]);

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPolicy(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/policies/${policy._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPolicy),
      });
      if (!response.ok) {
        throw new Error('Failed to update the policy');
      }
      await response.json();
      fetchPolicies(); // Refresh the policy list
      onClose(); // Close the update form
    } catch (error) {
      console.error('Error updating policy:', error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <table className="table table-striped policy-table">
        <tbody>
          {Object.keys(updatedPolicy).map((key) => (
            <tr key={key}>
              <td><strong>{key}</strong></td>
              <td>
                <input
                  type="text"
                  name={key}
                  value={updatedPolicy[key]}
                  onChange={handleUpdateChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit" className="update"
        style={{
          backgroundColor: '#00C853',
          border: 'none',
          paddingBlock: '7px',
          paddingInline: '20px',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >Update Details</button>
      <button type="button" onClick={onClose}
        style={{
          backgroundColor: '#00C853',
          border: 'none',
          paddingBlock: '7px',
          paddingInline: '20px',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '10px',
          marginLeft:'10px',
          marginBottom:'15px',
          cursor: 'pointer'
        }}
      >Cancel</button>
    </form>
  );
};

export default UpdatePolicy;
