import { Breadcrumb } from "@/components";

const WorkPage = () => {
  const breadcrumbData = {
    Home: "/",
    Work: "current",
  };

  return (
    <>
      <div className="container">
        <Breadcrumb data={breadcrumbData} />
      </div>
    </>
  );
};

export default WorkPage;
