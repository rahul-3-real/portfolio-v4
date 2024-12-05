"use client";

import { useState, useEffect } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HomeTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      companyName: "WebNest Solutions",
      relation: "Employer",
      content:
        "Working with Rahul has been a pleasure! His dedication to creating user-focused, visually engaging websites is unmatched. He has a great eye for detail and always keeps the end-user in mind. Our clients have loved the results, and his commitment to quality shines in every project.",
    },
    {
      id: 2,
      name: "Amit Verma",
      companyName: "BrightCode Technologies",
      relation: "Team Mate",
      content:
        "Rahul is a fantastic team player and an incredibly talented developer. We collaborated on several projects, and he always brought innovative ideas and solutions to the table. His ability to seamlessly blend design with technical skills truly sets him apart, making every project a success.",
    },
    {
      id: 3,
      name: "Sara Khan",
      companyName: "Creatix Digital",
      relation: "Employer",
      content:
        "Rahul consistently exceeds expectations with his professionalism and expertise. His workflow is efficient and well-structured, from concept to final deployment. He’s an independent problem-solver who still works beautifully within a team, which has made him invaluable to our projects.",
    },
    {
      id: 4,
      name: "Vikram Desai",
      companyName: "CodeCraft Collective",
      relation: "Team Mate",
      content:
        "I had the pleasure of working alongside Rahul on a complex, time-sensitive project, and his knowledge and dedication were instrumental. He was always willing to lend a hand, explain concepts, and think through challenges, making him a great teammate and mentor to junior developers.",
    },
    {
      id: 5,
      name: "Anjali Menon",
      companyName: "Spark Innovations",
      relation: "Employer",
      content:
        "Rahul has been an exceptional asset to our development team. His technical skills are impressive, and he approaches every project with creativity and attention to detail. The end results consistently exceed our expectations, both in functionality and design.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow < testimonials.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - slidesToShow : prevIndex - 1
    );
  };

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-4 mb-10">
          <div className="col-span-3">
            <h4 className="heading">Insights from Collaborators</h4>
          </div>

          <div className="testimonial-controls">
            <button className="prev" onClick={handlePrev}>
              <IoIosArrowBack />
            </button>
            <button className="next" onClick={handleNext}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="testimonial-carousel">
          <div
            className="testimonial-slides"
            style={{
              transform: `translateX(-${(currentIndex / slidesToShow) * 100}%)`,
              gridTemplateColumns: `repeat(${testimonials.length}, 1fr)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="slide"
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <div className="testimonial-card">
                  <h5>{item.name}</h5>
                  <ul>
                    <li>{item.companyName}</li>
                    <li>{item.relation}</li>
                  </ul>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
