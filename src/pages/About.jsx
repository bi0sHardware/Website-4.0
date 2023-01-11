import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";
import Header2 from "../partials/Header2";
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
    <div className="flex flex-col min-h-screen overflow-hidden font-mono selection:bg-lime-500 selection:text-[#111827]">
      {/*  Site header */}
      <Header2 />
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
              <div className="max-w-3xl text-left  pb-10 md:pb-16 mt-28 ">
                <h1 className="h2 mb-4">About bi0s Hardware</h1>
                <p className="text-lg text-white">
                  Team bi0s is a cyber-security enthusiast club and research
                  group from Amrita Vishwa Vidyapeetham (University), India. The
                  team was formally launched as a CTF team in 2007 under the
                  mentorship of Vipin Pavithran, a faculty at Amrita's Centre
                  for Cyber Security. It was among the first CTF team from
                  India, and ever-since has been spearheading CTFs in the
                  country - from starting InCTF, India's First CTF and
                  consistently ranking No.1 in CTFTime since it was established.
                  Over the years, the team has evolved into a cyber-security
                  research group, with specialized teams in 10+ cyber-security
                  focus areas.
                </p>
              </div>
              {/* Section content */} {/* Content */}
              {/* Tabs items */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto "
                data-aos="zoom-y-out"
                ref={tabs}
              >
                <div className="relative flex flex-col text-right lg:text-right"></div>
              </div>
            </div>
            <div className="max-w-3xl sm:w-full pb-10 md:pb-16 mt-28  transition ease-in-out delay-150 hover:scale-110   duration-300">
              <div
                data-aos="fade-right"
                className=" text-center text-lg p-6 rounded  transition duration-300 ease-in-out mb-3 hover:shadow-md  hover:bg-gray-300 hover:text-[#111827] border-2 border-double border-white 
              "
              >
                <h1 className="h2 mb-4 text-center mt-4 ">How we function?</h1>
                <p className="text-lg  text-center mb-4">
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
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 md:mt-6"
                    data-aos="fade-right"
                  >
                    <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 text-gray-400 "></div>
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out hover:scale-110 mb-5 ${
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
                        <div className="font-bold leading-snug tracking-tight mb-1 text-[#111827]">
                          Learning & Researching on various Cyber Security
                          fields
                        </div>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out hover:scale-110 mb-5 ${
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
                        <div className="font-bold leading-snug tracking-tight mb-1 text-[#111827]">
                          Participating & organizing CTFs across the world
                        </div>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out hover:scale-110 mb-5 ${
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
                        <div className="font-bold leading-snug tracking-tight mb-1 text-[#111827]">
                          Organizing workshops & training programmes
                        </div>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5 hover:scale-110 rounded border transition duration-300 ease-in-out mb-5 ${
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
                        <div className="font-bold leading-snug tracking-tight mb-1 text-[#111827]">
                          Contributing to open-source security tools
                        </div>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5  hover:scale-110 rounded border transition duration-300 ease-in-out mb-5 ${
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
                        <div className="font-bold leading-snug tracking-tight mb-1 text-[#111827]">
                          Collaborating in international cyber-security research
                          projects
                        </div>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5 hover:scale-110 rounded border transition duration-300 ease-in-out mb-5 ${
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
                        <div className="font-bold leading-snug tracking-tight mb-1 text-[#111827]">
                          Penetration testing, bug-bounty hunting & submitting
                          CVEs
                        </div>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5 rounded hover:scale-110 border transition duration-300 ease-in-out mb-5 ${
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
                        <div className="font-bold leading-snug tracking-tight mb-1 text-[#111827]">
                          Providing Cyber Security Consultancy Services
                        </div>
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
