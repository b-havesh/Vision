import React from "react";
import board from "../assets/img/ai.jpg";
import iconMessage from "../assets/features/icon-message.svg";
import iconBar from "../assets/features/icon-bar.svg";
import iconPeople from "../assets/features/icon-people.svg";

const Insight = () => {
  return (
    <section
      id="insight"
      data-scroll-section
      data-section-id={3}
      data-share
      data-category="features-default"
      data-component-id="1f1d0081_17_awz"
      className="py-26 bg-white"
    >
      <div className="container px-4 mx-auto relative">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <span
            className="text-lg font-extrabold text-indigo-500"
            data-config-id="auto-txt-1-17"
          >
            Discover Vision
          </span>
          <h1
            className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6"
            data-config-id="auto-txt-2-17"
            data-scroll
            data-scroll-speed={1}
          >
            Uncover Deeper Insights with Every Image
          </h1>
          <p
            className="text-xl font-extrabold leading-8"
            data-config-id="auto-txt-3-17"
            data-scroll
            data-scroll-speed={2}
          >
            Vision provides a powerful tool for understanding your images. From
            detailed analysis to insightful answers, our platform integrates
            advanced AI to help you get the most out of every image.
          </p>
        </div>

        <img
          className="block w-full h-112 lg:h-156 mb-16 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
          src={board}
          alt
          data-config-id="auto-img-1-17"
        />
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <div
              className="h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center"
              data-scroll
              data-scroll-speed={1}
            >
              <img
                className="block mx-auto mb-4"
                src={iconMessage}
                alt="Image Analysis"
                data-config-id="auto-img-2-17"
              />
              <h4
                className="text-2xl font-extrabold mb-6"
                data-config-id="auto-txt-4-17"
              >
                Instant Insights
              </h4>
              <p
                className="text-lg font-extrabold leading-7"
                data-config-id="auto-txt-5-17"
              >
                Upload an image and receive detailed insights and answers about
                its content instantly with AI-powered analysis.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <div
              className="h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center"
              data-scroll
              data-scroll-speed={2}
            >
              <img
                className="block mx-auto mb-4"
                src={iconBar}
                alt="Custom Queries"
                data-config-id="auto-img-3-17"
              />
              <h4
                className="text-2xl font-extrabold mb-6"
                data-config-id="auto-txt-6-17"
              >
                Ask Anything
              </h4>
              <p
                className="text-lg font-extrabold leading-7"
                data-config-id="auto-txt-7-17"
              >
                Pose any question about the uploaded image and get precise
                answers tailored to your queries, enhancing your understanding
                effortlessly.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <div
              className="h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center"
              data-scroll
              data-scroll-speed={3}
            >
              <img
                className="block mx-auto mb-4"
                src={iconPeople}
                alt="User-Friendly Interface"
                data-config-id="auto-img-4-17"
              />
              <h4
                className="text-2xl font-extrabold mb-6"
                data-config-id="auto-txt-8-17"
              >
                User-Friendly Interface
              </h4>
              <p
                className="text-lg font-extrabold leading-7"
                data-config-id="auto-txt-9-17"
              >
                Enjoy a seamless experience with our intuitive interface that
                makes uploading images and querying them a breeze.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
