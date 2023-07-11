import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className="border-2 h-screen">
        <div className={`w-full h-full bg-primary ${styles.header}`}>
          <div className="w-full h-full flex justify-center items-center">
            <div className="container lg:mr-[50%] md:mb-0 mb-[25%] mx-10 w-full">
              <div className="md:text-xl text-lg">WELCOME TO LOTUS SPA</div>
              <div className="my-5">
                <h1 className="md:text-7xl text-5xl">
                  Rejuvenated Body & Soul
                </h1>
              </div>
              <div>
                <p className=" md:text-[2vw] text-2xl">
                  Ante risus blandit vitae ut id proin semper nunc porttitor
                  facilisi nulla netus sed vel
                </p>
              </div>
              <div className="mt-8 w-full h-full p-5">
                <button className="w-full h-full btn md:text-[1.7rem]">
                  Book An Appointement -&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
