const HomeProcess = () => {
  return (
    <section className="section">
      <div className="container">
        <h3 className="heading mb-20">How I bring ideas to life</h3>

        <div className="grid md:grid-cols-10 grid-cols-2 gap-20">
          <div className="md:col-span-4 col-auto">
            <div className="process-item">
              <div className="title">
                <h5>Discovery</h5>
                <span>01</span>
              </div>
              <div className="content">
                <p>
                  In the discovery phase, I dive deep into understanding the
                  project's goals, audience, and technical requirements. Through
                  research and discussions, I gather insights that shape the
                  project's direction, ensuring every choice is intentional and
                  aligned with the vision.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-6 col-auto">
            <div className="process-item">
              <div className="title">
                <h5>Design</h5>
                <span>02</span>
              </div>
              <div className="content">
                <p>
                  With a clear plan in place, I move into design, where ideas
                  start taking shape visually. I create user-friendly layouts
                  and interfaces, focusing on aesthetics, functionality, and
                  brand identity. Each design decision is made with the user
                  experience in mind, ensuring a seamless and engaging journey.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 col-auto">
            <div className="process-item">
              <div className="title">
                <h5>Development</h5>
                <span>03</span>
              </div>
              <div className="content">
                <p>
                  In the development phase, I turn designs into a fully
                  functional, responsive website. I bring together frontend and
                  backend elements, integrating any necessary APIs and custom
                  features, ensuring the site is fast, reliable, and ready for
                  real-world use.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-6 col-auto">
            <div className="process-item">
              <div className="title">
                <h5>Delivery</h5>
                <span>04</span>
              </div>
              <div className="content">
                <p>
                  Finally, I prepare for launch. This includes testing,
                  optimizing, and deploying the site to ensure everything runs
                  smoothly. I handle the deployment process carefully,
                  delivering a polished final product and providing any needed
                  support for a smooth transition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
