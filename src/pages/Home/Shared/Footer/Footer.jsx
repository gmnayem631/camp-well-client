import React from "react";
import CampWellLogo from "../Navbar/CampWellLogo/CampWellLogo";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-secondary text-neutral-content p-10">
      <aside>
        <CampWellLogo />
        <p className="font-bold">
          Reliable. Accessible. Compassionate.
          <br />
          CampWell — Your Trusted Partner in Community Healthcare.
        </p>
      </aside>

      <nav>
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-flow-col gap-4 text-white text-xl">
            <a
              href="https://linkedin.com/in/gulam-mustafa-nayem"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/gmnayem631"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition"
            >
              <FaFacebookF />
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="/contact"
              className="text-white hover:text-white/70 transition"
            >
              Contact
            </a>
            <a
              href="/about-us"
              className="text-white hover:text-white/70 transition"
            >
              About Us
            </a>
          </div>
        </div>
      </nav>
      <aside>
        {" "}
        <small>
          Copyright © {new Date().getFullYear()} - All rights reserved
        </small>
      </aside>
    </footer>
  );
};

export default Footer;
