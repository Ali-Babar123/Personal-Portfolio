import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        alignItems: "center",
        height: "90vh",
      }}
      className="HeroSection h-screen flex flex-col lg:flex-row items-center justify-center w-full"
    >
      <div className="Left-part flex flex-col lg:w-2/4 items-start text-left">
        <div className="Social-links p-2 flex justify-center lg:justify-start">
          <div
            className="Instagram border-2 border-red-400 w-12 h-12 flex items-center justify-center rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)",
            }}
          >
            <a href="https://www.linkedin.com/in/muhammad-ali143/">
              <FaLinkedin className="text-2xl text-white hover:scale-110" />
            </a>
          </div>
          <div
            className="Github border-2 border-red-400 w-12 h-12 flex items-center justify-center rounded-full ml-2" /* Adjusted margin */
            style={{
              backgroundImage:
                "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)",
            }}
          >
            <a href="https://github.com/Ali-Babar123">
              <FaGithub className="text-2xl text-white hover:scale-110" />
            </a>
          </div>
        </div>

        <div className="My-detail w-full px-2">
          <h4 className="text-white text-xl lg:text-3xl font-serif">Hello!</h4>
          <h1 className="text-white text-4xl lg:text-6xl font-bold my-3">
            I'm{" "}
            <span className="text-4xl lg:text-6xl" style={{color: "#ff6b6b"}}>
              Muhammad Ali
            </span>
          </h1>
          <h3 className="text-white text-xl lg:text-2xl font-serif my-3">
            MERN Stack Developer
          </h3>
          <p className="text-white text-lg lg:text-2xl my-2">
            I'M Muhammad, a passionate web developer with a knack for turning
            ideas into captivating online experiences.
          </p>
        </div>
      </div>

      <div className="Right-part flex lg:w-2/4 justify-center">
        <img
          src="https://www.dharmishi.com/img/vectors/developer.png"
          alt="Developer"
          className="w-full h-auto max-w-xs lg:max-w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
