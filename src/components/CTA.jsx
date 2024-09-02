import React from 'react';

function CTA() {
  return (
    <section style={styles.cta}>
      <h2 style={styles.ctaTitle}>Join Us Today!</h2>
      <p style={styles.ctaDescription}>
        Whether you're a worker looking for reliable jobs or an employer needing skilled labor, our platform is here to help.
      </p>
      <a href="/role-selection" style={styles.ctaButton}>Sign Up Now</a>
    </section>
  );
}

const styles = {
  cta: {
    textAlign: 'center',
    padding: '50px 0',
    backgroundColor: '#a8324e',
    color: '#fff',
  },
  ctaTitle: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  ctaDescription: {
    fontSize: '1.2em',
    marginBottom: '30px',
  },
  ctaButton: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#a8324e',
    backgroundColor: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default CTA;
