import React from 'react';

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

  return (
    <section
      style={{
        padding: '4rem 2rem',
        backgroundImage: 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
        textAlign: 'center',
        fontFamily: 'Poppins, sans-serif',
      }}
      id="skills"
    >
      <h2
        style={{
          fontSize: '2.5rem',
          color: '#4B0082',
          marginBottom: '2.5rem',
          fontWeight: '700',
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.3s ease',
            }}
            className="skill-card"
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

            {/* Skill name BELOW the ring */}
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
          </div>
        ))}
      </div>

      {/* Hover animation styles */}
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
