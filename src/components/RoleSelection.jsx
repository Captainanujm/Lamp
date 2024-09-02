// src/components/RoleSelection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate(`/register-${role}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Select Your Role</h2>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => handleRoleSelection('worker')}
        >
          Register as Worker
        </button>
        <button
          style={styles.button}
          onClick={() => handleRoleSelection('employer')}
        >
          Register as Employer
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '100px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#a8324e',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default RoleSelection;
