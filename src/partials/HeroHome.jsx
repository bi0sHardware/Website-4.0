import React, { useState } from "react";
import Modal from "../utils/Modal";
import { send } from "emailjs-com";
import HeroImage from "../images/hero-image.png";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
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
        alert("Success! Your mail was sent. You will hear from us shortly");
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
    <section className="relative bg-[#111827] selection:bg-lime-500 font-mono">
      {/* Illustration behind hero content */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 ">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16  ">
            <h1
              className=" text-5xl md:text-6xl font-extrabold  leading-tighter tracking-tighter mb-4 text-white"
              data-aos="zoom-y-out"
            >
              bi0s{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#9ca3af]">
                Hardware
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-white mb-8 "
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                We are a team of college students from Amrita university,
                passionate about cyber security, and dedicated to protect
                tommorow's cyberspace. At our student-run club, our mentors
                train freshers in cyber-security through CTFs. We organize
                infosec events, trainings, and work on a wide variety of
                cyber-security research projects.
              </p>
              <div className="border-b width-full mx-32 border-gray-500" />
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                {/* {0 ? (
                  <div>
                    <div className=" bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60 md:p-0 p-3 font-mono selection:bg-lime-500 selection:text-[#111827]">
                      <div className="bg-transparent border-2 border-white rounded-tl-lg rounded-br-lg   hover:bg-white hover:scale-110 text-white hover:text-[#111827] text-sm p-3  shadow-lg flex justify-between ">
                        <div className="font-medium   mx-4 inline-flex ">
                          <button
                            type="button"
                            onClick={() => setShowModal(true)}
                            className="hover:text-[#111827] "
                          >
                            Contact Us
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null} */}
                {/* <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div> */}
              </div>
            </div>
          </div>
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
                      <button
                        type="submit"
                        className="bg-emerald-500 rounded text-white px-4 py-2 mt-2"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={HeroImage}
                  width="768"
                  height="432"
                  alt="Hero"
                />
                <svg
                  className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="hero-ill-a"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="99.24%"
                      id="hero-ill-b"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="48.57%" />
                      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="hero-ill-e"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle
                      fillOpacity=".04"
                      fill="url(#hero-ill-a)"
                      cx="384"
                      cy="216"
                      r="128"
                    />
                    <circle
                      fillOpacity=".16"
                      fill="url(#hero-ill-b)"
                      cx="384"
                      cy="216"
                      r="96"
                    />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>
              <button
                className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button>
            </div>

            {/* Modal */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <iframe
                  className="absolute w-full h-full"
                  src="https://player.vimeo.com/video/174002812"
                  title="Video"
                  allowFullScreen
                ></iframe>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
