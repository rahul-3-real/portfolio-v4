import { CardCTA } from "@/static/images";
import Image from "next/image";
import Link from "next/link";

const HomeCTA = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-2 gap-5 align-middle">
          <div className="md:col-span-1 col-span-2">
            <h3 className="heading mb-3">Still not satisfied?</h3>
            <p className="mb-10">
              Discover what I can bring to your next project.
            </p>
            <Link href="#" className="button">
              Connect With Me
            </Link>
          </div>
          <div className="md:col-span-1 col-span-2">
            <Link href="#" className="card-cta">
              <span>Don't click here</span>
              <Image src={CardCTA} alt="Pattern" width={120} height={120} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
