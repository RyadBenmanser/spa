import Image from "next/image";
import React from "react";

const Services = () => {
  const serviceTab = [
    {
      num: "01",
      title: "Ayurvedic Treatment",
      description:
        "Maecenas in cursus laoreet pulvinar enim commodo justo sed euismod velit.",
    },
    {
      num: "02",
      title: "Ozone Therapy",
      description:
        "Ac praesent feugiat at egestas vitae massa euismod sit nibh aenean elit.",
    },
    {
      num: "03",
      title: "Stone Cure",
      description: `Mi ornare ac eleifend eget eget aliquet lectus nec augue massa amet.`,
    },
  ];
  return (
    <div className="container my-24 mx-auto md:px-6 ">
      {/* Section: Design Block */}
      <section className="mb-32">
        <h2 className="mb-12 text-center text-3xl font-bold">
          The best of our services{" "}
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="mb-12  shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 ">
            <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] my-5 bg-no-repeat shadow-lg dark:shadow-black/20">
              <Image
                width={340}
                height={200}
                src="https://websitedemos.net/lotus-spa-02/wp-content/uploads/sites/936/2021/08/lotus-spa-template-homepage-service-img.jpg"
                className=""
                alt=""
              />
              <a>
                <div className="absolute overflow-hidden top-0 right-0 bottom-0 left-0 h-full w-full bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                  <div className="flex h-full items-center justify-center">
                    <div className="px-6 py-12 text-center text-white md:px-12 opacity-100">
                      <p className="text-neutral-50 text-xl">
                        Consequat elementum, dolor egestas at faucibus dictumst
                        at ultrices auctor gravida neque, dolor molestie ut
                        fames porttitor egestas quisque bibendum felis nascetur
                        maecenas et
                      </p>
                      <button className="btn btn-secondary">Book Now</button>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <div className="absolute overflow-hidden top-0 right-0 bottom-0 left-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
            {serviceTab.map((x, index) => {
              return (
                <div key={index} className="mb-12 flex border-t-2 text-2xl ">
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold text-secondary">{x.title}</p>
                    <p className=" text-warm">{x.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="container">
        <div className="flex justify-center flex-col items-center mx-auto">
          <h2 className="text-xl text-secondary">APPOINTMENT</h2>
          <div className="text-6xl text-center text-warm">
            <h2>Want to make booking or have a question?</h2>
          </div>
          <div className="text-2xl text-cool">
            <small>Call us on 123-456-7890 or simply book an appointment</small>
          </div>
          <div className=" ">
            <button className="px-16 my-4 text-2xl btn border content-center">
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
