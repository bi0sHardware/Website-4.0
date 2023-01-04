import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Banner from "../partials/Banner";

function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        <section className="relative bg-[#111827] text-white ">
          {/* Section background (needs .relative class on parent and next sibling elements) */}
          <div
            className="absolute inset-0 bg-[#111827] pointer-events-none mb-16"
            aria-hidden="true"
            id="about"
          ></div>
          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-[#111827] transform -translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 md:pt-20 flex flex-row  text-left">
              {/* Section header */}
              <div className=" flex flex-col">
                <div className="max-w-3xl text-left pb-10 md:pb-16 mt-28 ">
                  <h1 className="h2 mb-4">About bi0s Hardware</h1>
                  <p className="text-lg text-white">
                    Team bi0s is a cyber-security enthusiast club and research
                    group from Amrita Vishwa Vidyapeetham (University), India.
                    The team was formally launched as a CTF team in 2007 under
                    the mentorship of Vipin Pavithran, a faculty at Amrita's
                    Centre for Cyber Security. It was among the first CTF team
                    from India, and ever-since has been spearheading CTFs in the
                    country - from starting InCTF, India's First CTF and
                    consistently ranking No.1 in CTFTime since it was
                    established. Over the years, the team has evolved into a
                    cyber-security research group, with specialized teams in 10+
                    cyber-security focus areas.
                  </p>
                </div>
              </div>
              {/* Section content */}{" "}
              <div className="md:grid md:grid-cols-8 md:gap-6  mt-24 ">
                {/* Content */}
                <div
                  className=" ml-48 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                  data-aos="fade-right "
                >
                  <div className="mb-8 md:mb-0">
                    {/* Tabs items */}
                    <div
                      className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                      data-aos="zoom-y-out"
                      ref={tabs}
                    >
                      <div className="relative flex flex-col text-right lg:text-right">
                        <div
                          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                          data-aos="zoom-y-out"
                          ref={tabs}
                        >
                          <div className="relative flex flex-col text-right lg:text-right">
                            <Transition
                              show={tab === 1}
                              appear={true}
                              className="w-full"
                              enter="transition ease-in-out duration-700 transform order-first"
                              enterStart="opacity-0 translate-y-16"
                              enterEnd="opacity-100 translate-y-0"
                              leave="transition ease-in-out duration-300 transform absolute"
                              leaveStart="opacity-100 translate-y-0"
                              leaveEnd="opacity-0 -translate-y-16"
                            >
                              <div className="relative inline-flex flex-col">
                                <img
                                  className="md:max-w-none mx-auto rounded"
                                  src={FeaturesBg}
                                  width="500"
                                  height="462"
                                  alt="Features bg"
                                />
                                <img
                                  className="md:max-w-none absolute w-full left-0 transform animate-float"
                                  src={FeaturesElement}
                                  width="500"
                                  height="44"
                                  alt="Element"
                                  style={{ top: "30%" }}
                                />
                              </div>
                            </Transition>
                            <Transition
                              show={tab === 2}
                              appear={true}
                              className="w-full"
                              enter="transition ease-in-out duration-700 transform order-first"
                              enterStart="opacity-0 translate-y-16"
                              enterEnd="opacity-100 translate-y-0"
                              leave="transition ease-in-out duration-300 transform absolute"
                              leaveStart="opacity-100 translate-y-0"
                              leaveEnd="opacity-0 -translate-y-16"
                            >
                              <div className="relative inline-flex flex-col">
                                <img
                                  className="md:max-w-none mx-auto rounded"
                                  src={FeaturesBg}
                                  width="500"
                                  height="462"
                                  alt="Features bg"
                                />
                                <img
                                  className="md:max-w-none absolute w-full left-0 transform animate-float"
                                  src={FeaturesElement}
                                  width="500"
                                  height="44"
                                  alt="Element"
                                  style={{ top: "30%" }}
                                />
                              </div>
                            </Transition>
                            <Transition
                              show={tab === 3}
                              appear={true}
                              className="w-full"
                              enter="transition ease-in-out duration-700 transform order-first"
                              enterStart="opacity-0 translate-y-16"
                              enterEnd="opacity-100 translate-y-0"
                              leave="transition ease-in-out duration-300 transform absolute"
                              leaveStart="opacity-100 translate-y-0"
                              leaveEnd="opacity-0 -translate-y-16"
                            >
                              <div className="relative inline-flex flex-col">
                                <img
                                  className="md:max-w-none mx-auto rounded"
                                  src={FeaturesBg}
                                  width="500"
                                  height="462"
                                  alt="Features bg"
                                />
                                <img
                                  className="md:max-w-none absolute w-full left-0 transform animate-float"
                                  src={FeaturesElement}
                                  width="500"
                                  height="44"
                                  alt="Element"
                                  style={{ top: "30%" }}
                                />
                              </div>
                            </Transition>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-3xl  pb-10 md:pb-16 mt-28 ml-28  transition ease-in-out delay-150 hover:scale-110 duration-300">
              <div
                className={` text-center text-lg p-5 rounded  transition duration-300 ease-in-out mb-3 ${
                  tab !== 2
                    ? "bg-[#111827]  "
                    : "bg-gray-200 border-transparent"
                }`}
              >
                <h1 className="h2 mb-4 text-center">How we function?</h1>
                <p className="text-lg text-white ml-16">
                  The team functions as a family, and uses a mentor mentee model
                  wherein senior students train and pass on experience & skills
                  they gained to their junior mentees. This happens through out
                  their years at the community, and is facilitated through
                  various activities the club organizes & events and contests it
                  participates as a team.
                </p>
              </div>
            </div>
            <div className="max-w-3xl text-left pb-10 md:pb-16 mt-28 ">
              <h1 className="h2 mb-4">What do we do?</h1>
              <p className="text-lg text-white">
                Here are some of the things our members do:
                <div className="md:grid md:grid-cols-4 md:gap-6 text-white ml-16">
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                    data-aos="fade-right"
                  >
                    <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 text-gray-400 "></div>
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out hover:scale-110 mb-3 ${
                        tab !== 2
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(1);
                      }}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1 text-gray-400">
                          Learning & Researching on various Cyber Security
                          fields
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <svg
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                        </svg>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out hover:scale-110 mb-3 ${
                        tab !== 2
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(1);
                      }}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1 text-gray-400">
                          Participating & organizing CTFs across the world
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <svg
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                        </svg>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out hover:scale-110 mb-3 ${
                        tab !== 2
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(1);
                      }}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1 text-gray-400">
                          Organizing workshops & training programmes
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <svg
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                        </svg>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5 hover:scale-110 rounded border transition duration-300 ease-in-out mb-3 ${
                        tab !== 2
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(1);
                      }}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1 text-gray-400">
                          Contributing to open-source security tools
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <svg
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                        </svg>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5  hover:scale-110 rounded border transition duration-300 ease-in-out mb-3 ${
                        tab !== 2
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(1);
                      }}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1 text-gray-400">
                          Collaborating in international cyber-security research
                          projects
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <svg
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                        </svg>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5 hover:scale-110 rounded border transition duration-300 ease-in-out mb-3 ${
                        tab !== 2
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(1);
                      }}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1 text-gray-400">
                          Penetration testing, bug-bounty hunting & submitting
                          CVEs
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <svg
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                        </svg>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5 rounded hover:scale-110 border transition duration-300 ease-in-out mb-3 ${
                        tab !== 2
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(1);
                      }}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1 text-gray-400">
                          Providing Cyber Security Consultancy Services
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <svg
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                    data-aos="zoom-y-out"
                    ref={tabs}
                  ></div>
                </div>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Banner />
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Features;
