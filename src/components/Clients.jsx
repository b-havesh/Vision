import React from "react";
import indigoRight from "../assets/background-elements/pattern-dots-2-indigo-light-right.svg";
import indigoLeft from "../assets/background-elements/pattern-dots-2-indigo-light-left.svg";
import microsoft from "../assets/logo-clouds/microsoft.svg";
import google from "../assets/logo-clouds/google.svg";
import spotify from "../assets/logo-clouds/spotify.svg";
import slack from "../assets/logo-clouds/slack.svg";

const Clients = () => {
  return (
    <section
      id="clients"
      data-scroll-section
      data-section-id={2}
      data-share
      data-category="logo-clouds-default"
      data-component-id="c6ef1b4d_04_awz"
      className="py-26 bg-white relative overflow-hidden"
    >
      <img
        className="absolute top-0 right-0 w-1/2 md:h-full"
        src={indigoRight}
        alt
        data-config-id="auto-img-1-4"
      />
      <img
        className="absolute top-0 left-0 w-1/2 md:h-full"
        src={indigoLeft}
        alt
        data-config-id="auto-img-2-4"
      />
      <div className="container px-4 mx-auto relative">
        <h2
          className="text-center text-xl font-extrabold mb-6"
          data-config-id="auto-txt-1-4"
        >
          Trusted by the top companies in this industry
        </h2>
        <div className="flex flex-wrap -mx-4 -mb-8">
          <div
            className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 cursor-pointer"
            data-scroll
            data-scroll-speed="1"
          >
            <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
              <img src={microsoft} alt data-config-id="auto-img-3-4" />
            </div>
          </div>
          <div
            className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 cursor-pointer"
            data-scroll
            data-scroll-speed="2"
          >
            <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
              <img src={google} alt data-config-id="auto-img-4-4" />
            </div>
          </div>
          <div
            className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 cursor-pointer"
            data-scroll
            data-scroll-speed="3"
          >
            <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
              <img src={spotify} alt data-config-id="auto-img-5-4" />
            </div>
          </div>
          <div
            className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 cursor-pointer"
            data-scroll
            data-scroll-speed="4"
          >
            <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
              <img src={slack} alt data-config-id="auto-img-6-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
