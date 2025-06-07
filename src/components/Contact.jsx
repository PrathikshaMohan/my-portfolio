import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Feedback message state
  const [feedback, setFeedback] = useState('');

  const sectionStyle = {
    padding: '4rem 2rem',
    background: 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
    color: '#1b1b1b',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#4B0082',
    fontWeight: '700',
    marginBottom: '1rem',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '500px',
    margin: '0 auto',
  };

  const inputStyle = {
    padding: '0.75rem 1rem',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
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
    textDecoration: 'none',
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#6A0DAD';
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = '0 6px 20px rgba(106, 13, 173, 0.4)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#4B0082';
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 4px 15px rgba(75, 0, 130, 0.3)';
  };

  const iconContainerStyle = {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  };

  const iconStyle = {
    fontSize: '2rem',
    color: '#4B0082',
    transition: 'transform 0.3s, color 0.3s',
    cursor: 'pointer',
  };

  const handleMouseEnterIcon = (e) => {
    e.currentTarget.style.transform = 'scale(1.2)';
    e.currentTarget.style.color = 'rgba(75, 0, 130, 0.3)';
  };

  const handleMouseLeaveIcon = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.color = '#1b1b1b';
  };

  // Form submit handler
 const handleSubmit = async (e) => {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
      console.error("Server error response:", data);
      throw new Error(data.error || 'Something went wrong');
    }

    alert(data.message || 'Message sent successfully!');
    e.target.reset();

    // Also clear React state if you use controlled inputs
    setName('');
    setEmail('');
    setMessage('');
  } catch (err) {
    console.error('Error sending message:', err);
    alert(err.message || 'Failed to send message');
  }
};

  return (
    <section style={sectionStyle} id="contact">
      <h2 style={headingStyle}>Contact Me</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          style={inputStyle}
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <textarea
          style={{ ...inputStyle, height: '150px' }}
          placeholder="Your Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        ></textarea>
        <button
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          type="submit"
        >
          Send Message
        </button>
      </form>

      {/* Feedback message */}
      {feedback && (
        <p style={{ marginTop: '1rem', color: feedback.includes('successfully') ? 'green' : 'red' }}>
          {feedback}
        </p>
      )}

      {/* Social Icons */}
      <div style={iconContainerStyle}>
        <a
          href="https://github.com/PrathikshaMohan"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnterIcon}
          onMouseLeave={handleMouseLeaveIcon}
        >
          <FaGithub style={iconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/prathiksha-mohan-pm01"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnterIcon}
          onMouseLeave={handleMouseLeaveIcon}
        >
          <FaLinkedin style={iconStyle} />
        </a>
        <a
          href="https://www.facebook.com/pradhiksha.mohan.2025/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnterIcon}
          onMouseLeave={handleMouseLeaveIcon}
        >
          <FaFacebook style={iconStyle} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
