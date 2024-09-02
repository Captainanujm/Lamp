import React, { useState } from 'react';
import businessImage from '../images/business.png';
import demandImage from '../images/demand.png';
import supplyImage from '../images/supply.png';
import backgroundImage from '../images/background.jpg'; // Import the background image

function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <section style={styles.hero}>
      <div style={styles.overlay}></div>
      
      <div style={styles.content}>
        <h1 style={styles.heroTitle}>Empowering Workers and Employers</h1>
        <p style={styles.heroDescription}>
          Connecting skilled workers with employers to create a sustainable workforce.
        </p>
        <a
          href="/register"
          style={{
            ...styles.heroButton,
            ...(isButtonHovered ? styles.heroButtonHover : {}),
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Get Started
        </a>
        
        <div style={styles.joinUs}>
          <h2 style={styles.joinUsTitle}>Join Us For</h2>
          <div style={styles.optionsContainer}>
            <div
              style={{
                ...styles.option,
                ...(hoveredIndex === 0 ? styles.optionHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={businessImage} alt="Business Purpose" style={styles.optionImage} />
              <div style={styles.optionContent}>
                <h3 style={styles.optionTitle}>Business Purpose</h3>
                <p style={styles.optionDescription}>
                  Connect with skilled professionals for your business needs.
                </p>
              </div>
            </div>
            <div
              style={{
                ...styles.option,
                ...(hoveredIndex === 1 ? styles.optionHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={demandImage} alt="Demand [Want Workers]" style={styles.optionImage} />
              <div style={styles.optionContent}>
                <h3 style={styles.optionTitle}>Demand [Want Workers]</h3>
                <p style={styles.optionDescription}>
                  Post job openings and find the best candidates quickly.
                </p>
              </div>
            </div>
            <div
              style={{
                ...styles.option,
                ...(hoveredIndex === 2 ? styles.optionHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={supplyImage} alt="Supply [Want Job]" style={styles.optionImage} />
              <div style={styles.optionContent}>
                <h3 style={styles.optionTitle}>Supply [Want Job]</h3>
                <p style={styles.optionDescription}>
                  Browse and apply for job opportunities that match your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    textAlign: 'center',
    padding: '50px 20px',
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    color: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
  },
  heroTitle: {
    fontSize: '3em',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#fff',
  },
  heroDescription: {
    fontSize: '1.5em',
    fontWeight: '300',
    marginBottom: '30px',
    color: '#fff',
  },
  heroButton: {
    padding: '10px 20px',
    fontSize: '1.1em',
    color: '#fff',
    backgroundColor: '#a8324e',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    fontWeight: '600',
  },
  heroButtonHover: {
    backgroundColor: '#822c40', // Darker shade for hover effect
    transform: 'scale(1.05)',
  },
  joinUs: {
    marginTop: '40px',
  },
  joinUsTitle: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#fff',
  },
  optionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  option: {
    width: '250px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    color: '#333',
  },
  optionHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  optionImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  optionContent: {
    paddingTop: '10px',
  },
  optionTitle: {
    fontSize: '1.6em',
    fontWeight: '600',
    marginBottom: '10px',
  },
  optionDescription: {
    fontSize: '1.1em',
  },
};

export default Hero;
