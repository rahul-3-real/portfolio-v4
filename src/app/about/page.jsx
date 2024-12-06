import { Breadcrumb } from "@/components";
import BioSection from "./BioSection";
import ExperienceSection from "./ExperienceSection";

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
    </>
  );
};

export default AboutPage;
