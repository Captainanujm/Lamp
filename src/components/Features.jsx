import React, { useState } from 'react';

function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section style={styles.features}>
      <h2 style={styles.sectionTitle}>Our Features</h2>
      <div style={styles.featuresContainer}>
        <div
          style={{
            ...styles.featureItem,
            ...(hoveredIndex === 0 ? styles.featureItemHover : {}),
          }}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h3 style={styles.featureTitle}>Easy Job Matching</h3>
          <p style={styles.featureDescription}>
            Find work that matches your skills and experience, with our smart matching system.
          </p>
        </div>
        <div
          style={{
            ...styles.featureItem,
            ...(hoveredIndex === 1 ? styles.featureItemHover : {}),
          }}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h3 style={styles.featureTitle}>Real-Time Notifications</h3>
          <p style={styles.featureDescription}>
            Get notified instantly when new jobs are available in your area.
          </p>
        </div>
        <div
          style={{
            ...styles.featureItem,
            ...(hoveredIndex === 2 ? styles.featureItemHover : {}),
          }}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h3 style={styles.featureTitle}>Secure Payments</h3>
          <p style={styles.featureDescription}>
            Receive payments securely through our trusted platform.
          </p>
        </div>
        <div
          style={{
            ...styles.featureItem,
            ...(hoveredIndex === 3 ? styles.featureItemHover : {}),
          }}
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h3 style={styles.featureTitle}>User-Friendly Interface</h3>
          <p style={styles.featureDescription}>
            Enjoy a seamless experience with our intuitive and easy-to-navigate interface.
          </p>
        </div>
        <div
          style={{
            ...styles.featureItem,
            ...(hoveredIndex === 4 ? styles.featureItemHover : {}),
          }}
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h3 style={styles.featureTitle}>Comprehensive Support</h3>
          <p style={styles.featureDescription}>
            Access dedicated support for any issues or questions you may have.
          </p>
        </div>
        <div
          style={{
            ...styles.featureItem,
            ...(hoveredIndex === 5 ? styles.featureItemHover : {}),
          }}
          onMouseEnter={() => setHoveredIndex(5)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h3 style={styles.featureTitle}>Diverse Job Listings</h3>
          <p style={styles.featureDescription}>
            Explore a wide range of job opportunities across various industries and locations.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  features: {
    backgroundColor: '#f4f4f4',
    padding: '50px 0',
  },
  sectionTitle: {
    fontSize: '2em',
    marginBottom: '20px',
    textAlign: 'center',
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: 'column', // Arrange items in a column
    alignItems: 'center', // Center items horizontally
    gap: '20px',
    maxWidth: '800px', // Limit width for better readability
    margin: '0 auto', // Center the container
  },
  featureItem: {
    width: '100%', // Full width of the container
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  featureItemHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
  },
  featureTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#a8324e',
  },
  featureDescription: {
    fontSize: '1em',
  },
};

export default Features;
