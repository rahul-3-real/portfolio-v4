import { Breadcrumb } from "@/components";
import BioSection from "./BioSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";

const AboutPage = () => {
  const breadcrumbData = {
    Home: "/",
    About: "current",
  };

  return (
    <>
      <div className="container">
        <Breadcrumb data={breadcrumbData} />
      </div>

      <BioSection />
      <ExperienceSection />
      <SkillsSection />
    </>
  );
};

export default AboutPage;
