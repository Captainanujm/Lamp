import React from 'react';

function AboutUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>

      {/* Our Mission */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Mission</h2>
        <p style={styles.paragraph}>
          Our mission is to deliver innovative and impactful solutions that address real-world challenges. 
          We are dedicated to leveraging technology to improve lives and contribute positively to our communities. 
          Our projects focus on enhancing safety, accessibility, and education through cutting-edge technology.
        </p>
      </section>

      {/* Our Team */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Team</h2>
        <div style={styles.teamInfo}>
          <h3>Team Name: Unknown</h3>
          <p>Team Leader: Anuj</p>
          <p>Team Mentor: Akansha Mam</p>
          <h3>Team Members:</h3>
          <ul style={styles.memberList}>
            <li>Ayush - Lead Developer</li>
            <li>Avanish - UI/UX Designer</li>
            <li>Avira - Frontend Developer</li>
            <li>Anubhav - Backend Developer</li>
            <li>Anand - Project Coordinator</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Projects</h2>
        <p style={styles.paragraph}>
          We are currently working on several groundbreaking projects that aim to solve pressing issues in various domains:
        </p>
        <ul style={styles.projectList}>
          <li>
            <strong>Coastal Tourism Safety App:</strong> A mobile application that assesses the safety of coastal tourism sites 
            using real-time weather and oceanic data.
          </li>
          <li>
            <strong>Railway Navigation Solution:</strong> A comprehensive navigation tool for railway stations to assist 
            passengers in locating facilities and destinations within the station premises.
          </li>
          <li>
            <strong>Women Safety Analytics:</strong> Software that uses real-time monitoring and analytics to enhance 
            the safety of women in public spaces.
          </li>
          <li>
            <strong>Educational Tools for Rural India:</strong> Solutions designed to improve educational infrastructure 
            and connectivity in rural areas through remote learning and resource management tools.
          </li>
          <li>
            <strong>Constitutional Literacy Platform:</strong> A gamified tool to spread knowledge about the Constitution of India 
            in an engaging and accessible manner.
          </li>
        </ul>
      </section>

      {/* Our Approach */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Approach</h2>
        <p style={styles.paragraph}>
          At Unknown, we follow a user-centric approach in all our projects. We start by understanding the needs and challenges 
          faced by our target users. Our team conducts thorough research and collaborates with stakeholders to ensure that our solutions 
          are practical and impactful. We adopt agile methodologies to iterate on our designs and features, ensuring that we deliver 
          high-quality results that meet user expectations.
        </p>
      </section>

      {/* Testimonials */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Testimonials</h2>
        <div style={styles.testimonials}>
          <blockquote style={styles.blockquote}>
            "The team at Unknown delivered a top-notch solution that exceeded our expectations. Their commitment and expertise 
            were evident throughout the project." - Client A
          </blockquote>
          <blockquote style={styles.blockquote}>
            "Working with Unknown was a fantastic experience. They were responsive, innovative, and dedicated to delivering 
            a high-quality product." - Client B
          </blockquote>
        </div>
      </section>

      {/* Contact Us */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions, suggestions, or would like to collaborate with us, please reach out to us:
        </p>
        <p style={styles.paragraph}>
          Email: <a href="mailto:asfg6630@gmail.com" style={styles.emailLink}>asfg6630@gmail.com</a>
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
    lineHeight: '1.6',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2.5em',
    color: '#333',
  },
  section: {
    marginBottom: '40px',
  },
  subHeader: {
    marginBottom: '15px',
    fontSize: '2em',
    color: '#555',
  },
  teamInfo: {
    marginBottom: '20px',
  },
  memberList: {
    listStyleType: 'none',
    padding: 0,
  },
  projectList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  paragraph: {
    marginBottom: '15px',
    fontSize: '1.1em',
    color: '#666',
  },
  testimonials: {
    margin: '20px 0',
    padding: '10px',
    borderLeft: '3px solid #a8324e',
    backgroundColor: '#f9f9f9',
  },
  blockquote: {
    fontStyle: 'italic',
    margin: '10px 0',
  },
  emailLink: {
    color: '#a8324e',
    textDecoration: 'none',
  },
};

export default AboutUs;
