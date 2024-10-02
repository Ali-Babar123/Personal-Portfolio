import React from "react";
import "./Navbar.css";
import EcommerceStoreImage from "../assets/ECommerce Store.png"
import NewMonkeyImage from "../assets/NewsMonkey.png"
import TextUtilsImage from "../assets/Text Utils.png"

const Projects = () => {
  return (
    <>
      <div className="w-full Projects p-5 my-3 flex gap-28 justify-center flex-wrap">
        <div
          className="detail border-4 border-white w-96 p-2 boxShadow hover:scale-110 transition-all delay-105"
          style={{
            backgroundImage:
              "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          <div className="Project-Image">
            <img src={EcommerceStoreImage} />
          </div>

          <div className="Project-Detail flex flex-col items-center">
            <h1 className="text-white text-2xl my-3 text-center">
              E-commerce Website
            </h1>
            <p className="text-white text-xl text-center">
              The project aims to develop a fully functional e-commerce website
              using ReactJS for the frontend.
            </p>
            <button className="bg-red-400 w-36 h-10 my-4 font-bold">
              <a
                href="https://github.com/Ali-Babar123/StyleSpot-ECommerce-Website"
                className="hover:text-black"
              >
                View on Github
              </a>
            </button>
          </div>
        </div>

        <div
          className="detail border-4 boxShadow border-white w-96 p-2 drop-shadow-lg hover:scale-110 transition-all delay-100"
          style={{
            backgroundImage:
              "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          <div className="Project-Image">
            <img src={NewMonkeyImage} />
          </div>

          <div className="Project-Detail flex flex-col items-center">
            <h1 className="text-white text-2xl my-3 text-center">
              NewsMonkey App
            </h1>
            <p className="text-white text-xl text-center">
            Get personalized news updates with NewsMonkey, tailored to 
            your interests in world events, sports, tech, and more.
            </p>
            <button className="bg-red-400 w-36 h-10 my-4 font-bold">
              <a
                href="https://github.com/Ali-Babar123/NewsMonkey-App"
                className="hover:text-black"
              >
                View on Github
              </a>
            </button>
          </div>
        </div>

        <div
          className="detail border-4 border-white w-96 p-2 boxShadow drop-shadow-lg hover:scale-110 transition-all delay-100"
          style={{
            backgroundImage:
              "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          <div className="Project-Image">
            <img src={TextUtilsImage} />
          </div>

          <div className="Project-Detail flex flex-col items-center">
            <h1 className="text-white text-2xl my-3 text-center">
              Text Utilise
            </h1>
            <p className="text-white text-xl text-center">
            Text Utilize enables users to obtain accurate word counts and
              analyze character frequencies within a document.{" "}
            </p>
            <button className="bg-red-400 w-36 h-10 my-4 font-bold">
              <a
                href="https://github.com/Ali-Babar123/TextUtils-Website"
                className="hover:text-black"
              >
                View on Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;