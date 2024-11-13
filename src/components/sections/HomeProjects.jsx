import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Project1, Project2, Project3 } from "@/static/images";

const HomeProjects = () => {
  return (
    <section className="section">
      <div className="container">
        <h3 className="text-center heading mb-10">Some Things I've Built</h3>

        <div className="grid md:grid-cols-12 grid-cols-2 gap-5">
          <div className="md:col-span-8 col-auto">
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
          <div className="md:col-span-4 col-auto">
            <div className="project-card mb-5">
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

            <div className="project-card">
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

        <div className="text-center mt-20">
          <Link href="/" className="button">
            <span>See More Projects</span>
            <BsArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
