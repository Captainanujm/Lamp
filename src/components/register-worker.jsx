// src/components/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Example regex for a 10-digit phone number
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors on change
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required.';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10 digits).';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleForgotPasswordRedirect = () => {
    navigate('/forgot-password');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Register</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address."
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="phone" style={styles.label}>Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
            required
            pattern="\d{10}"
            title="Please enter a 10-digit phone number."
          />
          {errors.phone && <p style={styles.error}>{errors.phone}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
            minLength="6"
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="confirmPassword" style={styles.label}>Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
        </div>
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      <div style={styles.optionsContainer}>
        <p style={styles.optionText}>
          Already registered?{' '}
          <span style={styles.link} onClick={handleLoginRedirect}>Log In</span>
        </p>
        <p style={styles.optionText}>
          Forgot your password?{' '}
          <span style={styles.link} onClick={handleForgotPasswordRedirect}>Recover Password</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    height: '100vh',
    margin: '30px',
  },
  title: {
    margin: '20px 0',
    fontFamily: 'Roboto, sans-serif',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    background: '#fff',
    padding: '5vw',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontFamily: 'Arial, sans-serif',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#a8324e',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
  optionsContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  optionText: {
    fontFamily: 'Arial, sans-serif',
  },
  link: {
    color: '#a8324e',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Register;
