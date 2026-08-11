import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error fetching projects", err));
  }, []);

  return (
    <section className="work" id="work">
      <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>
      <div className="box-container">
        {projects.map((project, index) => (
          <div className="box" key={index}>
            <div className="image">
              <img draggable="false" src={project.image} alt={project.name} />
            </div>
            <div className="content">
              <div className="tag">
                <h3>{project.name}</h3>
              </div>
              <div className="desc">
                <p>{project.desc}</p>
                <div className="btns">
                  {project.links.view && (
                    <a href={project.links.view} className="btn" target="_blank" rel="noreferrer">
                      <i className="fas fa-eye"></i> View
                    </a>
                  )}
                  {project.links.code && (
                    <a href={project.links.code} className="btn" target="_blank" rel="noreferrer">
                      Code <i className="fas fa-code"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
