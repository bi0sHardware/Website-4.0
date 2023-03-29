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

function Join() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden font-mono">
      {/*  Site header */}
      <Header2 />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="relative bg-[#111827] text-white  ">
          {/* Section background (needs .relative class on parent and next sibling elements) */}
          <div
            className="absolute inset-0 bg-[#111827] pointer-events-none "
            aria-hidden="true"
            id="about"
          ></div>
          <div className="w-full h-screen absolute top-0 left-0">
            <Design />
          </div>
          <div className="absolute left-0 right-0 m-autoz w-px p-px h-20 bg-[#111827] transform -translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto   lg:py-16 px-8 sm:px-6">
            <div className="pt-12 md:pt-20 text-center">
              {/* Section header */}
              <div className="text-3xl py-3">Join Us</div>
              <div class="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
                <div class="shadow p-10 mb-7 rounded-lg border-t-4 border-green-400 bg-white backdrop-blur-md bg-opacity-10">
                  <p class="mt-4 text-3xl text-white font-medium">Amritapuri</p>

                  <div class="mt-8 text-white ">
                    <ul class="grid grid-cols-1 gap-4">
                      <li class="inline-flex items-center ">
                        <svg
                          class="w-4 h-4 mr-2 fill-current text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                        </svg>
                        20 days only
                      </li>

                      <li class="inline-flex items-center text-white ">
                        <svg
                          class="w-4 h-4 mr-2 fill-current text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                        </svg>
                        Weekly email newsletter
                      </li>

                      <li class="inline-flex items-center text-white ">
                        <svg
                          class="w-4 h-4 mr-2 fill-current text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                        </svg>
                        Quota renewed monthly
                      </li>
                    </ul>
                  </div>

                  <div class="mt-8">
                    <button class="bg-emerald-600 hover:bg-emerald-300 px-3 py-2 rounded-lg w-full text-white hover:text-slate-900">
                      More details
                    </button>
                  </div>
                </div>

                <div class="shadow p-10 mb-7 rounded-lg border-t-4 border-green-400 bg-white backdrop-blur-md bg-opacity-10">
                  <p class="mt-4 text-3xl text-white font-medium">Bengaluru</p>

                  <div class="mt-8 text-white ">
                    <ul class="grid grid-cols-1 gap-4">
                      <li class="inline-flex items-center ">
                        <svg
                          class="w-4 h-4 mr-2 fill-current text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                        </svg>
                        20 days only
                      </li>

                      <li class="inline-flex items-center text-white ">
                        <svg
                          class="w-4 h-4 mr-2 fill-current text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                        </svg>
                        Weekly email newsletter
                      </li>

                      <li class="inline-flex items-center text-white ">
                        <svg
                          class="w-4 h-4 mr-2 fill-current text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                        </svg>
                        Quota renewed monthly
                      </li>
                    </ul>
                  </div>

                  <div class="mt-8">
                    <button class="bg-emerald-600 hover:bg-emerald-300 px-3 py-2 rounded-lg w-full text-white hover:text-slate-900">
                      More details
                    </button>
                  </div>
                </div>
              </div>
              <script src="https://cdn.tailwindcss.com"></script>
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css"
              />
              <script
                defer
                src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
              ></script>
            </div>
          </div>
        </section>
      </main>

      <Banner />

      <Footer />
    </div>
  );
}

export default Join;
