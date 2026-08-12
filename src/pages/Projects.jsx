import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section className="work" id="work">
      <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>
      <div className="box-container">
        {projects.map((project, index) => (
          <div className="box" key={index}>
            <img draggable="false" src={project.image} alt={project.name} loading="lazy" />
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
