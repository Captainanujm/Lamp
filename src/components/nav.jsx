// src/components/nav.js
import React, { useState } from 'react';

function Nav() {
  const [hover, setHover] = useState(null);

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Employer', path: '/employer' },
    { name: 'Worker', path: '/worker' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Lamp💡</h1>
      <ul style={styles.navLinks}>
        {links.map((link, index) => (
          <li
            key={index}
            style={styles.navItem}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={link.path}
              style={{
                ...styles.navLink,
                ...(hover === index ? styles.navLinkHover : {}),
              }}
            >
              {link.name}
              {hover === index && (
                <>
                  <span style={styles.helmet}>👷</span>
                  <span style={styles.line}></span>
                </>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#a8324e',
    padding: '0px 20px',
    color: '#fff',
    height: '60px',
  },
  title: {
    margin: 0,
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '40px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: 0,
    position: 'relative',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: '5px 10px',
    transition: 'opacity 0.9s ease',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  navLinkHover: {
    opacity: 0.99,
  },
  helmet: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2.28em',
    opacity: 1,
    zIndex: -1,
  },
  line: {
    position: 'absolute',
    bottom: '0',
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: '#ff0',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease-in',
  },
  navLinkHoverLine: {
    transform: 'scaleX(1)',
  },
};

export default Nav;
