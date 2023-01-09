import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";

function Features() {
  return (
    <section className="relative bg-[#111827] text-white font-mono selection:bg-lime-500 selection:text-[#111827] ">
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
