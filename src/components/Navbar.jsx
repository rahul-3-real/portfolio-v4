"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/static/images";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="logo">
            <Image src={Logo} alt="Logo" width={120} height={120} priority />
          </Link>

          <button
            className={`nav-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu  ${menuOpen ? "" : "hide"}`}>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/work" className="nav-link">
                Work
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;