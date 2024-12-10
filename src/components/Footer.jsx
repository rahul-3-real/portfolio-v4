import Link from "next/link";

import {
  FaGithub,
  FaCodepen,
  FaLinkedinIn,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="section footer">
      <div className="container">
        <div className="grid grid-cols-2 gap-5">
          <div className="md:col-span-1 col-span-2">
            <div className="social">
              <Link href="https://github.com/rahul-3-real" target="_blank">
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rahul-3-real/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
              <Link href="https://codepen.io/rahulyadav311" target="_blank">
                <FaCodepen />
              </Link>
              <Link
                href="https://www.instagram.com/rahul.yadav_ok/"
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://open.spotify.com/user/82wcpp0z04h4mysqwjnt9dd2w"
                target="_blank"
              >
                <FaSpotify />
              </Link>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2">
            <p className="md:text-end">{year} | Designed by yours truly.</p>
          </div>
        </div>

        <h1>Rahul Yadav</h1>
      </div>
    </footer>
  );
};

export default Footer;
