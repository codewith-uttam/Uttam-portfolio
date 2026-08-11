

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>

      <div className="row">
        <div className="image">
          <img draggable="false" className="tilt" src="/assets/images/profile2.jpg" alt="Uttam Kumar" />
        </div>
        <div className="content">
          <h3>I'm Uttam Kumar</h3>
          <span className="tag">Frontend Web Developer</span>

          <p>
            B.Tech (CSE) student and aspiring frontend developer with hands-on skills in HTML, CSS, JavaScript, and React.js.
            Comfortable building responsive, component-based web interfaces and eager to apply strong fundamentals in a
            professional development team while continuing to grow technically.
            <br /><br />
            <b>Languages:</b> Hindi, English
          </p>

          <div className="box-container">
            <div className="box">
              <p><span> phone : </span> +91 7766086408 / 8083717324</p>
              <p><span> email : </span> Sankalp.uttam04@gmail.com</p>
              <p><span> place : </span> Kutubpur Bidupur, Vaishali, Bihar - 844503</p>
            </div>
          </div>

          <div className="resumebtn">
            <a href="https://drive.google.com/file/d/1dWtoHjQgEPpGkE2z6fXP5qSKY4sU75Xp/view?usp=drive_link" target="_blank" rel="noreferrer" className="btn">
              <span>View Resume</span>
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
