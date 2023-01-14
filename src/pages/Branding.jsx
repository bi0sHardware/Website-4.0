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
            id="branding"
          ></div>
          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-[#111827] transform -translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 md:pt-20  text-left">
              {/* Section header */}
              <div className="max-w-3xl text-left  pb-10 md:pb-16 mt-28 ">
                <h1 className="h2 mb-4">Branding</h1>
                <p className="text-lg text-white">
                  Official collection of team bi0s-hardware brand assets.
                </p>
              </div>
              <div className="  max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {/* 1st item */}
                <div
                  className="relative flex flex-col items-center p-5 bg-black rounded shadow-xl border-black rounded-tl-lg rounded-br-lg border-2 "
                  data-aos="fade-down"
                >
                  <img
                    src="src/images/whitelogo.jpeg"
                    className="h-64 rounded"
                  />
                  <h4 className="text-gray-300 text-center text-xl  font-bold leading-snug tracking-tight mb-1">
                    Light Logo
                  </h4>
                </div>

                {/* 2nd item */}
                <div
                  className="relative flex flex-col items-center p-5 bg-white rounded shadow-xl border-black  rounded-tl-lg rounded-br-lg border-2"
                  data-aos="fade-down"
                >
                  <img
                    src="src/images/blacklogo.png"
                    className="h-64 rounded"
                  />

                  <h4 className="text-gray-600 text-center text-xl  font-bold leading-snug tracking-tight mb-1">
                    Dark Logo
                  </h4>
                </div>
                <div
                  className="relative flex flex-col justify-center items-center p-5 bg-white rounded shadow-xl border-black  rounded-tl-lg rounded-br-lg border-2"
                  data-aos="fade-down"
                >
                  <img
                    src="src/images/favicon.jpeg"
                    className="h-64 w-52 rounded"
                  />

                  <h4 className="text-gray-600 text-center text-xl  font-bold leading-snug tracking-tight mb-1">
                    Favicon
                  </h4>
                </div>
                <div
                  className="relative flex flex-col justify-center items-center p-5 bg-white rounded shadow-xl border-black  rounded-tl-lg rounded-br-lg border-2"
                  data-aos="fade-down"
                >
                  <img
                    src="src/images/biosblackoutline.jpeg"
                    className="h-64 rounded"
                  />

                  <h4 className="text-gray-600 text-center text-xl text-no-wrap  font-bold leading-snug tracking-tight mb-1">
                    Light logo with Black Outline
                  </h4>
                </div>
                <div
                  className="relative flex flex-col items-center p-5 bg-black rounded shadow-xl border-black rounded-tl-lg rounded-br-lg border-2 "
                  data-aos="fade-down"
                >
                  <img
                    src="src/images/bioswhite.jpeg"
                    className="h-64 rounded"
                  />
                  <h4 className="text-gray-300 text-center text-xl  font-bold leading-snug tracking-tight mb-1">
                    Black Logo White Outline
                  </h4>
                </div>
              </div>
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
