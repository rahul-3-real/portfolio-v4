import { Breadcrumb } from "@/components";

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
    </>
  );
};

export default AboutPage;
