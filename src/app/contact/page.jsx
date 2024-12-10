import { Breadcrumb } from "@/components";
import Link from "next/link";

const ContactPage = () => {
  const breadcrumbData = {
    Home: "/",
    Contact: "current",
  };

  return (
    <>
      <div className="container">
        <Breadcrumb data={breadcrumbData} />
      </div>

      <section className="section contact">
        <div className="container">
          <h2 className="heading mb-10">Let's Start A Project Together</h2>
          <div className="grid lg:grid-cols-3 grid-col-1 gap-20">
            <div className="lg:col-span-2 col-span-1">
              <form action="">
                <div className="form-group">
                  <label htmlFor="name">What's your name?</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">What's your email?</label>
                  <input
                    type="email"
                    placeholder="john@doe.com"
                    name="email"
                    id="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">What's your phone number?</label>
                  <input
                    type="number"
                    placeholder="XXX XXX XXXX"
                    name="phone"
                    id="phone"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your message</label>
                  <textarea
                    placeholder="Hello Rahul, can you help me with..."
                    name="message"
                    id="message"
                    required
                  ></textarea>
                </div>
                <button className="button mt-7">Send Message</button>
              </form>
            </div>
            <div className="col-span-1">
              <h5 className="sub-heading text-light mb-4">Contact Details</h5>
              <ul className="mb-10">
                <li>
                  <Link href="mailto:ry6131766@gmail.com">
                    ry6131766@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:8693032463">+91-8693032463</Link>
                </li>
              </ul>

              <h5 className="sub-heading text-light mb-4">Social Links</h5>
              <ul>
                <li>
                  <Link href="https://github.com/rahul-3-real" target="_blank">
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/rahul-3-real/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://codepen.io/rahulyadav311" target="_blank">
                    Codepen
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/rahul.yadav_ok/"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://open.spotify.com/user/82wcpp0z04h4mysqwjnt9dd2w"
                    target="_blank"
                  >
                    Spotify
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
