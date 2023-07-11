import React from "react";

const ContactForm = () => {
  const InputTab = [{ name: "" }, { name: "" }, { name: "" }];

  return (
    <div className="w-11/12 md:w-6/12 my-6 md:m-0 border-l-2 px-8 ">
      <span className="text-4xl">Contact</span>
      <form action="">
        {InputTab.map((x, index) => {
          return (
            <div key={index} className="form-control w-full ">
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input  bg-neutral-200 w-full "
              />
            </div>
          );
        })}
      </form>
      <div className="my-6 flex justify-end">
        <button className="btn">Envoyez</button>
      </div>
    </div>
  );
};

export default ContactForm;
