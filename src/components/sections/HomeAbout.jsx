const HomeAbout = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          <div className="md:col-span-2 col-auto">
            <h1 className="heading mb-5">Rahul Yadav</h1>
            <h2 className="sub-heading">Fullstack Developer</h2>
          </div>
          <div className="md:col-span-3 col-auto">
            <p className="mb-3">
              A <b className="text-light">self-taught</b> full-stack developer
              based in Thane, MH. With over{" "}
              <b className="text-light">4 years of experience</b> in{" "}
              <b className="text-light">crafting pixel-perfect</b>,{" "}
              <b className="text-light">accessible</b>, and{" "}
              <b className="text-light">engaging websites</b>, I blend design
              and development to bring digital experiences to life. My journey
              has taken me through web design and development for local
              businesses, to creating dynamic, user-focused projects in
              professional settings.
            </p>
            <p>
              Whether it's building responsive layouts, developing backend
              functionality, or fine-tuning UX, I aim to create solutions that
              delight users and meet real-world needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
