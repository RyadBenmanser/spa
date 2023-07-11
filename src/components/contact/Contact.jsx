import React from "react";
import ContactText from "./ContactText";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div className=" h-full ">
      <div className="px-3 md:px-12 mx-auto">
        <div className=" flex flex-wrap justify-center">
          <ContactText />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
