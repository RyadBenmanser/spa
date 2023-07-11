import React from "react";
import { FaLocationDot, FaRegClock, FaStore } from "react-icons/fa6";

const ContactText = () => {
  return (
    <div className="w-11/12 md:w-1/2 ">
      <div className="w-9/12 ">
        <div className="text-lg mb-6">WHAT ARE YOU WAITING FOR...</div>
        <div>
          <h1 className="text-4xl my-4">Make an appointment</h1>
        </div>
        <div>
          <p className="text-2xl my-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div className="my-2 text-xl w-11/12">
        <span className="flex items-center ">
          <FaLocationDot className="mr-1" /> Our Location
        </span>
        <div className="pl-5  ">
          <span>123 Fifth Avenue, New York, NY 10160, United States.</span>
        </div>
      </div>
      <div className="text-lg w-11/12">
        <div className=" flex flex-wrap my-10 ">
          <div className="container lg:w-1/2 ">
            <span className="flex items-center ">
              <FaRegClock className="mr-1" /> OPENING HOURS
            </span>
            <div className="pl-5">
              <span>Mon-Fri: 6am-10pm</span>
              <br />
              <span>Sat-Sun: 8am-2pm</span>
            </div>
          </div>
          <div className="container lg:w-1/2  ">
            <span className="flex items-center ">
              <FaStore className="mr-1" /> CONTACT
            </span>
            <div className="pl-5">
              <span>Email: mail@example.com</span>
              <br />
              <span>Phone: +1 123-456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactText;
