

const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading"><i className="fas fa-graduation-cap"></i> My <span>Education</span></h1>
      <p className="qoute">Education is not the learning of facts, but the training of the mind to think.</p>

      <div className="box-container">
        
        <div className="box">
            <div className="image">
            <img draggable="false" src="/assets/images/educat/college.jpg" alt="" />
            </div>
            <div className="content">
            <h3>B.Tech, Computer Science & Engineering</h3>
            <p>Dr. C.V. Raman University, Bhagwanpur, Vaishali, Bihar</p>
            <h4>2025 - Present | Pursuing</h4>
            </div>
        </div>

        <div className="box">
          <div className="image">
          <img draggable="false" src="/assets/images/educat/school.jpg" alt="" />
          </div>
          <div className="content">
          <h3>Diploma</h3>
          <p>Dr. C.V. Raman University, Bhagwanpur, Vaishali, Bihar</p>
          <h4>2022 - 2025 | Score: 74.90%</h4>
          </div>
        </div>
        
        <div className="box">
          <div className="image">
          <img draggable="false" src="/assets/images/educat/school.jpg" alt="" />
          </div>
          <div className="content">
          <h3>Intermediate</h3>
          <p>Satya Janki Devi Private ITI, Kanchanpur</p>
          <h4>2022 | Hindi, English (42%)</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
          <img draggable="false" src="/assets/images/educat/school.jpg" alt="" />
          </div>
          <div className="content">
          <h3>Matriculation</h3>
          <p>G A Inter School, Hanjipur</p>
          <h4>2019 | All Subjects (45%)</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
          <img draggable="false" src="/assets/images/educat/school.jpg" alt="" />
          </div>
          <div className="content">
          <h3>ADCA Certification</h3>
          <p>Sankalp Education, Bidupur Bazar, Vaishali</p>
          <h4>2023 | Advanced Diploma in Computer Applications</h4>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
