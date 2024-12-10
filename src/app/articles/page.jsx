import { Breadcrumb } from "@/components";

const ArticlesPage = () => {
  const breadcrumbData = {
    Home: "/",
    Articles: "current",
  };

  return (
    <>
      <div className="container">
        <Breadcrumb data={breadcrumbData} />

        <h2 className="heading text-center my-20">Coming Soon</h2>
      </div>
    </>
  );
};

export default ArticlesPage;
