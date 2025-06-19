import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'React.js', level: 50 },
    { name: 'Node.js', level: 50 },
    { name: 'MySQL', level: 70 },
    { name: 'PHP', level: 75 },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="skills"
      style={{
        padding: '4rem 2rem',
        backgroundImage: 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
        textAlign: 'center',
        fontFamily: 'Poppins, sans-serif',
        overflow: 'hidden',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
          color: '#4B0082',
          marginBottom: '2.5rem',
          fontWeight: '700',
        }}
      >
        Skills
      </motion.h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: index * 0.15, duration: 0.6 },
                  }
                : {}
            }
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.3s ease',
            }}
          >
            <div
              className="circle-ring"
              style={{
                position: 'relative',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: '#f1f1f1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 0 15px rgba(75, 0, 130, 0.3)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: `conic-gradient(#4B0082 ${skill.level}%, #ddd ${skill.level}%)`,
                  transition: 'all 0.5s ease',
                  zIndex: 1,
                }}
              ></div>
            </div>

            <p
              style={{
                marginTop: '0.8rem',
                fontWeight: '600',
                color: '#1b1b1b',
                fontSize: '1rem',
              }}
            >
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .skill-card:hover {
          transform: scale(1.05);
        }

        .skill-card:hover .circle-ring {
          transform: rotate(5deg) scale(1.05);
          box-shadow: 0 0 25px rgba(75, 0, 130, 0.5);
        }

        .skill-card:hover .circle-ring div:first-child {
          background: conic-gradient(#ff69b4 0%, #4B0082 100%);
        }
      `}</style>
    </section>
  );
};

export default Skills;
