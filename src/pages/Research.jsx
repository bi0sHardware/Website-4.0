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
    <div className="flex flex-col min-h-screen overflow-hidden font-mono">
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
                  <h1 className="h2 mb-4 ">Our Fields of Research</h1>
                </div>
                <div class=" w-full lg:max-w-full lg:flex flex-col gap-8  ">
                  <div class=" w-full lg:max-w-full lg:flex">
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
                          software components, which perform specific functions
                          in host systems, for example, satellites, washing
                          machines, robots, hand-held telephones and
                          automobiles.
                        </p>
                        <div className="mt-6 flex justify-end mr-4 ">
                          {" "}
                          <a href="https://wiki.bi0s.in/hardware/basic-electronics/electronics/">
                            <button class="bg-transparent hover:bg-emerald-500 text-emerald-500 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded">
                              More
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      class="h-48 lg:h-auto lg:w-48 flex-none bg-[#1e293b] rounded-lg  text-center overflow-hidden"
                      title="Mountain"
                    >
                      <svg
                        enable-background="new 0 0 32 32"
                        className="h-48 p-5"
                        style={{ stroke: "#fff", strokeWidth: "0.2" }}
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="hardware_x2C__processor_x2C__microprocessor">
                          <g>
                            <g>
                              <g>
                                <path
                                  d="M25,27H8c-0.133,0-0.26-0.053-0.354-0.146l-1.5-1.5C6.053,25.26,6,25.133,6,25V9.5      C6,9.223,6.224,9,6.5,9S7,9.223,7,9.5v15.293L8.207,26h16.586L26,24.793V8.207L24.793,7H8.207L7.291,7.915      c-0.195,0.195-0.512,0.195-0.707,0c-0.195-0.194-0.195-0.511,0-0.706l1.063-1.063C7.74,6.053,7.867,6,8,6h17      c0.133,0,0.26,0.053,0.354,0.146l1.5,1.5C26.947,7.74,27,7.867,27,8v17c0,0.133-0.053,0.26-0.146,0.354l-1.5,1.5      C25.26,26.947,25.133,27,25,27z"
                                  fill="#263238"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M4.5,24h-2C2.224,24,2,24.224,2,24.5S2.224,25,2.5,25h2C4.776,25,5,24.776,5,24.5S4.776,24,4.5,24z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M4.5,22h-2C2.224,22,2,22.224,2,22.5S2.224,23,2.5,23h2C4.776,23,5,22.776,5,22.5S4.776,22,4.5,22z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M4.5,20h-2C2.224,20,2,20.224,2,20.5S2.224,21,2.5,21h2C4.776,21,5,20.776,5,20.5S4.776,20,4.5,20z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M4.5,18h-2C2.224,18,2,18.224,2,18.5S2.224,19,2.5,19h2C4.776,19,5,18.776,5,18.5S4.776,18,4.5,18z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M4.5,16h-2C2.224,16,2,16.224,2,16.5S2.224,17,2.5,17h2C4.776,17,5,16.776,5,16.5S4.776,16,4.5,16z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M4.5,14h-2C2.224,14,2,14.224,2,14.5S2.224,15,2.5,15h2C4.776,15,5,14.776,5,14.5S4.776,14,4.5,14z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M4.5,12h-2C2.224,12,2,12.224,2,12.5S2.224,13,2.5,13h2C4.776,13,5,12.776,5,12.5S4.776,12,4.5,12z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M4.5,10h-2C2.224,10,2,10.224,2,10.5S2.224,11,2.5,11h2C4.776,11,5,10.776,5,10.5S4.776,10,4.5,10z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M4.5,8h-2C2.224,8,2,8.224,2,8.5S2.224,9,2.5,9h2C4.776,9,5,8.776,5,8.5S4.776,8,4.5,8z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M30.5,24h-2c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5      S30.776,24,30.5,24z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M30.5,22h-2c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5      S30.776,22,30.5,22z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M30.5,20h-2c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5      S30.776,20,30.5,20z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M30.5,18h-2c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5      S30.776,18,30.5,18z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M30.5,16h-2c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5      S30.776,16,30.5,16z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M30.5,14h-2c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5      S30.776,14,30.5,14z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M30.5,12h-2c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5      S30.776,12,30.5,12z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M30.5,10h-2c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5      S30.776,10,30.5,10z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M28.5,9h2C30.776,9,31,8.776,31,8.5S30.776,8,30.5,8h-2C28.224,8,28,8.224,28,8.5S28.224,9,28.5,9z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M24.5,28c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-2      C25,28.224,24.776,28,24.5,28z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M22.5,28c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-2      C23,28.224,22.776,28,22.5,28z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M20.5,28c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-2      C21,28.224,20.776,28,20.5,28z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M18.5,28c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-2      C19,28.224,18.776,28,18.5,28z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M16.5,28c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-2      C17,28.224,16.776,28,16.5,28z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M14.5,28c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-2      C15,28.224,14.776,28,14.5,28z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M12.5,28c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-2      C13,28.224,12.776,28,12.5,28z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M10.5,28c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-2      C11,28.224,10.776,28,10.5,28z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M8.5,28C8.224,28,8,28.224,8,28.5v2C8,30.776,8.224,31,8.5,31S9,30.776,9,30.5v-2      C9,28.224,8.776,28,8.5,28z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M24.5,2C24.224,2,24,2.224,24,2.5v2C24,4.776,24.224,5,24.5,5S25,4.776,25,4.5v-2      C25,2.224,24.776,2,24.5,2z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M22.5,2C22.224,2,22,2.224,22,2.5v2C22,4.776,22.224,5,22.5,5S23,4.776,23,4.5v-2      C23,2.224,22.776,2,22.5,2z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M20.5,2C20.224,2,20,2.224,20,2.5v2C20,4.776,20.224,5,20.5,5S21,4.776,21,4.5v-2      C21,2.224,20.776,2,20.5,2z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M18.5,2C18.224,2,18,2.224,18,2.5v2C18,4.776,18.224,5,18.5,5S19,4.776,19,4.5v-2      C19,2.224,18.776,2,18.5,2z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M16.5,2C16.224,2,16,2.224,16,2.5v2C16,4.776,16.224,5,16.5,5S17,4.776,17,4.5v-2      C17,2.224,16.776,2,16.5,2z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M14.5,2C14.224,2,14,2.224,14,2.5v2C14,4.776,14.224,5,14.5,5S15,4.776,15,4.5v-2      C15,2.224,14.776,2,14.5,2z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M12.5,2C12.224,2,12,2.224,12,2.5v2C12,4.776,12.224,5,12.5,5S13,4.776,13,4.5v-2      C13,2.224,12.776,2,12.5,2z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M10.5,2C10.224,2,10,2.224,10,2.5v2C10,4.776,10.224,5,10.5,5S11,4.776,11,4.5v-2      C11,2.224,10.776,2,10.5,2z"
                                  fill="#263238"
                                />
                              </g>
                              <g>
                                <path
                                  d="M8.5,2C8.224,2,8,2.224,8,2.5v2C8,4.776,8.224,5,8.5,5S9,4.776,9,4.5v-2C9,2.224,8.776,2,8.5,2z"
                                  fill="#263238"
                                />
                              </g>
                            </g>
                          </g>
                          <g>
                            <g>
                              <g>
                                <circle
                                  cx="20.5"
                                  cy="20.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="18.5"
                                  cy="20.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="16.5"
                                  cy="20.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="14.5"
                                  cy="20.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="12.5"
                                  cy="20.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <circle
                                  cx="20.5"
                                  cy="18.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="18.5"
                                  cy="18.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="16.5"
                                  cy="18.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="14.5"
                                  cy="18.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="12.5"
                                  cy="18.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <circle
                                  cx="20.5"
                                  cy="16.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="18.5"
                                  cy="16.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="16.5"
                                  cy="16.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="14.5"
                                  cy="16.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="12.5"
                                  cy="16.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <circle
                                  cx="20.5"
                                  cy="14.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="18.5"
                                  cy="14.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="16.5"
                                  cy="14.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="14.5"
                                  cy="14.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="12.5"
                                  cy="14.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <circle
                                  cx="20.5"
                                  cy="12.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="18.5"
                                  cy="12.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="16.5"
                                  cy="12.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="14.5"
                                  cy="12.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                              <g>
                                <circle
                                  cx="12.5"
                                  cy="12.5"
                                  fill="#263238"
                                  r="0.5"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* item 2 */}
                  <div class=" w-full lg:max-w-full lg:flex">
                    <div
                      class="h-48 lg:h-auto lg:w-48 flex-none bg-[#1e293b] rounded-lg text-center overflow-hidden"
                      title="Mountain"
                    >
                      <svg
                        data-name="Layer 1"
                        id="Layer_1"
                        className="h-48 p-6"
                        viewBox="0 0 50 50"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ stroke: "#fff", strokeWidth: "0.5" }}
                      >
                        <title />
                        <path d="M46,27.2H38.34L44.82,7.75a1,1,0,0,0-1.9-.63L36.24,27.2H13.76L7.08,7.12a1,1,0,0,0-1.9.63L11.66,27.2H4a3,3,0,0,0-3,3V40.56a3,3,0,0,0,3,3H46a3,3,0,0,0,3-3V30.2A3,3,0,0,0,46,27.2Zm1,13.36a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V30.2a1,1,0,0,1,1-1H46a1,1,0,0,1,1,1Z" />
                        <path d="M32.29,16.78A1,1,0,0,0,33,15.07a11.33,11.33,0,0,0-16,0,1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0,9.34,9.34,0,0,1,13.18,0A1,1,0,0,0,32.29,16.78Z" />
                        <path d="M14.19,13.27A1,1,0,0,0,14.9,13a14.3,14.3,0,0,1,20.2,0,1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.42,16.29,16.29,0,0,0-23,0,1,1,0,0,0,.7,1.71Z" />
                        <path d="M21,19.08a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0,3.73,3.73,0,0,1,5.16,0,1,1,0,0,0,.7.29A1,1,0,0,0,29,20.5a1,1,0,0,0,0-1.42,5.65,5.65,0,0,0-8,0Z" />
                        <path d="M14.07,35H12.13a1,1,0,0,0,0,2h1.94a1,1,0,0,0,0-2Z" />
                        <path d="M22,35H20.07a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z" />
                        <path d="M29.93,35H28a1,1,0,0,0,0,2h1.93a1,1,0,0,0,0-2Z" />
                        <path d="M37.86,35H35.93a1,1,0,0,0,0,2h1.93a1,1,0,0,0,0-2Z" />
                      </svg>
                    </div>

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
                        <div className="mt-6 ">
                          {" "}
                          <a href="https://wiki.bi0s.in/hardware/wireless/introduction/">
                            <button class="bg-transparent hover:bg-emerald-500 text-emerald-500 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded">
                              More
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 3 */}
                  <div class=" w-full lg:max-w-full lg:flex">
                    <div
                      class="border-r border-b border-l rounded-lg border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                      data-aos="fade-down"
                    >
                      <div class="mb-8">
                        <p class="text-lg font-semibold mb-2 text-gray-600 flex items-center">
                          Automotive Security
                        </p>

                        <p class="text-gray-700 text-base">
                          With consumers expecting new complex features for
                          their ride, it's getting difficult for engineers to
                          make systems that go hand in hand with security and
                          required technicalities. We look into the extremely
                          complex systems of vehicle security and make sure that
                          it keeps up with the new features.
                        </p>
                        <div className="mt-6 flex justify-end mr-4 ">
                          {" "}
                          <a href="https://wiki.bi0s.in/hardware/automotive/introduction/">
                            <button class="bg-transparent hover:bg-emerald-500 text-emerald-500 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded">
                              More
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      class="h-48 lg:h-auto lg:w-48 flex-none bg-[#1e293b] rounded-lg text-center overflow-hidden"
                      title="Mountain"
                      data-aos="fade-down"
                    >
                      <svg
                        id="Layer_1_1_"
                        version="1.1"
                        className="p-5"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ stroke: "#fff", strokeWidth: "0.5" }}
                      >
                        <g>
                          <path d="M52,53c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S53.654,53,52,53z M52,57c-0.552,0-1-0.448-1-1s0.448-1,1-1   s1,0.448,1,1S52.552,57,52,57z" />
                          <path d="M14,53c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S15.654,53,14,53z M14,57c-0.552,0-1-0.448-1-1s0.448-1,1-1   s1,0.448,1,1S14.552,57,14,57z" />
                          <path d="M61,51V30c0-2.757-2.243-5-5-5H42.899c-0.465-2.279-2.484-4-4.899-4v-1.586l1.226-1.226C40.494,19.354,42.124,20,43.857,20   c1.832,0,3.554-0.713,4.85-2.009l0.707-0.707l-4.142-4.142l2.443-2.443C48.106,10.886,48.538,11,49,11c1.654,0,3-1.346,3-3   s-1.346-3-3-3s-3,1.346-3,3c0,0.462,0.114,0.894,0.301,1.285l-2.443,2.443l-4.142-4.142l-0.707,0.707   C37.713,9.588,37,11.31,37,13.142c0,1.248,0.338,2.44,0.958,3.486L36,18.586V21c-2.414,0-4.434,1.721-4.899,4H19.195   c-1.718,0-3.295,0.866-4.218,2.315l-5.631,8.848L6.419,37.14C4.374,37.821,3,39.728,3,41.883V51c-1.103,0-2,0.897-2,2v4   c0,1.103,0.897,2,2,2h4.685c1.126,2.361,3.53,4,6.315,4s5.188-1.639,6.315-4h25.37c1.126,2.361,3.53,4,6.315,4s5.188-1.639,6.315-4   H61c1.103,0,2-0.897,2-2v-4C63,51.897,62.103,51,61,51z M49,7c0.552,0,1,0.449,1,1s-0.448,1-1,1s-1-0.449-1-1S48.448,7,49,7z    M39.788,10.486l6.726,6.726C45.73,17.725,44.815,18,43.857,18c-1.298,0-2.518-0.505-3.435-1.423C39.505,15.66,39,14.439,39,13.142   C39,12.185,39.275,11.269,39.788,10.486z M36,23h2c1.302,0,2.402,0.839,2.816,2h-7.631C33.598,23.839,34.698,23,36,23z    M5.923,39.724C6.59,40.288,7,41.107,7,42c0,1.302-0.839,2.402-2,2.816v-2.933C5,41.047,5.348,40.277,5.923,39.724z M5,46.899   C7.279,46.434,9,44.414,9,42c0-1.2-0.435-2.331-1.184-3.219l2.837-0.945l6.012-9.447c0.554-0.87,1.5-1.39,2.53-1.39H56   c1.654,0,3,1.346,3,3v21h-2V31c0-1.103-0.897-2-2-2H35v22h-2V29H19.555c-0.694,0-1.329,0.352-1.696,0.94L13,37.713V49.08   c-1.502,0.216-2.852,0.906-3.889,1.92H5V46.899z M47.111,51H37V31h18v18.685C54.089,49.251,53.074,49,52,49   C50.098,49,48.374,49.765,47.111,51z M18.889,51c-1.037-1.014-2.387-1.704-3.889-1.92V39h5h2h3v1c0,1.654,1.346,3,3,3h3v8H18.889z    M27,39h4v2h-3c-0.552,0-1-0.448-1-1V39z M31,37h-9v-1c0-1.654-1.346-3-3-3h-0.695l1.25-2H31V37z M17.055,35H19   c0.552,0,1,0.448,1,1v1h-4.195L17.055,35z M3,57v-4h4.685C7.251,53.911,7,54.926,7,56c0,0.34,0.033,0.672,0.08,1H3z M14,61   c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S16.757,61,14,61z M20.92,57c0.047-0.328,0.08-0.66,0.08-1   c0-1.074-0.251-2.089-0.685-3h25.37C45.251,53.911,45,54.926,45,56c0,0.34,0.033,0.672,0.08,1H20.92z M52,61c-2.757,0-5-2.243-5-5   s2.243-5,5-5s5,2.243,5,5S54.757,61,52,61z M61,57h-2.08c0.047-0.328,0.08-0.66,0.08-1c0-1.074-0.251-2.089-0.685-3H61V57z" />
                          <path d="M49,3c1.335,0,2.591,0.52,3.535,1.464S54,6.665,54,8s-0.521,2.591-1.465,3.536l1.414,1.414C55.271,11.627,56,9.87,56,8   s-0.729-3.627-2.051-4.95S50.87,1,49,1s-3.627,0.728-4.949,2.05l1.414,1.414C46.409,3.52,47.665,3,49,3z" />
                          <path d="M46,33c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S49.859,33,46,33z M46,45c-2.757,0-5-2.243-5-5s2.243-5,5-5   s5,2.243,5,5S48.757,45,46,45z" />
                          <rect height="2" width="2" x="27" y="45" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* item 4*/}
                  <div class=" w-full lg:max-w-full lg:flex ">
                    <div
                      class="h-48 lg:h-auto lg:w-48 flex-none bg-[#1e293b] rounded-lg text-center overflow-hidden"
                      title="Mountain"
                      data-aos="fade-down"
                    >
                      <svg
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          stroke: "#fff",
                          strokeWidth: "0.5",
                          fill: "#1e293b",
                        }}
                        className="h-48 p-6"
                      >
                        <title />
                        <g data-name="Layer 5" id="Layer_5">
                          <rect
                            class="cls-1"
                            height="4"
                            width="60"
                            x="2"
                            y="58"
                          />
                          <polyline
                            class="cls-1"
                            points="4 58 4 10 32 10 32 58"
                          />
                          <polygon
                            class="cls-1"
                            points="60 58 32 58 32 32 60 42 60 58"
                          />
                          <polyline
                            class="cls-1"
                            points="54 39.86 54 24 48 24 48 37.71"
                          />
                          <path
                            class="cls-1"
                            d="M57,2a5,5,0,0,0-5,5,4.94,4.94,0,0,0,.13,1.1A4,4,0,0,0,49,12a4,4,0,0,0,.73,2.29,3,3,0,1,0,4.06,1.63A4,4,0,0,0,57,12,5,5,0,0,0,57,2Z"
                          />
                          <line class="cls-1" x1="48" x2="54" y1="28" y2="28" />
                          <polyline
                            class="cls-1"
                            points="6 10 6 2 30 2 30 10"
                          />
                          <polyline
                            class="cls-1"
                            points="36 58 36 48 44 48 44 58"
                          />
                          <polyline
                            class="cls-1"
                            points="48 58 48 48 56 48 56 58"
                          />
                          <rect
                            class="cls-1"
                            height="4"
                            width="20"
                            x="8"
                            y="14"
                          />
                          <rect
                            class="cls-1"
                            height="4"
                            width="20"
                            x="8"
                            y="22"
                          />
                          <rect
                            class="cls-1"
                            height="4"
                            width="20"
                            x="8"
                            y="30"
                          />
                          <rect
                            class="cls-1"
                            height="4"
                            width="20"
                            x="8"
                            y="38"
                          />
                          <line class="cls-1" x1="4" x2="32" y1="46" y2="46" />
                          <line class="cls-1" x1="8" x2="8" y1="58" y2="46" />
                          <line class="cls-1" x1="12" x2="12" y1="58" y2="46" />
                          <line class="cls-1" x1="16" x2="16" y1="58" y2="46" />
                          <line class="cls-1" x1="20" x2="20" y1="58" y2="46" />
                          <line class="cls-1" x1="24" x2="24" y1="58" y2="46" />
                          <line class="cls-1" x1="28" x2="28" y1="58" y2="46" />
                          <line class="cls-1" x1="9" x2="11" y1="6" y2="6" />
                          <line class="cls-1" x1="13" x2="15" y1="6" y2="6" />
                          <line class="cls-1" x1="17" x2="19" y1="6" y2="6" />
                          <line class="cls-1" x1="21" x2="23" y1="6" y2="6" />
                          <line class="cls-1" x1="25" x2="27" y1="6" y2="6" />
                        </g>
                      </svg>
                    </div>
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
                          leading to some successful intrusions that have
                          resulted in malicious attackers obtaining
                          administrative access to core systems.
                        </p>
                        {/* <div className="mt-6 ">
                          {" "}
                          <a href="https://wiki.bi0s.in/hardware/firmware/introduction/">
                            <button class="bg-transparent hover:bg-emerald-500 text-emerald-500 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded">
                              Button
                            </button>
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  {/* item 5*/}
                  <div class=" w-full lg:max-w-full lg:flex">
                    <div
                      class="border-r border-b border-l rounded-lg border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                      data-aos="fade-down"
                    >
                      <div class="mb-8">
                        <p class="text-lg font-semibold mb-2 text-gray-600 flex items-center">
                          Micro-Architectural Attacks
                        </p>

                        <p class="text-gray-700 text-base">
                          A side-channel attack is a security exploit that aims
                          to gather information from or influence the program
                          execution of a system by measuring or exploiting
                          indirect effects of the system or its hardware --
                          rather than targeting the program or its code
                          directly.
                        </p>
                        <div className="mt-6 flex justify-end mr-4 ">
                          {" "}
                          <a href="https://wiki.bi0s.in/hardware/firmware/introduction/">
                            <button class="bg-transparent hover:bg-emerald-500 text-emerald-500 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded">
                              More
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      class="h-48 lg:h-auto lg:w-48 flex-none bg-[#1e293b] rounded-lg text-center overflow-hidden"
                      title="Mountain"
                      data-aos="fade-down"
                    >
                      <svg
                        enable-background="new 0 0 32 32"
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 32 32"
                        style={{
                          stroke: "#fff",
                          strokeWidth: "0.2",
                        }}
                        className="h-48 p-8"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Bug_x2C__quality_assurance_x2C__search_x2C__testing">
                          <g id="search_magnifier_magnifying_glass_loupe">
                            <g id="search_funds_x2C__magnifying_glass_x2C__magnifier_x2C__loupe_1_">
                              <g id="analysis_2_">
                                <g>
                                  <g>
                                    <g>
                                      <path
                                        d="M23.586,23.586c0.122-0.122,0.262-0.217,0.408-0.299l-2.276-2.277c-0.195-0.195-0.512-0.195-0.707,0         c-0.195,0.196-0.195,0.512,0,0.708l2.271,2.271C23.367,23.846,23.465,23.707,23.586,23.586z"
                                        fill="#263238"
                                      />
                                      <path
                                        d="M28.5,31c-0.668,0-1.295-0.26-1.768-0.732l-3.5-3.5C22.76,26.295,22.5,25.668,22.5,25         s0.26-1.295,0.732-1.768c0.906-0.906,2.629-0.906,3.535,0l3.5,3.5C30.74,27.205,31,27.832,31,28.5s-0.26,1.295-0.732,1.768         S29.168,31,28.5,31z M25,23.52c-0.407,0-0.793,0.152-1.061,0.42C23.656,24.223,23.5,24.6,23.5,25s0.156,0.777,0.439,1.061         l3.5,3.5c0.566,0.566,1.555,0.566,2.121,0C29.844,29.277,30,28.9,30,28.5s-0.156-0.777-0.439-1.061l-3.5-3.5         C25.793,23.672,25.407,23.52,25,23.52z"
                                        fill="#263238"
                                      />
                                    </g>
                                    <path
                                      d="M13.012,27.499c-3.214,0-6.396-1.063-8.982-3.105c-0.217-0.171-0.254-0.485-0.083-0.702        c0.172-0.216,0.485-0.253,0.702-0.083c3.759,2.967,8.865,3.712,13.327,1.945c0.257-0.103,0.547,0.023,0.649,0.28        c0.102,0.257-0.024,0.548-0.28,0.649C16.623,27.165,14.813,27.499,13.012,27.499z"
                                      fill="#263238"
                                    />
                                    <path
                                      d="M26.035,18.618c-0.061,0-0.123-0.011-0.183-0.034c-0.257-0.102-0.384-0.392-0.283-0.648        c1.734-4.421,1.003-9.487-1.91-13.223c-0.17-0.218-0.131-0.532,0.087-0.702c0.219-0.171,0.531-0.131,0.702,0.087        c3.128,4.013,3.915,9.455,2.053,14.203C26.423,18.498,26.234,18.618,26.035,18.618z"
                                      fill="#263238"
                                    />
                                    <path
                                      d="M13,25C6.383,25,1,19.617,1,13S6.383,1,13,1s12,5.383,12,12S19.617,25,13,25z M13,2        C6.935,2,2,6.935,2,13s4.935,11,11,11s11-4.935,11-11S19.065,2,13,2z"
                                      fill="#263238"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M20.5,16c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.827-0.673-1.5-1.5-1.5c-0.276,0-0.5-0.224-0.5-0.5     s0.224-0.5,0.5-0.5c1.379,0,2.5,1.121,2.5,2.5v2C21,15.776,20.776,16,20.5,16z"
                                fill="#263238"
                              />
                              <path
                                d="M5.5,16C5.224,16,5,15.776,5,15.5v-2C5,12.121,6.121,11,7.5,11C7.776,11,8,11.224,8,11.5S7.776,12,7.5,12     C6.673,12,6,12.673,6,13.5v2C6,15.776,5.776,16,5.5,16z"
                                fill="#263238"
                              />
                            </g>
                            <path
                              d="M14,6.5c-0.276,0-0.5-0.224-0.5-0.5c0-0.827,0.673-1.5,1.5-1.5c0.276,0,0.5,0.224,0.5,0.5    S15.276,5.5,15,5.5c-0.275,0-0.5,0.225-0.5,0.5C14.5,6.276,14.276,6.5,14,6.5z"
                              fill="#263238"
                            />
                            <path
                              d="M12,6.5c-0.276,0-0.5-0.224-0.5-0.5c0-0.275-0.225-0.5-0.5-0.5c-0.276,0-0.5-0.224-0.5-0.5    s0.224-0.5,0.5-0.5c0.827,0,1.5,0.673,1.5,1.5C12.5,6.276,12.276,6.5,12,6.5z"
                              fill="#263238"
                            />
                            <g>
                              <path
                                d="M17.5,5C17.224,5,17,5.224,17,5.5v1C17,7.327,16.327,8,15.5,8h-0.689c0.298,0.261,0.517,0.604,0.619,1     h0.07C16.879,9,18,7.879,18,6.5v-1C18,5.224,17.776,5,17.5,5z"
                                fill="#263238"
                              />
                              <path
                                d="M11.189,8H10.5C9.673,8,9,7.327,9,6.5v-1C9,5.224,8.776,5,8.5,5S8,5.224,8,5.5v1C8,7.879,9.121,9,10.5,9     h0.07C10.673,8.604,10.892,8.261,11.189,8z"
                                fill="#263238"
                              />
                            </g>
                            <path
                              d="M11,10.551V9.5C11,8.673,11.673,8,12.5,8h1C14.327,8,15,8.673,15,9.5v1.051    c0.36,0.061,0.695,0.188,1,0.365V9.5C16,8.121,14.879,7,13.5,7h-1C11.121,7,10,8.121,10,9.5v1.416    C10.305,10.738,10.64,10.611,11,10.551z"
                              fill="#263238"
                            />
                            <path
                              d="M13.5,21h-1C9.725,21,8,18.893,8,15.5v-2c0-1.93,1.57-3.5,3.5-3.5h3c1.93,0,3.5,1.57,3.5,3.5v2    C18,18.893,16.275,21,13.5,21z M11.5,11C10.121,11,9,12.121,9,13.5v2c0,1.056,0.252,4.5,3.5,4.5h1c3.248,0,3.5-3.444,3.5-4.5v-2    c0-1.379-1.121-2.5-2.5-2.5H11.5z"
                              fill="#263238"
                            />
                            <path
                              d="M13,20.5c-0.276,0-0.5-0.224-0.5-0.5v-7.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V20    C13.5,20.276,13.276,20.5,13,20.5z"
                              fill="#263238"
                            />
                            <g>
                              <circle
                                cx="10.5"
                                cy="15.5"
                                fill="#263238"
                                r="0.5"
                              />
                              <circle
                                cx="15.5"
                                cy="15.5"
                                fill="#263238"
                                r="0.5"
                              />
                              <circle
                                cx="10.5"
                                cy="13.5"
                                fill="#263238"
                                r="0.5"
                              />
                              <circle
                                cx="15.5"
                                cy="13.5"
                                fill="#263238"
                                r="0.5"
                              />
                            </g>
                          </g>
                          <path
                            d="M18.5,10h-1C17.224,10,17,9.776,17,9.5S17.224,9,17.5,9h1C19.327,9,20,8.327,20,7.5   C20,7.224,20.224,7,20.5,7S21,7.224,21,7.5C21,8.879,19.879,10,18.5,10z"
                            fill="#263238"
                          />
                          <path
                            d="M8.5,10h-1C6.121,10,5,8.879,5,7.5C5,7.224,5.224,7,5.5,7S6,7.224,6,7.5C6,8.327,6.673,9,7.5,9h1   C8.776,9,9,9.224,9,9.5S8.776,10,8.5,10z"
                            fill="#263238"
                          />
                          <circle cx="2.5" cy="22.5" fill="#263238" r="0.5" />
                          <circle cx="22.5" cy="2.5" fill="#263238" r="0.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* item 6*/}
                  <div class=" w-full lg:max-w-full lg:flex pb-8">
                    <div
                      class="h-48 lg:h-auto lg:w-48 flex-none bg-[#1e293b] rounded-lg text-center overflow-hidden"
                      title="Mountain"
                      data-aos="fade-down"
                    >
                      <svg
                        data-name="Layer 1"
                        id="Layer_1"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          stroke: "#fff",
                          strokeWidth: "3",
                        }}
                        className="h-48 p-6"
                      >
                        <title />
                        <path d="M474.18,66.62a41.72,41.72,0,0,0-83.07-5.69H305.83a51.74,51.74,0,1,0-57.29,53.61v75a51.54,51.54,0,0,0,0,102.52V397.46A51.57,51.57,0,0,0,203,443H117.36a41.81,41.81,0,1,0,0,11.38H203a51.7,51.7,0,1,0,57-57V292.09a51.54,51.54,0,0,0,0-102.52v-75a51.68,51.68,0,0,0,45.23-42.23h86a41.72,41.72,0,0,0,83.07-5.69ZM76.11,479.16a30.44,30.44,0,1,1,30.45-30.44A30.48,30.48,0,0,1,76.11,479.16Zm218.58-30.44a40.46,40.46,0,1,1-40.46-40.46A40.5,40.5,0,0,1,294.69,448.72Zm0-207.89a40.46,40.46,0,1,1-40.46-40.45A40.5,40.5,0,0,1,294.69,240.83ZM254.23,103.74a40.46,40.46,0,1,1,40.46-40.45A40.5,40.5,0,0,1,254.23,103.74ZM401.92,66.62a30.44,30.44,0,1,1,30.44,30.45A30.48,30.48,0,0,1,401.92,66.62Z" />
                        <path d="M225.47,448.72A28.77,28.77,0,1,0,254.23,420,28.79,28.79,0,0,0,225.47,448.72Zm46.15,0a17.39,17.39,0,1,1-17.39-17.39A17.41,17.41,0,0,1,271.62,448.72Z" />
                        <path d="M254.23,34.53A28.76,28.76,0,1,0,283,63.29,28.8,28.8,0,0,0,254.23,34.53Zm0,46.14a17.39,17.39,0,1,1,17.39-17.38A17.4,17.4,0,0,1,254.23,80.67Z" />
                        <path d="M441.07,250.6c-18.56,0-33.09,19.79-33.09,45.06s14.53,45.06,33.09,45.06c18.25,0,33.11-20.21,33.11-45.06S459.32,250.6,441.07,250.6Zm0,78.74c-11.78,0-21.72-15.42-21.72-33.68S429.29,262,441.07,262s21.73,15.43,21.73,33.69S452.85,329.34,441.07,329.34Z" />
                        <path d="M360.17,250.6c-18.56,0-33.1,19.79-33.1,45.06s14.54,45.06,33.1,45.06c18.25,0,33.11-20.21,33.11-45.06S378.42,250.6,360.17,250.6Zm0,78.74c-11.78,0-21.72-15.42-21.72-33.68S348.39,262,360.17,262s21.73,15.43,21.73,33.69S372,329.34,360.17,329.34Z" />
                        <path d="M381.69,370.54a5.68,5.68,0,0,0-5.68,5.69l.07,78.75a5.69,5.69,0,0,0,11.38,0l-.08-78.74A5.68,5.68,0,0,0,381.69,370.54Z" />
                        <path d="M338.66,370.54a5.69,5.69,0,0,0-5.69,5.69L333,455a5.69,5.69,0,0,0,11.38,0l-.07-78.74A5.68,5.68,0,0,0,338.66,370.54Z" />
                        <path d="M424.78,370.56a5.69,5.69,0,0,0-5.69,5.69V455a5.69,5.69,0,1,0,11.37,0V376.25A5.68,5.68,0,0,0,424.78,370.56Z" />
                        <path d="M462.33,370.56a5.69,5.69,0,0,0-5.69,5.69V455A5.69,5.69,0,1,0,468,455V376.25A5.69,5.69,0,0,0,462.33,370.56Z" />
                        <path d="M444.61,134.44c-18.25,0-33.11,20.21-33.11,45.06s14.86,45.07,33.11,45.07c18.56,0,33.1-19.8,33.1-45.07S463.17,134.44,444.61,134.44Zm0,78.75c-11.78,0-21.73-15.43-21.73-33.69s9.95-33.69,21.73-33.69,21.72,15.43,21.72,33.69S456.39,213.19,444.61,213.19Z" />
                        <path d="M342.87,224.57a5.69,5.69,0,0,0,5.68-5.7l-.06-78.75a5.69,5.69,0,1,0-11.37,0l.06,78.76A5.68,5.68,0,0,0,342.87,224.57Z" />
                        <path d="M386.21,218.91V140.15a5.69,5.69,0,1,0-11.37,0v78.76a5.69,5.69,0,1,0,11.37,0Z" />
                        <path d="M70.93,256.83c18.25,0,33.11-20.22,33.11-45.07s-14.86-45.07-33.11-45.07c-18.56,0-33.1,19.8-33.1,45.07S52.37,256.83,70.93,256.83Zm0-78.76c11.78,0,21.73,15.43,21.73,33.69s-10,33.69-21.73,33.69S49.21,230,49.21,211.76,59.15,178.07,70.93,178.07Z" />
                        <path d="M151.83,256.83c18.25,0,33.11-20.22,33.11-45.07s-14.86-45.07-33.11-45.07c-18.56,0-33.09,19.8-33.09,45.07S133.27,256.83,151.83,256.83Zm0-78.76c11.78,0,21.73,15.43,21.73,33.69s-9.95,33.69-21.73,33.69S130.11,230,130.11,211.76,140.05,178.07,151.83,178.07Z" />
                        <path d="M130.31,136.89a5.69,5.69,0,0,0,5.68-5.7l-.07-78.75a5.69,5.69,0,0,0-11.38,0l.08,78.76A5.68,5.68,0,0,0,130.31,136.89Z" />
                        <path d="M173.34,136.89a5.7,5.7,0,0,0,5.69-5.7L179,52.44a5.69,5.69,0,0,0-11.38,0l.07,78.76A5.68,5.68,0,0,0,173.34,136.89Z" />
                        <path d="M87.24,136.86a5.69,5.69,0,0,0,5.69-5.69V52.41a5.69,5.69,0,0,0-11.38,0v78.76A5.69,5.69,0,0,0,87.24,136.86Z" />
                        <path d="M49.67,136.86a5.69,5.69,0,0,0,5.69-5.69V52.41a5.69,5.69,0,0,0-11.38,0v78.76A5.69,5.69,0,0,0,49.67,136.86Z" />
                        <path d="M67.4,373c18.57,0,33.1-19.81,33.1-45.07S86,282.86,67.4,282.86c-18.25,0-33.11,20.21-33.11,45.06S49.15,373,67.4,373Zm0-78.76c11.78,0,21.72,15.43,21.72,33.69S79.18,361.6,67.4,361.61s-21.73-15.43-21.73-33.69S55.63,294.23,67.4,294.23Z" />
                        <path d="M169.15,282.86a5.69,5.69,0,0,0-5.69,5.69l.06,78.75a5.69,5.69,0,0,0,11.38,0l-.06-78.74A5.68,5.68,0,0,0,169.15,282.86Z" />
                        <path d="M125.79,288.51v78.76a5.69,5.69,0,1,0,11.37,0V288.51a5.69,5.69,0,0,0-11.37,0Z" />
                      </svg>
                    </div>
                    <div
                      class="border-r border-b border-l rounded-lg border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                      data-aos="fade-down"
                    >
                      <div class="mb-8">
                        <p class="text-lg font-semibold mb-2 text-gray-600 flex items-center">
                          Firmware Analysis
                        </p>

                        <p class="text-gray-700 text-base">
                          Firmware is the code that runs on an embedded
                          device.In embedded systems, manufacturers usually go
                          for functionality over security to decrease
                          manufacturing cost.We analyze the firmware, to find
                          various security vulnerabilities present.
                        </p>
                        <div className="mt-6 ">
                          {" "}
                          <a href="https://wiki.bi0s.in/hardware/firmware/introduction/">
                            <button class="bg-transparent hover:bg-emerald-500 text-emerald-500 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded">
                              More
                            </button>
                          </a>
                        </div>
                      </div>
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
                ></div>
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
