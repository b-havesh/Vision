import React from "react";
import logo from "../assets/vision-high-resolution-logo-white-transparent.png";
import { Link } from "react-router-dom";

const Footer = ({ scrollToSection }) => {
  return (
    <section
      data-scroll-section
      data-section-id={5}
      id="footer"
      data-share
      data-category="footers-default"
      data-component-id="b72facfa_02_awz"
      className="bg-[#6A00FF] text-white"
    >
      <div className="pt-26 border-3 border-l-0 border-r-0 border-indigo-900">
        <div className="pb-16 border-b-3 border-white">
          <div className="container px-4 mx-auto text-center">
            <a
              onClick={() => scrollToSection("#home")}
              className="inline-block mx-auto mb-20 cursor-pointer"
              // onClick={() => scrollToSection("#home")}
            >
              <img
                className="h-12"
                src={logo}
                alt
                data-config-id="auto-img-1-2"
                data-scroll
                data-scroll-speed={2}
              />
            </a>
            <div className="flex flex-wrap -mx-4 -mb-6 justify-center">
              <div className="w-full md:w-1/3 xl:w-auto px-4 mb-6 md:mr-10 2xl:mr-16">
                <a
                  onClick={() => scrollToSection("#home")}
                  className="text-xl md:text-2xl font-extrabold hover:text-pink-300 transition-all duation-200 cursor-pointer"
                  data-config-id="auto-txt-1-2"
                  // onClick={() => scrollToSection("#home")}
                >
                  Home
                </a>
              </div>
              <div className="w-full md:w-1/3 xl:w-auto px-4 mb-6 md:mr-10 2xl:mr-16">
                <a
                  onClick={() => scrollToSection("#clients")}
                  className="text-xl md:text-2xl font-extrabold hover:text-pink-300 transition-all duation-200 cursor-pointer"
                  data-config-id="auto-txt-2-2"
                  // onClick={() => scrollToSection("#clients")}
                >
                  Clients
                </a>
              </div>
              <div className="w-full md:w-1/3 xl:w-auto px-4 mb-6 md:mr-10 2xl:mr-16">
                <a
                  onClick={() => scrollToSection("#cta")}
                  className="text-xl md:text-2xl font-extrabold hover:text-pink-300 transition-all duation-200 cursor-pointer"
                  data-config-id="auto-txt-3-2"
                  // onClick={() => scrollToSection("#cta")}
                >
                  Demo
                </a>
              </div>
              <div className="w-full md:w-1/3 xl:w-auto px-4 mb-6 md:mr-10 2xl:mr-16">
                <a
                  onClick={() => scrollToSection("#home")}
                  className="text-xl md:text-2xl font-extrabold hover:text-pink-300 transition-all duation-200 cursor-pointer"
                  data-config-id="auto-txt-4-2"
                  // onClick={() => scrollToSection("#home")}
                >
                  Contact
                </a>
              </div>
              <div className="w-full md:w-1/3 xl:w-auto px-4 mb-6">
                <a
                  onClick={() => scrollToSection("#footer")}
                  className="text-xl md:text-2xl font-extrabold hover:text-pink-300 transition-all duation-200 cursor-pointer"
                  data-config-id="auto-txt-7-2"
                  // onClick={() => scrollToSection("#footer")}
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 pt-16 pb-24 mx-auto">
          <p
            className="text-center text-xl md:text-2xl font-extrabold"
            data-config-id="auto-txt-8-2"
            data-scroll
            data-scroll-speed={2}
          >
            © 2024 Vision. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
