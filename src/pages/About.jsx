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
import Design from "../partials/Design";

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
          <div className="w-full h-screen absolute top-0 left-0">
            <Design />
          </div>
          <div className="relative left-0 right-0 m-auto w-px p-px h-20 flex justify-center bg-[#111827] transform -translate-y-1/2 "></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
            <div className="pt-8 md:pt-8 flex flex-col  text-left">
              {/* Section header */}
              <div className="max-w-screen text-left  pb-10 md:pb-16 mt-10 ">
                <h1 className="max-w-screen h2 mb-4">About bi0s Hardware</h1>
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
              <div className="max-w-screen text-left  pb-10 md:pb-16  ">
                <h1 className="max-w-screen h2 mb-4">How we function ?</h1>
                <p className="text-lg text-white">
                  The team functions as a family, and uses a mentor mentee model
                  wherein senior students train and pass on experience & skills
                  they gained to their junior mentees. This happens through out
                  their years at the community, and is facilitated through
                  various activities the club organizes & events and contests it
                  participates as a team.
                </p>
              </div>
              {/* Section content */} {/* Content */}
              {/* Tabs items */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto "
                data-aos="zoom-y-out"
                ref={tabs}
              >
                <div className="relative flex flex-col  justify-center lg:text-right"></div>
              </div>
            </div>
            {/* <div className="max-w-3xl sm:w-full pb-10 md:pb-16 mt-28   transition ease-in-out delay-150  duration-300">
              <div
                data-aos="fade-right"
                className=" text-center text-lg p-6 rounded  transition duration-300 ease-in-out mb-3 hover:shadow-md    border-2 border-double border-white 
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
            </div> */}
            <div className="max-w-3xl text-left    ">
              <h1 className="h2 mb-4">What do we do?</h1>
              <p className="text-lg text-white">
                Here are some of the things our members do:
                <div className="md:grid md:grid-cols-4 md:gap-6 text-white ml-16">
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 md:mt-6"
                    data-aos="fade-right"
                  >
                    {/* <a
                      className={`flex items-center text-lg p-5 rounded  transition duration-300 ease-in-out hover:scale-110 mb-5 ${
                        tab !== 2
                          ? " shadow-md  hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(1);
                      }}
                    > */}
                    <div>
                      <ul>
                        <li className="flex flex-row">
                          <div>
                            {" "}
                            <p>--{">"} </p>
                          </div>

                          <div className=" ml-3  leading-snug tracking-tight mb-1 text-white">
                            Learning & Researching on various Cyber Security
                            fields
                          </div>
                        </li>
                        <li className="flex flex-row">
                          <div>
                            {" "}
                            <p>--{">"} </p>
                          </div>
                          <div className=" ml-3  leading-snug tracking-tight mb-1 text-white">
                            Participating & organizing CTFs across the world
                          </div>
                        </li>
                        <li className="flex flex-row">
                          <div>
                            {" "}
                            <p>--{">"} </p>
                          </div>
                          <div className=" ml-3  leading-snug tracking-tight mb-1 text-white">
                            Organizing workshops & training programmes
                          </div>
                        </li>
                        <li className="flex flex-row">
                          <div>
                            {" "}
                            <p>--{">"} </p>
                          </div>
                          <div className=" ml-3  leading-snug tracking-tight mb-1 text-white">
                            Contributing to open-source security tools
                          </div>
                        </li>
                        <li className="flex flex-row">
                          <div>
                            {" "}
                            <p>--{">"} </p>
                          </div>
                          <div className=" ml-3  leading-snug tracking-tight mb-1 text-white">
                            Collaborating in international cyber-security
                            research projects
                          </div>
                        </li>
                        <li className="flex flex-row">
                          <div>
                            {" "}
                            <p>--{">"} </p>
                          </div>
                          <div className=" ml-3  leading-snug tracking-tight mb-1 text-white">
                            Penetration testing, bug-bounty hunting & submitting
                            CVEs
                          </div>
                        </li>
                        <li className="flex flex-row">
                          <div>
                            {" "}
                            <p>--{">"} </p>
                          </div>
                          <div className=" ml-3  leading-snug tracking-tight mb-1 text-white">
                            Providing Cyber Security Consultancy Services
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* </a> */}
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
