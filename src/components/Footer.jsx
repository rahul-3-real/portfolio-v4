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
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-2 gap-5">
          <div className="col">
            <div className="social">
              <Link href="" target="_blank">
                <FaGithub />
              </Link>
              <Link href="" target="_blank">
                <FaLinkedinIn />
              </Link>
              <Link href="" target="_blank">
                <FaCodepen />
              </Link>
              <Link href="" target="_blank">
                <FaInstagram />
              </Link>
              <Link href="" target="_blank">
                <FaSpotify />
              </Link>
            </div>
          </div>
          <div className="col">
            <p className="text-end">{year} | Designed by yours truly.</p>
          </div>
        </div>

        <h1>Rahul Yadav</h1>
      </div>
    </footer>
  );
};

export default Footer;
