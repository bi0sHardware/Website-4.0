import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";

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
                Team bi0s is a cyber-security enthusiast club and research group
                from Amrita Vishwa Vidyapeetham (University), India. The team
                was formally launched as a CTF team in 2007 under the mentorship
                of Vipin Pavithran, a faculty at Amrita's Centre for Cyber
                Security. It was among the first CTF team from India, and
                ever-since has been spearheading CTFs in the country - from
                starting InCTF, India's First CTF and consistently ranking No.1
                in CTFTime since it was established. Over the years, the team
                has evolved into a cyber-security research group, with
                specialized teams in 10+ cyber-security focus areas.
              </p>
            </div>
            <div className=" mb-32">
              <a
                className="btn text-white  border-white w-full mb-4  sm:w-auto sm:mb-0 rounded-tl-xl rounded-br-xl"
                href="/about"
              >
                More
              </a>
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
      </div>
    </section>
  );
}

export default Features;
