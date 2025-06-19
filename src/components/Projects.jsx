import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import busbooking from '../assets/dt.JPG';
import farmersmarket from '../assets/fresh.JPG';
import student from '../assets/srms.JPG';
import lms from '../assets/lms.JPG';
import photography from '../assets/wa.JPG';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('website');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const websiteDesigns = [
    {
      title: 'Farmers market system',
      description: 'A full-stack web app connecting local farmers and buyers.',
      image: farmersmarket,
      link: 'https://f-market.netlify.app/',
    },
    {
      title: 'Bus booking system',
      description: 'A simple web application for booking bus tickets online.',
      image: busbooking,
      link: 'https://prathikshamohan.github.io/bus_booking_website/',
    },
    {
      title: 'Student result management system',
      description: 'A system for managing and tracking student academic results.',
      image: student,
      link: 'https://github.com/PrathikshaMohan/student_result_management_system',
    },
    {
      title: 'Photography and Graphic Website',
      description: 'A website for a graphic and photography service provider.',
      image: photography,
      link: 'https://prathikshamohan.github.io/photography_and_graphics_website/',
    },
  ];

  const applicationDesigns = [
    {
      title: 'Library management system',
      description: 'A desktop application to manage library books and members.',
      image: lms,
      link: 'https://github.com/PrathikshaMohan/library_management_system',
    },
  ];

  const sectionStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#4B0082',
    marginBottom: '2.5rem',
    fontWeight: '700',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '1.2rem',
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  const buttonStyle = {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#4B0082',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(75, 0, 130, 0.3)',
    textDecoration: 'none',
  };

  const toggleContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
    gap: '1rem',
  };

  const toggleButtonStyle = (active) => ({
    padding: '0.75rem 2.5rem',
    fontSize: '1.1rem',
    fontWeight: active ? '700' : '500',
    color: active ? '#fff' : '#4B0082',
    backgroundColor: active ? '#4B0082' : 'transparent',
    border: `2px solid #4B0082`,
    borderRadius: '30px',
    cursor: 'pointer',
    transform: active ? 'scale(1.05)' : 'scale(1)',
    transition: 'all 0.3s ease-in-out',
  });

  const renderProjects = (projectsArray, isApplication = false) =>
    projectsArray.map((proj, index) => (
      <motion.div
  key={index}
  className="project-card"
  custom={index}
  initial="hidden"
  animate={inView ? 'visible' : 'hidden'}
  variants={cardVariants}
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // This pushes the button to the bottom
    backgroundColor: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
    padding: '1.5rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    minHeight: '460px', // Force all cards to be same height
  }}
  whileHover={{
    scale: 1.04,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  }}
>
  <div>
    <img
      src={proj.image}
      alt={proj.title}
      style={{
        ...imageStyle,
        ...(isApplication && { maxWidth: '400px', height: '250px', margin: '0 auto' }),
      }}
    />
    <h3 style={{
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#222',
      marginBottom: '0.6rem',
    }}>
      {proj.title}
    </h3>
    <p style={{
      color: '#555',
      fontSize: '0.95rem',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      minHeight: '60px', // Equal space for description
    }}>
      {proj.description}
    </p>
  </div>

  <a
  href={proj.link}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    ...buttonStyle,
    ...(isApplication && { width: 'fit-content', margin: '0 auto' }),
  }}
>
  View Project
</a>

</motion.div>

    ));

  return (
    <section ref={ref} style={sectionStyle} id="projects">
      <div style={toggleContainerStyle}>
        <button
          style={toggleButtonStyle(activeTab === 'website')}
          onClick={() => setActiveTab('website')}
        >
          Website Designs
        </button>
        <button
          style={toggleButtonStyle(activeTab === 'application')}
          onClick={() => setActiveTab('application')}
        >
          Application Designs
        </button>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={headingStyle}
      >
        {activeTab === 'website' ? 'Website Designs' : 'Application Designs'}
      </motion.h2>

      <div style={gridStyle}>
        {activeTab === 'website'
          ? renderProjects(websiteDesigns)
          : renderProjects(applicationDesigns, true)}
      </div>
    </section>
  );
};

export default Projects;
