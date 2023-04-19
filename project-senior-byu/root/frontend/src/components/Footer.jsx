import React from "react";
// Icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
//Routes
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-1/6">
          <a
            href="#"
            className="text-2xl font-bold relative p-1 bg-footer"
          >
            OCACOPLUS<span className="text-primary text-5xl">.</span>{" "}
          </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiTwitterLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiGithubLine />{" "}
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Company
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            to="/about"
            className="text-gray-700 mt-4 hover:text-white transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/investors"
            className="text-gray-700 mt-4 hover:text-white transition-color"
          >
            Investors
          </Link>
          <Link
            to="/news"
            className="text-gray-700 mt-4 hover:text-white transition-color"
          >
            News
          </Link>
          <Link
            to="/terms"
            className="text-gray-700 mt-4 hover:text-white transition-color"
          >
            Terms of use
          </Link>
          <Link
            to="/privacy"
            className="text-gray-700 mt-4 hover:text-white transition-color"
          >
            Privacy policy
          </Link>
          <Link
            type="button"
            to="/contact"
            className="font-semibold py-2 px-6 bg-primary text-white rounded-xl"
          >
            Contact Us
          </Link>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-700 text-center">
          © Ulises Mariano Melgarejo 2023 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;