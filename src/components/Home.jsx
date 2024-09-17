import React, { useEffect } from "react";
import circle from "../assets/circle-icon-green.svg";
import { Link } from "react-router-dom";

const Home = ({ isAuthenticated, loginWithRedirect }) => {
  return (
    <section
      data-section-id={1}
      id="home"
      data-scroll-section
      data-share
      data-category="headers-default"
      data-component-id="0eda7428_07_awz"
      className="bg-white pb-10"
    >
      <div className="py-16 md:py-24 lg:pt-40 lg:pb-52 px-2 md:px-6 mx-4 md:mx-10 bg-gradient-to-br to-[#E6E6FA] from-[#6A00FF] border-3 border-indigo-900 shadow-md rounded-2xl text-white">
        <div className="container px-4 mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="text-xl md:text-2xl font-extrabold text-black"
              data-config-id="auto-txt-7-7"
            >
              AI Powered Insights
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold font-heading mt-1 mb-8"
              data-config-id="auto-txt-8-7"
              data-scroll
              data-scroll-speed={2}
            >
              See Beyond the Surface with{" "}
              <span className="text-indigo-900">Vision</span>
            </h1>
            <p
              className="text-xl md:text-2xl font-extrabold leading-8 mb-8"
              data-config-id="auto-txt-9-7"
            >
              Meet Vision, the ultimate AI tool that helps you explore and
              understand images like never before. Simply upload an image, ask a
              question, and let our AI reveal its secrets.
            </p>
            <div className="max-w-2xl mx-auto">
              {!isAuthenticated ? (
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-wrap -mx-2 mb-4 justify-center"
                >
                  <div className="w-full md:w-auto lg:w-2/3 px-2 mb-2 md:mb-0">
                    <input
                      className="inline-block w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded outline-none text-indigo-900"
                      type="email"
                      placeholder="hello@gmail.dev"
                      required
                    />
                  </div>
                  <div className="w-full md:w-auto lg:w-auto px-2">
                    <button
                      className="inline-flex w-full md:w-auto items-center justify-center h-full py-4 px-5 leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 rounded transition duration-200"
                      data-config-id="auto-txt-10-7"
                      type="submit"
                      onClick={loginWithRedirect}
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="w-full md:w-auto lg:w-auto px-2">
                    <Link
                      to="/product"
                      className="inline-flex w-full md:w-auto items-center justify-center h-full py-4 px-5 leading-6 text-lg text-white mb-12 font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 rounded transition duration-200"
                      data-config-id="auto-txt-10-7"
                    >
                      Try it out
                    </Link>
                  </div>
                </>
              )}
            </div>
            <div className="flex items-start md:items-center justify-center">
              <img
                className="block w-6 h-6 mr-2 object-contain"
                src={circle}
                alt
                data-config-id="auto-img-2-7"
              />
              <span
                className="md:text-lg font-extrabold"
                data-config-id="auto-txt-11-7"
              >
                Start your free 14-day trial today, no credit card required.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
