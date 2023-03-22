import React, { useState } from "react";
import ButtonMailto from "../utils/Email";
import { send } from "emailjs-com";

function Topbanner() {
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
        <div class="relative isolate  font-mono flex items-center z-50 gap-x-6 overflow-hidden bg-slate-500 py-1.5 px-6 sm:px-3.5 sm:before:flex-1">
          <svg
            viewBox="0 0 577 310"
            aria-hidden="true"
            class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
          >
            <path
              id="1d77c128-3ec1-4660-a7f6-26c7006705ad"
              fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)"
              fill-opacity=".3"
              d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z"
            />
            <defs>
              <linearGradient
                id="49a52b64-16c6-4eb9-931b-8e24bf34e053"
                x1="614.778"
                x2="-42.453"
                y1="26.617"
                y2="96.115"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            viewBox="0 0 577 310"
            aria-hidden="true"
            class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
          >
            <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
          </svg>
          <div class="flex flex-wrap items-center gap-y-2 gap-x-4 ">
            <p class="sm:text-sm md:text-lg leading-6 text-white">
              Amrita Bangalore
              <svg
                viewBox="0 0 2 2"
                class="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <strong class="font-semibold">COMING SOON</strong>
            </p>
          </div>
          <div class="flex flex-1 justify-end">
            <button
              type="button"
              class="-m-2 p-2 focus-visible:outline-offset-[-4px]"
              onClick={() => setShowContact(false)}
            >
              <span class="sr-only">Dismiss</span>
              <svg
                class="h-5 w-5 text-gray-900"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
      {showModal ? (
        <div className="flex justify-center items-center font-mono fixed inset-0 z-50 outline-none focus:outline-none opacity-95 sm:rounded  ">
          <div className="relative  my-6 mx-auto w-screen">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-900 outline-none focus:outline-none ">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t py-8 px-8 ">
                <div class="container py-16 md:py-20" id="contact">
                  <h2 class="text-center  text-4xl font-semibold uppercase text-emerald-500 sm:text-5xl lg:text-6xl">
                    Have Any Questions?
                  </h2>

                  <div class="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
                    <p class="font-body text-white">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      hendrerit condimentum turpis nisl sem, viverra habitasse
                      urna ante lobortis fermentum accumsan. Viverra habitasse
                      urna ante lobortis fermentum accumsan.
                    </p>
                  </div>
                  <form class="mx-auto w-full pt-10 sm:w-3/4">
                    <div class="flex flex-col md:flex-row">
                      <input
                        class="mr-3 w-full rounded border border-gray-400 px-4 py-3  text-black md:w-1/2 lg:mr-5"
                        placeholder="Name"
                        type="text"
                        id="name"
                      />

                      <input
                        class="mt-6 w-full rounded border border-gray-400 px-4 py-3  text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                        placeholder="Email"
                        type="text"
                        id="email"
                      />
                    </div>
                    <textarea
                      class="mt-6 w-full rounded border border-gray-400 px-4 py-3  text-black md:mt-8"
                      placeholder="Message"
                      id="message"
                      cols="30"
                      rows="10"
                    ></textarea>
                    <button class=" flex items-center justify-center rounded bg-emerald-500 px-8 py-3 z-50 font-header text-lg font-bold uppercase text-white hover:bg-emerald-600">
                      Send
                    </button>
                  </form>
                </div>
                <button
                  className="relative inline-block text-lg my-8 group"
                  onClick={() => setShowModal(!showModal)}
                >
                  <span className="relative z-10 block px-5 py-3   overflow-hidden  font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-8  rounded-lg bg-gray-100"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-emerald-500 group-hover:-rotate-180 ease"></span>
                    <span className="relative">X</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-emerald-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Topbanner;
