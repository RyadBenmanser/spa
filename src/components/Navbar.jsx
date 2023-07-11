import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Navbar = () => {
  const menuRight = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Services",
      link: "/services",
    },
  ];

  const menuLeft = [
    {
      name: <FaFacebookF className="w-5 h-5 " />,
      link: "/home",
    },
    {
      name: <FaTwitter className="w-5 h-5" />,
      link: "/home",
    },
    {
      name: <FaInstagram className="w-5 h-5" />,
      link: "/home",
    },
  ];
  const BookBtn = () => {
    return (
      <button className="border border-complementary content-center">
        Book now
      </button>
    );
  };
  return (
    <div className="drawer absolute ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="w-full navbar bg-transparent ">
          <div className="flex-none md:hidden ">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 gap-10">
            <div>
              <Image
                src={
                  "https://websitedemos.net/lotus-spa-02/wp-content/uploads/sites/936/2021/08/site-logo.svg"
                }
                height={40}
                width={40}
                alt=""
              />
            </div>
            <div className="flex-none hidden md:block ">
              <ul className="menu menu-horizontal ">
                {menuRight.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} className="text-lg font-medium ">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-none hidden md:block">
            <ul className="menu menu-horizontal items-center gap-5">
              {menuLeft.map((x, index) => {
                return (
                  <li key={index}>
                    <a className="">{x.name}</a>
                  </li>
                );
              })}
              <li>
                <BookBtn />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200" htmlFor="my-drawer-3">
          {menuRight.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          <li>
            <BookBtn />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
