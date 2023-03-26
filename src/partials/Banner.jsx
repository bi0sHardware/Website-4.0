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
              <button type="button" onClick={() => setShowModal(true)}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {showModal ? (
        <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none text-white sm:rounded backdrop-blur-sm drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative opacity-90 flex flex-col w-full bg-slate-500 outline-none focus:outline-none ">
              <div className="flex items-start justify-between p-5 rounded-t  drop-shadow-xl">
                <h3 className="font=semibold mr-4 text-transparent bg-clip-text  font-semibold text-5xl bg-gradient-to-br from-white to-gray-200">
                  Contact Us
                </h3>
                {/* <ButtonMailto
                label="Contact Us"
                mailto="mailto:aythihas2003@gmail.com"
              /> */}
                <form onSubmit={onSubmit}>
                  <div className="flex flex-col">
                    <label>Name</label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Jack the Ripper"
                      value={toSend.from_name}
                      onChange={handleChange}
                      className="rounded-lg w-88 text-black"
                    />
                    {/* <label>To name</label> */}
                    {/* <input
                      type="text"
                      name="to_name"
                      placeholder="to name"
                      value={toSend.to_name}
                      onChange={handleChange}
                      className="rounded-lg"
                    /> */}
                    <label>Email</label>
                    <input
                      type="text"
                      name="reply_to"
                      placeholder="Serialheckerr@email.com"
                      value={toSend.reply_to}
                      onChange={handleChange}
                      className="rounded-lg  text-black"
                    />
                    <label>Message</label>
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Your message"
                      value={toSend.message}
                      onChange={handleChange}
                      className="rounded-lg  text-black"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className=" rounded text-white px-4 py-2 mt-2"
                    >
                      <a href="#_" class="relative inline-block text-lg group">
                        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                          <span class="relative">Submit</span>
                        </span>
                        <span
                          class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                          data-rounded="rounded-lg"
                        ></span>
                      </a>
                    </button>
                    <button
                      className="rounded text-white px-4 py-2 mt-2"
                      onClick={() => setShowModal(false)}
                    >
                      <a href="#_" class="relative inline-block text-lg group">
                        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                          <span class="relative">Close</span>
                        </span>
                        <span
                          class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                          data-rounded="rounded-lg"
                        ></span>
                      </a>
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
