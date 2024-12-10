import { Breadcrumb } from "@/components";
import Projects from "./Projects";
import ProjectsTable from "./ProjectsTable";

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

      <Projects />
      <ProjectsTable />
    </>
  );
};

export default WorkPage;
