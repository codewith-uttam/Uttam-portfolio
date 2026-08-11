import { useEffect, useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/skills.json')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error("Error fetching skills", err));
  }, []);

  return (
    <section className="skills" id="skills">
        <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>

        <div className="container">
              <div className="row" id="skillsContainer">
                {skills.map((skill, index) => (
                  <div className="bar" key={index}>
                    <div className="info">
                      <img src={skill.icon} alt={skill.name} />
                      <span>{skill.name}</span>
                    </div>
                  </div>
                ))}
          </div>
        </div>
    </section>
  );
};

export default Skills;
