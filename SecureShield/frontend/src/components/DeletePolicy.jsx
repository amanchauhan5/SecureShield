import React from 'react';

const DeletePolicy = ({ policyId, fetchPolicies }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/policies/${policyId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete the policy');
      }
      fetchPolicies(); // Refresh
    } catch (error) {
      console.error('Error deleting policy:', error);
    }
  };

  return (
    <button className="delete" onClick={handleDelete}
      style={{
        backgroundColor: '#FF1744',
        border: 'none',
        paddingBlock: '7px',
        paddingInline: '20px',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '10px',
        cursor: 'pointer',
        marginRight:'10px',
        marginBottom:'20px'
      }}>
      Delete Policy
    </button>
  );
};

export default DeletePolicy;
