const ExperienceSection = () => {
  return (
    <section className="section about-experience">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          <div className="md:col-span-2 col-auto">
            <div className="sticky top-10">
              <h3 className="heading mb-5">Experience</h3>
              <h4 className="sub-heading">Crafting Real Expertise</h4>
            </div>
          </div>
          <div className="md:col-span-3 col-auto">
            <ul className="exp-list">
              <li className="exp-list-item">
                <div className="head">
                  <h5>
                    Valuepitch E Technologies Pvt. Ltd.{" "}
                    <span>Fullstack Developer</span>
                  </h5>
                  <h6>
                    <span>Mar 2024</span> - <span>Aug 2024</span>
                  </h6>
                </div>
                <div className="body">
                  <ul>
                    <li>
                      <b>Full-Stack Development:</b>
                      <span>
                        Spearheaded the development of dynamic projects using
                        the Django framework and the MERN stack, ensuring robust
                        and scalable solutions. Focused on delivering projects
                        that seamlessly integrated backend and frontend
                        components.
                      </span>
                    </li>
                    <li>
                      <b>Client Engagement:</b>
                      <span>
                        Managed client relationships by maintaining clear
                        communication and aligning deliverables with business
                        needs. Effectively translated client requirements into
                        technical solutions while maintaining project timelines.
                      </span>
                    </li>
                    <li>
                      <b>Project Revamp and Optimization:</b>
                      <span>
                        Reworked existing in-house projects, enhancing their
                        visual appeal and functionality. Redesigned frontend
                        interfaces to improve usability, modernized the UI/UX
                        design, and optimized performance to meet evolving
                        business requirements.
                      </span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>
                    Parasight Solutions <span>Website Developer</span>
                  </h5>
                  <h6>
                    <span>Jan 2021</span> - <span>Mar 2024</span>
                  </h6>
                </div>
                <div className="body">
                  <ul>
                    <li>
                      <b>Leadership and Team Management:</b>
                      <span>
                        Led a team of five designers, fostering collaboration
                        and ensuring alignment with contemporary design
                        standards and best practices. Acted as a mentor to team
                        members, improving the overall quality of deliverables.
                      </span>
                    </li>
                    <li>
                      <b>Design and Development:</b>
                      <span>
                        Created visually striking and user-friendly websites and
                        dashboards, leveraging modern technologies to deliver an
                        exceptional user experience. Focused on responsive and
                        accessible designs to cater to diverse audiences.
                      </span>
                    </li>
                    <li>
                      <b>Cross-Functional Collaboration:</b>
                      <span>
                        Worked closely with backend developers to ensure
                        seamless integration between frontend designs and
                        backend functionalities, delivering high-performance
                        solutions.
                      </span>
                    </li>
                    <li>
                      <b>Quality Assurance:</b>
                      <span>
                        Maintained a consistent visual identity across projects,
                        ensuring cohesive design elements and user experiences.
                        Conducted rigorous testing and refinements to meet
                        industry benchmarks.
                      </span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>
                    Adenhanseo <span>Website Developer</span>
                  </h5>
                  <h6>
                    <span>Feb 2020</span> - <span>May 2020</span>
                  </h6>
                </div>
                <div className="body">
                  <ul>
                    <li>
                      <b>Website Development and Management:</b>
                      <span>
                        Successfully created and managed multiple websites using
                        HTML, CSS, JavaScript, WordPress, and PHP. Delivered
                        high-quality solutions that met client expectations and
                        business goals.
                      </span>
                    </li>
                    <li>
                      <b>User Experience Enhancement:</b>
                      <span>
                        Redesigned outdated websites to improve aesthetics,
                        usability, and functionality, aligning them with modern
                        design trends and user needs.
                      </span>
                    </li>
                    <li>
                      <b>Maintenance and Optimization:</b>
                      <span>
                        Handled all website-related tasks, including regular
                        updates, troubleshooting, and ensuring optimal
                        performance. Integrated SEO best practices to improve
                        search engine rankings and visibility.
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
