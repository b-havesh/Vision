import React from "react";

const Cta = ({ scrollToSection }) => {
  return (
    <section
      id="cta"
      data-scroll-section
      data-section-id={4}
      data-share
      data-category="cta-default"
      data-component-id="f01d3dd5_09_awz"
      className="py-26 bg-white"
    >
      <div className="container px-4 mx-auto">
        <div className="py-12 px-6 md:p-20 bg-white border-3 border-indigo-900 shadow-md rounded-2xl">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
              <span
                className="text-lg font-extrabold text-indigo-500 mb-4"
                data-config-id="auto-txt-1-9"
              >
                Discover Vision
              </span>
              <h1
                className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-4"
                data-config-id="auto-txt-2-9"
              >
                Experience the Future of Image Analysis Today.
              </h1>
              <p
                className="text-xl font-extrabold leading-8"
                data-config-id="auto-txt-3-9"
              >
                Vision takes your images and turns them into actionable insights
                with cutting-edge AI. Start exploring now!
              </p>
            </div>
            <div className="w-full lg:w-2/5 px-4">
              <div className="flex flex-wrap items-center lg:justify-end">
                <a
                  className="inline-block w-full 2xl:w-auto py-4 px-6 mb-4 2xl:mb-0 2xl:mr-4 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                  data-config-id="auto-txt-4-9"
                  onClick={() => scrollToSection("#home")}
                >
                  Request a Demo
                </a>
                <a
                  className="inline-block w-full 2xl:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                  data-config-id="auto-txt-5-9"
                  onClick={() => scrollToSection("#insight")}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
