import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = 'https://formspree.io/f/xblyknye'; 

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong!');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending message.');
    }
  };

  return (
    <motion.section
      id="contact"
      style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
        textAlign: 'center',
        fontFamily: 'Poppins, sans-serif',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        style={{ fontSize: '2.5rem', color: '#4B0082', fontWeight: '700', marginBottom: '1rem' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ ...inputStyle, height: '150px' }}
          />
          <motion.button
            type="submit"
            style={buttonStyle}
            whileHover={{ scale: 1.05, backgroundColor: '#6A0DAD', boxShadow: '0 6px 20px rgba(106, 13, 173, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      ) : (
        <AnimatePresence>
          <motion.div
            key="thank-you"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '1.2rem',
              color: 'green',
              marginTop: '2rem',
              background: '#fff',
              padding: '1rem 2rem',
              borderRadius: '12px',
              display: 'inline-block',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            🎉 Thank you! Your message has been sent.
          </motion.div>
        </AnimatePresence>
      )}

      {/* Social Icons */}
      <motion.div
        style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {socials.map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.3, color: '#6A0DAD' }}
            style={iconStyle}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem',
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
  transition: 'all 0.3s ease-in-out',
};

const iconStyle = {
  fontSize: '2rem',
  color: '#4B0082',
  transition: 'all 0.3s',
  cursor: 'pointer',
};

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/PrathikshaMohan' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/prathiksha-mohan-pm01' },
  { icon: <FaFacebook />, href: 'https://www.facebook.com/pradhiksha.mohan.2025/' },
];

export default Contact;
