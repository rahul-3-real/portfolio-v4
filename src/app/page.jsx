import {
  Hero,
  HomeAbout,
  HomeCTA,
  HomeProcess,
  HomeProjects,
  HomeSkills,
} from "@/components/sections";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeProjects />
      <HomeSkills />
      <HomeProcess />
      <HomeCTA />
    </>
  );
};

export default Home;
