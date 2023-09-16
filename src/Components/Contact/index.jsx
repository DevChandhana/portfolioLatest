import React, { useState } from "react";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="flex justify-center my-10">
        <div>
          <div className="flex justify-center">
            <h1 className="text-purple-800 text-[30px] font-extrabold">
              Contact
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-lg my-4">
              Feel free to reach me out for anything 🚀
            </p>
          </div>
          <div className="border p-7 m-5 rounded-xl border-purple-800 shadow-2xl shadow-blue-950">
            <div className="flex justify-center ">
              <input
                placeholder="Your Email"
                className="bg-transparent border h-12 w-96 my-4 p-2 rounded-md border-blue-800"
              />
            </div>
            <div className="flex justify-center">
              <input
                placeholder="Your Name"
                className="bg-transparent border h-12 w-96 my-4 p-2 rounded-md border-blue-800"
              />
            </div>
            <div>
              <input
                placeholder="Your Number"
                className="bg-transparent border h-12 w-96 my-4 p-2 rounded-md border-blue-800"
              />
            </div>
            <div className="flex justify-center">
              <textarea
                placeholder="Message"
                className="bg-transparent border h-18 w-96 my-4 p-2 rounded-md border-blue-800"
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-700 px-8 py-3 m-3 rounded-xl">
                <p>Submit</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="-mt-24"
      >
        <path
          fill="#5000ca"
          fill-opacity="1"
          d="M0,288L288,96L576,288L864,256L1152,192L1440,224L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Contact;
