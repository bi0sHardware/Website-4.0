import React, { useState } from "react";
import ButtonMailto from "../utils/Email";
import { send } from "emailjs-com";

function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showContact, setShowContact] = useState(true);
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_kvh048k", "template_w7ghtng", toSend, "azIhvZD00AvBAkhh4")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setShowModal(false);
        setShowContact(false);
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
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60 md:p-0 p-3 font-mono selection:bg-lime-500 selection:text-[#111827]">
          <div className="bg-emerald-600 hover:bg-emerald-400 hover:scale-110 text-slate-50 text-sm p-3 rounded-lg shadow-lg flex justify-between">
            <div className="font-medium text-white mx-2 inline-flex ">
              <button type="button" onClick={() => setShowModal(true)}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {showModal ? (
        <div className="flex justify-center items-center  fixed inset-0 z-50 outline-none focus:outline-none opacity-95 sm:rounded">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-3xl font=semibold mr-4 text-[#111827]">
                  Contact Us
                </h3>
                {/* <ButtonMailto
                label="Contact Us"
                mailto="mailto:aythihas2003@gmail.com"
              /> */}
                <form onSubmit={onSubmit}>
                  <div className="flex flex-col">
                    <label>Your name</label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="from name"
                      value={toSend.from_name}
                      onChange={handleChange}
                      className="rounded-lg"
                    />
                    <label>To name</label>
                    <input
                      type="text"
                      name="to_name"
                      placeholder="to name"
                      value={toSend.to_name}
                      onChange={handleChange}
                      className="rounded-lg"
                    />
                    <label>Your email</label>
                    <input
                      type="text"
                      name="reply_to"
                      placeholder="Your email"
                      value={toSend.reply_to}
                      onChange={handleChange}
                      className="rounded-lg"
                    />
                    <label>Message</label>
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Your message"
                      value={toSend.message}
                      onChange={handleChange}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-emerald-500 rounded text-white px-4 py-2 mt-2"
                    >
                      Submit
                    </button>
                    <button className="bg-emerald-500 rounded text-white px-4 py-2 mt-2">
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Banner;
