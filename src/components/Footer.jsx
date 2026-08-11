

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
          <div className="box">
              <h3>Uttam's Portfolio</h3>
              <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> <br/> Keep Rising 🚀. Connect with me over live chat!</p>
          </div>

          <div className="box">
              <h3>quick links</h3>
              <a href="/"><i className="fas fa-chevron-circle-right"></i> home</a>
              <a href="/about"><i className="fas fa-chevron-circle-right"></i> about</a>
              <a href="/skills"><i className="fas fa-chevron-circle-right"></i> skills</a>
              <a href="/education"><i className="fas fa-chevron-circle-right"></i> education</a>
              <a href="/projects"><i className="fas fa-chevron-circle-right"></i> projects</a>
              <a href="/contact"><i className="fas fa-chevron-circle-right"></i> contact</a>
          </div>

          <div className="box">
              <h3>contact info</h3>
              <p> <i className="fas fa-phone"></i>+91 7766086408</p>
              <p> <i className="fas fa-envelope"></i>Sankalp.uttam04@gmail.com</p>
              <p> <i className="fas fa-map-marked-alt"></i>Kutubpur Bidupur, Vaishali, Bihar - 844503</p>
              <div className="share">
                  <a href="https://linkedin.com/in/meuttamsharma" className="fab fa-linkedin" aria-label="LinkedIn" target="_blank" rel="noreferrer"></a>
                  <a href="https://github.com/codewith-uttam" className="fab fa-github" aria-label="GitHub" target="_blank" rel="noreferrer"></a>
                  <a href="mailto:Sankalp.uttam04@gmail.com" className="fas fa-envelope" aria-label="Mail" target="_blank" rel="noreferrer"></a>
              </div>
          </div>
      </div>

      <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a href="https://linkedin.com/in/meuttamsharma" target="_blank" rel="noreferrer"> uttam kumar</a></h1>
    </section>
  );
};

export default Footer;
