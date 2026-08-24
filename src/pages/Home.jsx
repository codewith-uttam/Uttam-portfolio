import { useEffect } from 'react';


const Home = () => {
  useEffect(() => {
    if (window.initParticles) window.initParticles();
    if (window.initTyped) window.initTyped();
  }, []);

  return (
    <section className="home" id="home">

      <div id="particles-js"></div>

      <div className="content">
        <h2>Hi There,<br /> I'm Uttam <span>Kumar</span></h2>
        <p>I am a <span className="typing-text">Frontend Web Developer</span></p>
        <a href="#about" className="btn"><span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li><a className="linkedin" aria-label="LinkedIn" href="https://linkedin.com/in/meuttamsharma" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li><a className="github" aria-label="GitHub" href="https://github.com/codewith-uttam" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="image">
        <img draggable="false" className="tilt" src="/assets/images/hero1.png" alt="" />
      </div>
    </section>
  );
};

export default Home;
