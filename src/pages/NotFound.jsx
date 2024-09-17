import React from "react";

const NotFound = () => {
  return (
    <section data-scroll-section className="page_404">
      <div className="container">
        <div>
          <div>
            <div className="text-center flex justify-center items-center flex-col w-screen">
              <div className="four_zero_four_bg w-1/2 h-[400px] bg-center">
                <h1 className="text-center text-8xl">404</h1>
              </div>
              <div className="-mt-12">
                <h3>Look like you&apos;re lost</h3>
                <p>the page you are looking for not avaible!</p>
                <a
                  href
                  className="link_404 bg-[#6A00FF] p-3 px-6 m-6 inline-block text-white cursor-pointer rounded hover:shadow transition-all duration-200 hover:bg-[rebeccapurple]"
                >
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
