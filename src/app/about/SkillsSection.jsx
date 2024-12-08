const SkillsSection = () => {
  return (
    <section className="section about-experience">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          <div className="md:col-span-2 col-auto">
            <div className="sticky top-10">
              <h3 className="heading mb-5">Skills</h3>
              <h4 className="sub-heading">Empowering Proficiency</h4>
            </div>
          </div>
          <div className="md:col-span-3 col-auto">
            <ul className="exp-list">
              <li className="exp-list-item">
                <div className="head">
                  <h5>Languages</h5>
                </div>
                <div className="body"></div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>Frameworks and Libraries</h5>
                </div>
                <div className="body"></div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>Databases</h5>
                </div>
                <div className="body"></div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>Design and Prototyping Tools</h5>
                </div>
                <div className="body"></div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>Version Control</h5>
                </div>
                <div className="body"></div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>APIs</h5>
                </div>
                <div className="body"></div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>DevOps and Containerization</h5>
                </div>
                <div className="body"></div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>Architecture and Patterns</h5>
                </div>
                <div className="body"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
