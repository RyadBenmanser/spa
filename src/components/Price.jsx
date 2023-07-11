import React from "react";

const Price = () => {
  const pricingTab = [
    {
      num: "01",
      title: "Luxury Spa",
      description:
        "Suspendisse lacus, dolor auctor nec, iaculis amet vel facilisi nulla dignissim aliquam erat id eget habitasse leo facilisis tempor vulputate facilisis varius nunc pulvinar.",
      price: "$75",
    },
    {
      num: "01",
      title: "Luxury Spa",
      description:
        "Suspendisse lacus, dolor auctor nec, iaculis amet vel facilisi nulla dignissim aliquam erat id eget habitasse leo facilisis tempor vulputate facilisis varius nunc pulvinar.",
      price: "$75",
    },
    {
      num: "01",
      title: "Luxury Spa",
      description:
        "Suspendisse lacus, dolor auctor nec, iaculis amet vel facilisi nulla dignissim aliquam erat id eget habitasse leo facilisis tempor vulputate facilisis varius nunc pulvinar.",
      price: "$75",
    },
    {
      num: "01",
      title: "Luxury Spa",
      description:
        "Suspendisse lacus, dolor auctor nec, iaculis amet vel facilisi nulla dignissim aliquam erat id eget habitasse leo facilisis tempor vulputate facilisis varius nunc pulvinar.",
      price: "$75",
    },
  ];
  return (
    <div
      className=" mx-auto w-full bg-cover bg-fixed"
      style={{
        backgroundImage:
          "url('https://websitedemos.net/lotus-spa-02/wp-content/uploads/sites/936/2021/08/lotus-spa-template-homepage-services-section-img-bg.jpg')",
      }}
    >
      <div className="md:w-6/12 mx-auto py-12 text-neutral-50 text-center">
        <div className="h-56 flex flex-col justify-around items-center">
          <div className="text-lg">
            <small>HAVE A LOOK AT OUR</small>
          </div>
          <div className="text-5xl">
            <h1>Massage therapy center </h1>
          </div>
          <div className="w-10/12 text-2xl">
            <span>
              You deserve better than a rushed massage by a rookie therapist in
              a place that makes you feel more stressed.
            </span>
          </div>
        </div>
      </div>

      <div className="lg:container flex flex-wrap mx-auto md:w-full py-12">
        {pricingTab.map((x, index) => {
          return (
            <div
              key={index}
              className="border-x-2 border-y md:w-6/12 border-black px-12 h-96  py-6 text-center md:text-left text-neutral-50"
            >
              <div className="w-full flex flex-col mx-auto h-full justify-between">
                <small className="text-lg">01.</small>
                <h1 className="text-4xl">Luxury Spa</h1>
                <p className="text-xl">
                  Suspendisse lacus, dolor auctor nec, iaculis amet vel facilisi
                  nulla dignissim aliquam erat id eget habitasse leo facilisis
                  tempor vulputate facilisis varius nunc pulvinar.
                </p>
                <span className="text-2xl">
                  <b> Starting From $75 </b>
                </span>
                <div>
                  <button className="border rounded-md px-6 py-3 hover:text-cool hover:bg-neutral-50">
                    Book Now -&gt;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Price;
