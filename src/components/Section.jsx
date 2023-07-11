import React from "react";
import { FaSpa, FaHands, FaHandsWash } from "react-icons/fa";
const Section = () => {
  const items = [
    {
      icon: <FaSpa className="w-14 h-14" />,
      title: "Wellness",
      description:
        "Mi vitae duis vel consequat netus condimentum hendrerit malesuada netus ornare urna.    ",
    },
    {
      icon: <FaHands className="w-14 h-14" />,
      title: "Beauty",
      description:
        "Dolor pretium duis sit turpis congue sed tortor molestie condimentum adipiscing.",
    },
    {
      icon: <FaHandsWash className="w-14 h-14" />,
      title: "Massage",
      description:
        "Pulvinar lectus viverra sit donec eget faucibus tristique dui velit consequat.",
    },
  ];

  return (
    <section className="mx-auto container">
      <div className="px-8 mx-auto text-center w-full">
        <p className="text-center text-2xl my-4 text-secondary">
          expertise ares
        </p>
        <h1 className="mb-4 text-4xl font-extrabold text-warm tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl sm:w-[50%] mx-auto">
          Allow your body, mind and soul sense a haven of tranquility
        </h1>

        <div className=" mx-auto w-full ">
          <div className="flex flex-wrap justify-center lg:justify-between items-center w-full text-secondary">
            {items.map((x, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="mr-5 mb-5 w-full md:w-80 lg:mb-0 hover:text-gray-800 text-left"
                >
                  <div className="flex items-start md:w-72 w-full flex-col">
                    {x.icon}
                    <h1 className="text-4xl text-warm">{x.title}</h1>
                    <p className="text-cool text-2xl">{x.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
