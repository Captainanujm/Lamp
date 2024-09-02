// src/components/EmpRegister.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmpRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/; // Example for 10-digit phone numbers
    return re.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword } = formData;

    let validationErrors = {};
    if (!name) validationErrors.name = 'Name is required';
    if (!email || !validateEmail(email)) validationErrors.email = 'Enter a valid email';
    if (!phone || !validatePhone(phone)) validationErrors.phone = 'Enter a valid phone number';
    if (!password) validationErrors.password = 'Password is required';
    if (password !== confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Proceed with registration logic, e.g., API call
      console.log('Registration successful');
      navigate('/login'); // Redirect to login page
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register as Employer</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </label>
        <label style={styles.label}>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.phone && <p style={styles.error}>{errors.phone}</p>}
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </label>
        <label style={styles.label}>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
        </label>
        <button type="submit" style={styles.button}>Register</button>
        <button
          type="button"
          onClick={() => navigate('/login')}
          style={styles.button}
        >
          Already registered? Log in
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '9vh',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px',
  },
  label: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#a8324e',
    color: '#fff',
    cursor: 'pointer',
    marginTop: '10px',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  },
};

export default EmpRegister;
