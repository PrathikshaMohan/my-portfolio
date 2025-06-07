// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Nav';

const Home = () => {
  const homeStyle = {
    backgroundColor: '#121212',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={homeStyle}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
