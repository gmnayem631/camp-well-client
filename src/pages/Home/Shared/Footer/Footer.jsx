import React from "react";
import CampWellLogo from "../Navbar/CampWellLogo/CampWellLogo";
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

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
        <small>
          Copyright © {new Date().getFullYear()} - All rights reserved
        </small>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4 text-white text-xl">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition"
          >
            <FaYoutube />
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
      </nav>
    </footer>
  );
};

export default Footer;
