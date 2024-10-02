import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      {/* Contact Header Section */}
      <div className="w-full p-2 flex flex-col items-center">
        <div className="w-full sm:w-3/5 p-2 rounded-lg">
          <h1 className="text-4xl sm:text-6xl text-white text-center my-2">
            Contact me
          </h1>
          <p className="text-lg sm:text-2xl text-white text-center my-4">
            In order to discuss the project in more detail, please contact me by
            phone or through social networks. The productivity will have a
            personal meeting if you are in Pakistan.
          </p>
        </div>
      </div>

      {/* Google Maps Embed Section */}
      <div className="p-2 flex">
        <div className="w-full flex justify-center flex-col items-center my-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13229.79529339865!2d73.0327035794464!3d33.600708989682175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df949e266eb109%3A0x83a7bfaa5f653a68!2sRawalpindi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709395256083!5m2!1sen!2s"
            width="100%"
            height="220"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Contact Form */}
          <div className="w-full flex flex-col items-center p-5">
            <input
              type="text"
              className="outline-none w-full sm:w-96 my-2 h-12 text-xl p-3 border-b-4 border-black bg-gray-300"
              placeholder="First Name"
            />
            <input
              type="text"
              className="outline-none w-full sm:w-96 my-2 h-12 text-xl p-3 border-b-4 border-black bg-gray-300"
              placeholder="Email"
            />
            <textarea
              className="outline-none w-full sm:w-96 h-36 text-xl p-3 my-4 border-b-4 border-black bg-gray-300"
              placeholder="Text your message here..."
            />
            <button className="bg-red-400 w-24 h-10 font-bold my-2 opacity-80 hover:opacity-100">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
