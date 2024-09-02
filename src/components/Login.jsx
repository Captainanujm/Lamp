// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    let validationErrors = {};
    if (!email || !validateEmail(email)) validationErrors.email = 'Enter a valid email';
    if (!password) validationErrors.password = 'Password is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Proceed with login logic, e.g., API call
      console.log('Login successful');
      navigate('/dashboard'); // Redirect to dashboard or home page
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
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
        <button type="submit" style={styles.button}>Login</button>
        <button
          type="button"
          onClick={() => navigate('/forgot-password')}
          style={styles.button}
        >
          Forgot Password
        </button>
        <button
          type="button"
          onClick={() => navigate('/register')}
          style={styles.button}
        >
          Not registered? Sign up
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '90px',
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
    padding: '3vw',
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

export default Login;
