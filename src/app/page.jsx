import Bio from "@/components/sections/Bio";
import Hero from "@/components/sections/Hero";

const page = () => {
  return (
    <div className="container">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 items-start">
        <div className="col">
          <Hero />
        </div>
        <div className="col">
          <Bio />
        </div>
      </div>
    </div>
  );
};

export default page;
