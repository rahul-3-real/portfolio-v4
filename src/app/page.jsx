import {
  Hero,
  HomeAbout,
  HomeCTA,
  HomeProcess,
  HomeProjects,
  HomeSkills,
  HomeTestimonial,
} from "@/components/sections";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeProjects />
      <HomeSkills />
      <HomeProcess />
      <HomeTestimonial />
      <HomeCTA />
    </>
  );
};

export default Home;
