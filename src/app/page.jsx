import Hero from "@/components/sections/Hero";

const page = () => {
  return (
    <div className="container">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
        <div className="col">
          <Hero />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default page;
