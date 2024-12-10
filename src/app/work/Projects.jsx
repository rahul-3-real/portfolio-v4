import Image from "next/image";
import Link from "next/link";

import { Project1, Project2, Project3 } from "@/static/images";

const Projects = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="col">
            <div className="project-card active h-full">
              <div className="image relative w-full h-auto">
                <Image src={Project1} alt="Project 01" priority />
              </div>
              <div className="text">
                <Link href="/" className="link">
                  Story App
                </Link>
                <span>MERN</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="project-card active h-full">
              <div className="image relative w-full h-auto">
                <Image src={Project2} alt="Project 02" priority />
              </div>
              <div className="text">
                <Link href="/" className="link">
                  Notes App
                </Link>
                <span>MERN</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="project-card active h-full">
              <div className="image relative w-full h-auto">
                <Image src={Project3} alt="Project 03" priority />
              </div>
              <div className="text">
                <Link href="/" className="link">
                  Progress Tracker
                </Link>
                <span>MERN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
