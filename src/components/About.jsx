import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/working_women.jpeg';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // 30% visible to trigger
  });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#ffffff',
        color: '#1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Animated Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img src={profileImage} alt="Prathiksha" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </motion.div>

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
          color: '#4B0082',
          marginBottom: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        About Me
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.9 }}
        style={{
          fontSize: '1.1rem',
          color: '#333',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}
      >
        I’m a passionate developer with experience in building dynamic web applications using modern tech stacks.
        I enjoy translating creative ideas into functional, efficient, and user-friendly experiences with clean code
        and intuitive design.
      </motion.p>
    </section>
  );
};

export default About;
