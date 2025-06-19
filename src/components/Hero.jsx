import React from 'react';
import { motion } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        background: 'linear-gradient(-45deg, #FAACA8, #DDD6F3, #FAACA8)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
        color: '#1b1b1b',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
      id="home"
    >
      {/* Floating circles */}
      <div style={floatingStyles.circle1}></div>
      <div style={floatingStyles.circle2}></div>

      {/* Typing heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: '3.2rem',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#4B0082',
        }}
      >
        Hello, I'm{' '}
        <span style={{ color: '#6A0DAD' }}>
          <Typewriter
            words={['Prathiksha', 'a Developer', 'a Creator']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{
          fontSize: '1.2rem',
          maxWidth: '700px',
          lineHeight: '1.6',
          marginBottom: '2.5rem',
          color: '#333',
        }}
      >
        Empowering innovation through elegant web development & scalable software solutions.
      </motion.p>

      {/* Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: [20, 0, -2, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 1.4 },
          y: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
            delay: 1.4,
          },
        }}
        whileHover={{ scale: 1.08, boxShadow: '0 0 15px #6A0DAD' }}
        whileTap={{ scale: 0.95 }}
      >
        <PDFDownloadLink
          document={<ResumePDF />}
          fileName="Prathiksha_Resume.pdf"
          style={{
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontWeight: '600',
            color: '#fff',
            backgroundColor: '#4B0082',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(75, 0, 130, 0.3)',
            transition: 'all 0.3s ease-in-out',
            textDecoration: 'none',
          }}
        >
          {({ loading }) => (loading ? 'Generating...' : '⬇ Download Resume')}
        </PDFDownloadLink>
      </motion.div>

      {/* Keyframes for background */}
      <style>{`
        @keyframes gradientShift {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
      `}</style>
    </section>
  );
};

// Decorative floating elements
const floatingStyles = {
  circle1: {
    position: 'absolute',
    top: '10%',
    left: '5%',
    width: '80px',
    height: '80px',
    backgroundColor: '#ffffff40',
    borderRadius: '50%',
    animation: 'float1 6s ease-in-out infinite',
  },
  circle2: {
    position: 'absolute',
    bottom: '15%',
    right: '10%',
    width: '50px',
    height: '50px',
    backgroundColor: '#ffffff30',
    borderRadius: '50%',
    animation: 'float2 5s ease-in-out infinite',
  },
};

export default Hero;
