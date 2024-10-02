import React from 'react';

const About = () => {
  return (
    <>
      <section
        style={{
          backgroundImage:
            "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)",
        }}
        className="sm:h-screen flex items-center w-full lg:flex-nowrap sm:flex-wrap flex-col sm:flex-row"
      >
        {/* Left Part */}
        <div className="Left-part flex flex-col lg:w-2/4 items-center w-full sm:w-auto p-4">
          <div className="My-detail w-full p-2 my-2 sm:w-4/4 sm:ms-24">
            <h1 className="text-white text-4xl sm:text-6xl font-bold text-nowrap my-3">
              About Me
            </h1>
            <h3 className="text-white text-xl sm:text-2xl font-serif my-3">
              MERN Stack Developer
            </h3>
            <p className="text-white my-2 text-lg sm:text-2xl">
              I'M Muhammad Ali, a passionate web developer with a knack for turning
              ideas into captivating online experiences.
            </p>

            {/* Name */}
            <div className="border-2 border-white flex justify-between p-2 w-full sm:w-96 my-4">
              <p className="text-white text-xl">Name</p>
              <p className="text-white text-xl">:</p>
              <p className="text-white text-xl">Muhammad Ali</p>
            </div>

            {/* Email */}
            <div className="border-2 border-white flex justify-between p-2 w-full sm:w-96 my-4">
              <p className="text-white text-xl">Email</p>
              <p className="text-white text-xl">:</p>
              <p className="text-white text-lg font-normal">m.alibabar2004@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="border-2 border-white flex justify-between p-2 w-full sm:w-96 my-4">
              <p className="text-white text-xl">Phone no.</p>
              <p className="text-white text-xl">:</p>
              <p className="text-white text-xl">+92 333 4895899</p>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="Right-part w-full flex justify-center lg:w-2/4 sm:me-7 order-last sm:order-none mt-4 sm:mt-0">
          <img
            className="w-11/12 sm:w-auto"
            src="https://www.dharmishi.com/img/vectors/developer.png"
            alt="Developer"
          />
        </div>
      </section>
    </>
  );
};

export default About;
