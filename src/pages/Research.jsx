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
    <div className="flex flex-col min-h-screen overflow-hidden">
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
          <div className="absolute left-0 right-0 m-autoz w-px p-px h-20 bg-[#111827] transform -translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 md:pt-20 flex flex-row  text-left">
              {/* Section header */}
              <div className=" flex flex-col mr-8">
                <div className="max-w-3xl text-left pb-10 md:pb-16 mt-28 ">
                  <h1 className="h2 mb-4">Our Fields of Research</h1>
                </div>
                <div class=" w-full lg:max-w-full lg:flex flex-col gap-8  ">
                  <div
                    class="border-r border-b border-l rounded-lg border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                    data-aos="fade-down"
                  >
                    <div class="mb-8">
                      <p class="text-lg font-semibold mb-2 text-gray-600 flex items-center">
                        Embedded Systems
                      </p>

                      <p class="text-gray-700 text-base">
                        Embedded systems include a variety of hardware and
                        software components, which perform specific functions in
                        host systems, for example, satellites, washing machines,
                        robots, hand-held telephones and automobiles.
                      </p>
                    </div>
                  </div>
                  {/* item 2 */}
                  <div
                    class="border-r border-b border-l rounded-lg border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                    data-aos="fade-down"
                  >
                    <div class="mb-8">
                      <p class="text-lg font-semibold mb-2 text-gray-600 flex items-center">
                        Firmware Analysis
                      </p>

                      <p class="text-gray-700 text-base">
                        Firmware is the code that runs on an embedded device.In
                        embedded systems, manufacturers usually go for
                        functionality over security to decrease manufacturing
                        cost.We analyze the firmware, to find various security
                        vulnerabilities present.
                      </p>
                    </div>
                  </div>
                  {/* item 3 */}
                  <div
                    class="border-r border-b border-l rounded-lg border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                    data-aos="fade-down"
                  >
                    <div class="mb-8">
                      <p class="text-lg font-semibold mb-2 text-gray-600 flex items-center">
                        Wireless Security
                      </p>

                      <p class="text-gray-700 text-base">
                        As everything is getting mobile and wireless, the
                        urgency for effective wireless threat protection is on
                        everyone's watch, as wireless networks are developed
                        rapidly making them vulnerable in a myriad of ways.
                      </p>
                    </div>
                  </div>
                  {/* item 4*/}
                  <div
                    class="border-r border-b border-l rounded-lg border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                    data-aos="fade-down"
                  >
                    <div class="mb-8">
                      <p class="text-lg font-semibold mb-2 text-gray-600 flex items-center">
                        Automotive Security
                      </p>

                      <p class="text-gray-700 text-base">
                        With consumers expecting new complex features for their
                        ride, it's getting difficult for engineers to make
                        systems that go hand in hand with security and required
                        technicalities. We look into the extremely complex
                        systems of vehicle security and make sure that it keeps
                        up with the new features.
                      </p>
                    </div>
                  </div>
                  {/* item 5*/}
                  <div
                    class="border-r border-b border-l rounded-lg border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                    data-aos="fade-down"
                  >
                    <div class="mb-8">
                      <p class="text-lg font-semibold mb-2 text-gray-600 flex items-center">
                        O T Security
                      </p>

                      <p class="text-gray-700 text-base">
                        SCADA and Industrial Control Systems systems have been
                        relatively excluded from security testing by the
                        security industry. This has made them vulnerable and
                        leading to some successful intrusions that have resulted
                        in malicious attackers obtaining administrative access
                        to core systems.
                      </p>
                    </div>
                  </div>
                  {/* item 6*/}
                  <div
                    class="border-r border-b border-l rounded-lg mb-16 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                    data-aos="fade-down"
                  >
                    <div class="mb-8">
                      <p class="text-lg font-semibold mb-2 text-gray-600 flex items-center">
                        Micro-Architectural Attacks
                      </p>

                      <p class="text-gray-700 text-base">
                        A side-channel attack is a security exploit that aims to
                        gather information from or influence the program
                        execution of a system by measuring or exploiting
                        indirect effects of the system or its hardware -- rather
                        than targeting the program or its code directly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Section content */}{" "}
              <div className="md:grid md:grid-cols-8 md:gap-6  mt-24 ">
                {/* Content */}
                <div
                  className="mr-72 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                  data-aos="fade-right "
                >
                  <div className="mb-8 md:mb-0 ">
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
      </main>

      <Banner />

      <Footer />
    </div>
  );
}

export default Features;
