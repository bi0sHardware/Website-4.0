import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";
import Design from "../partials/Design";

function Features() {
  return (
    <section className="relative bg-[#111827] text-white font-mono selection:bg-lime-500 selection:text-[#111827] ">
      <div className="w-full  h-screen absolute top-0 left-0">
        <Design />
      </div>
      <div
        className="absolute inset-0 bg-[#111827] pointer-events-none mb-16"
        aria-hidden="true"
        id="about"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-[#111827] transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 flex flex-row sm:flex-col text-left">
          {/* Section header */}
          <div className=" flex flex-col">
            <div className="max-w-3xl text-left pb-10 md:pb-8 mt-24 ">
              <h1 className="h2 mb-4">About bi0s Hardware</h1>
              <div className="absolute inset-x-0 top-[-10rem] z-40  transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg
                  className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                >
                  <path
                    fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="absolute  inset-0 h-full z-40  overflow-hidden">
                <svg
                  class="absolute  opacity-20 top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                      width="200"
                      height="200"
                      x="50%"
                      y="-1"
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg x="100%" y="-1">
                    <path
                      d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                      stroke-width="0"
                    />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    stroke-width="0"
                    fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                  />
                </svg>
              </div>
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
            <div className=" mb-3">
              <a
                className="btn text-white  border-white w-full mb-4  sm:w-auto sm:mb-0 rounded-tl-xl rounded-br-xl hover:bg-white hover:scale-110 hover:text-[#111827]"
                href="/about"
              >
                More
              </a>
            </div>
          </div>
          {/* Section content */}{" "}
        </div>
      </div>
    </section>
  );
}

export default Features;
