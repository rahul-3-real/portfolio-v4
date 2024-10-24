import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/public/images";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container p-0">
        <nav className="navbar-inner">
          <Link href="/" className="logo">
            <Image
              src={Logo}
              alt="Rahul Yadav | Fullstack Developer"
              width="50"
              priority
            />
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/articles" className="nav-link">
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
