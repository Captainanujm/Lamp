import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import CTA from './components/CTA';
import Register from './components/register-worker';
import EmpRegister from './components/register-employer';
import RoleSelection from './components/RoleSelection';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/join" element={<CTA />} />
        <Route path="/register-worker" element={<Register />} /> {/* Add this route */}
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/register-employer" element={<EmpRegister />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
