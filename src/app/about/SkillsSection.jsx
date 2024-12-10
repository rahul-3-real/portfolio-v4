import {
  AdobeXD,
  Bootstrap,
  CSS,
  Django,
  Docker,
  Express,
  Figma,
  Git,
  HTML,
  JavaScript,
  Kubernetes,
  MongoDB,
  MySql,
  Next,
  Node,
  Photoshop,
  Php,
  Postgres,
  Python,
  React,
  Sanity,
  Scss,
  Tailwind,
} from "@/static/images/icons";
import Image from "next/image";

const SkillsSection = () => {
  const LanguageIcons = [
    { icon: HTML, name: "HTML" },
    { icon: CSS, name: "CSS" },
    { icon: JavaScript, name: "JavaScript" },
    { icon: Python, name: "Python" },
    { icon: Php, name: "PHP" },
  ];

  const FrameworkIcons = [
    { icon: Bootstrap, name: "Bootstrap" },
    { icon: React, name: "React" },
    { icon: Next, name: "Next.js" },
    { icon: Node, name: "Node.js" },
    { icon: Django, name: "Django" },
    { icon: Express, name: "Express.js" },
    { icon: Sanity, name: "Sanity IO" },
    { icon: Scss, name: "SCSS" },
    { icon: Tailwind, name: "Tailwind CSS" },
  ];

  const DatabaseIcons = [
    { icon: MongoDB, name: "MongoDB" },
    { icon: MySql, name: "MySQL" },
    { icon: Postgres, name: "PostgreSQL" },
  ];

  const DesignIcons = [
    { icon: Figma, name: "Figma" },
    { icon: AdobeXD, name: "Adobe XD" },
    { icon: Photoshop, name: "Photoshop" },
  ];

  const DevOpsIcons = [
    { icon: Docker, name: "Docker" },
    { icon: Kubernetes, name: "Kubernetes" },
    { icon: Git, name: "Git" },
  ];

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
                <div className="body">
                  <div className="skill-icons">
                    {LanguageIcons.map((item) => (
                      <div className="icon" key={item.name}>
                        <Image src={item.icon} alt={item.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>Frameworks and Libraries</h5>
                </div>
                <div className="body">
                  <div className="skill-icons">
                    {FrameworkIcons.map((item) => (
                      <div className="icon" key={item.name}>
                        <Image src={item.icon} alt={item.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>Databases</h5>
                </div>
                <div className="body">
                  <div className="skill-icons">
                    {DatabaseIcons.map((item) => (
                      <div className="icon" key={item.name}>
                        <Image src={item.icon} alt={item.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>Design and Prototyping Tools</h5>
                </div>
                <div className="body">
                  <div className="skill-icons">
                    {DesignIcons.map((item) => (
                      <div className="icon" key={item.name}>
                        <Image src={item.icon} alt={item.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              <li className="exp-list-item">
                <div className="head">
                  <h5>DevOps and Containerization</h5>
                </div>
                <div className="body">
                  <div className="skill-icons">
                    {DevOpsIcons.map((item) => (
                      <div className="icon" key={item.name}>
                        <Image src={item.icon} alt={item.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
