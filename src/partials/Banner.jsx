import React, { useState } from "react";
import ButtonMailto from "../utils/Email";
import { send } from "emailjs-com";

function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showContact, setShowContact] = useState(true);
  const [toSend, setToSend] = useState({
    from_name: "",
    // to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_kvh048k", "template_w7ghtng", toSend, "azIhvZD00AvBAkhh4")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setShowModal(false);
        setShowContact(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setShowModal(false);
        alert("Oops! your mail was not sent. Please try again later.");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      {showContact ? (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60 md:p-0 p-3 font-mono  selection:bg-lime-500 selection:text-[#111827]">
          <div className="bg-emerald-600 hover:bg-emerald-400 hover:scale-110 text-slate-50 text-sm p-3 rounded-lg shadow-lg flex justify-between">
            <div className="font-medium text-white mx-2 inline-flex ">
              <a href="mailto:aythihas2003@gmail.com">
                <button type="button" onClick={() => setShowModal(true)}>
                  Contact us
                </button>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Banner;
