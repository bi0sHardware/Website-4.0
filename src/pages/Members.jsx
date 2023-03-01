import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";

import Header2 from "../partials/Header2";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";

import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Banner from "../partials/Banner";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
// images
import vipinsir from "../images/vipinsir.jpeg";
// cofounders
import season from "../images/season.jpeg";
import ashwinnambiar from "../images/ashwinnambiar.jpeg";
import hariprasad from "../images/hariprasad.jpeg";
// Mentors

import viveknj from "../images/viveknj.jpeg";
import aswinc from "../images/aswinc.jpeg";
import athul from "../images/athul.jpeg";
import indraraj from "../images/indraraj.jpeg";
import nidhin from "../images/nidhin.jpeg";
import ranit from "../images/ranit.jpeg";



function FeaturesBlocks() {
  const [tab, setTab] = useState(1);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden font-mono selection:bg-lime-500 selection:text-[#111827]">
      {/*  Site header */}
      <Header2 />

      {/*  Page content */}
      <main className="flex-grow ">
        {/*  Page sections */}

        <section className="relative bg-[#111827] text-white  w-screen h-">
          {/* Section background (needs .relative class on parent and next sibling elements) */}
          <div
            className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-bg-[#1e293b] pointer-events-none"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-[#1e293b] transform translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 ">
            <div className="py-10 md:py-12">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center   mt-16 pb-8 md:pb-8">
                <h2 className="h2 mb-4 text-white text-4xl  ml-4">Our Team</h2>

                <h2 className="h2 mb-4 text-white text-3xl text-center ml-4 ">
                  Founder and Chief Mentor
                </h2>
                <div className="flex sm:flex-col   lg:flex-row my-10 ">
                  <div
                    className=" ml-8 text-2xl s font-bold md:ml-10  w-1/2   sm:w-full sm:h-96 sm:object-cover sm:object-center "
                    data-aos="fade-right"
                  >
                    <img
                      src={vipinsir}
                      className="h-96  border-gray-700 border-2 pt-4 pb-4 pl-4 pr-4 "
                    />
                  </div>
                  <div className="w-full">
                    <h2 className="  text-2xl md:text-left    font-bold  text-gray-300">
                      Th3_M3nt0r
                    </h2>
                    <h3 className="text-white md:text-left  text-2xl  font-bold mt-2">
                      VIPIN PAVITHRAN
                    </h3>
                    <p className=" mt-4  text-gray-300   md:text-left   ">
                      Vipin Pavithran is a cyber-security veteran and takes deep
                      passion in mentoring students at Amrita Vishwa
                      Vidyapeetham. Prior to coming to Amritapuri, he has worked
                      for over 10 years in the software industry in the USA &
                      UK. Being passionate about helping students to develop
                      their talent and to make them reach their potential, he
                      founded the internationally recognised student clubs -
                      amFOSS, Team bi0s and Team Shakti, and today mentors over
                      300 engineering students directly through these clubs.
                      team bi0s was amongst India's first CTF team when it was
                      formed in 2007, and it was this team that founded the
                      InCTF in 2010, which was the first-ever CTF contest to be
                      organized in India.
                    </p>
                    <div className="flex flex-row gap-4 mt-8 text-4xl justify-center md:justify-end">
                      <a href="https://twitter.com/th3_m3nt0r">
                        <BsTwitter />
                      </a>
                      <a href="https://www.linkedin.com/in/vipinpavithran/">
                        <BsLinkedin />
                      </a>

                      <MdMessage />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="h2 mt-24 text-center text-white text-3xl ml-4">
                  Co-Founders
                </h2>
              </div>
              {/* Items */}
              <div className=" mt-28 max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {/* 1st item */}
                <div
                  className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2 "
                  data-aos="fade-down"
                >
                  <img
                    src={ashwinnambiar}
                    className="h-64 rounded"
                  />
                  <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                    ASHWIN NAMBIAR
                  </h4>
                  <p className="text-gray-600 text-center">
                    PhD at Purdue University
                  </p>
                </div>

                {/* 2nd item */}
                <div
                  className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                  data-aos="fade-down"
                >
                  <img
                    src="src/images/hariprasad.jpeg"
                    className="h-64 rounded"
                  />
                  <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                    HARIPRASAD K V
                  </h4>
                  <p className="text-gray-600 text-center">
                    Senior Researcher at Payatu
                  </p>
                </div>

                {/* 3rd item */}
                <div
                  className="relative flex flex-col items-center p-5 rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                  data-aos="fade-down"
                >
                  <img src={season} className="h-64 rounded" />
                  <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                    SEASON CHERIAN
                  </h4>
                  <p className="text-gray-600 text-center">
                    Cyber Security Consultant
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="h2 mt-24 text-center text-white text-3xl ml-4">
                Mentors
              </h2>
            </div>
            <div className=" mt-28 max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              {/* 2nd item */}
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/season.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  SEASON CHERIAN
                </h4>
                <p className="text-gray-600 text-center">OT Security</p>
              </div>
              {/* 1st item */}
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/viveknj.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  VIVEK N J
                </h4>
                <p className="text-gray-600 text-center">Firmware Analysis</p>
              </div>
            </div>
            <div>
              <h2 className="h2 mt-24 text-center text-white text-3xl ml-4">
                STUDENT MEMBERS
              </h2>
              <h2 className="h2 mt-8 text-white text-xl ml-4">Fourth Years</h2>
            </div>
            <div className=" mt-28 max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              {/* 2nd item */}
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/aswinc.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  ASWIN C
                </h4>
                <p className="text-gray-600 text-center">Firmware Analysis</p>
              </div>
              {/* 1st item */}
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/athul.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  ATHUL MENON
                </h4>
                <p className="text-gray-600 text-center">Firmware Analysis</p>
              </div>
              {/* 1st item */}
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/indraraj.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  INDRARAJ BISWAS
                </h4>
                <p className="text-gray-600 text-center">Wireless Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/nidhin.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  NIDHIN NAUSHAD
                </h4>
                <p className="text-gray-600 text-center">Embedded Devlopment</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/ranit.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  RANIT PRADHAN
                </h4>
                <p className="text-gray-600 text-center">Embedded Devlopment</p>
              </div>
            </div>
            <div>
              <h2 className="h2 mt-8  text-white text-xl ml-4">Third Years</h2>
            </div>
            <div className=" mt-28 max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              {/* 2nd item */}
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img
                  src="src/images/sreesankar1.jpeg"
                  className="h-64 rounded"
                />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  SREESANKAR S
                </h4>
                <p className="text-gray-600 text-center">Hardware Security</p>
              </div>
              {/* 1st item */}
              <div
                className="relative flex flex-col items-center p-6  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/hridul.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  NARIKODAN HRIDUL
                </h4>
                <p className="text-gray-600 text-center">Hardware Security</p>
              </div>
              {/* 1st item */}
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/ghanshyam.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  GHAN SHYAM
                </h4>
                <p className="text-gray-600 text-center">Hardware Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/kiran.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  KIRAN S P
                </h4>
                <p className="text-gray-600 text-center">Wireless Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/gauthamjb.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  GAUTHAM J B
                </h4>
                <p className="text-gray-600 text-center">Wireless Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/archit.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  ARCHIT KAK
                </h4>
                <p className="text-gray-600 text-center">Automotive Security</p>
              </div>
            </div>
            <div>
              <h2 className="h2 mt-8  text-white text-xl ml-4">Second Years</h2>
            </div>
            <div className=" mt-28 max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              {/* 2nd item */}
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/satysai.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  SATYA SAI N
                </h4>
                <p className="text-gray-600 text-center">Web Security</p>
              </div>
              {/* 1st item */}
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/siddharth.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  SIDDHARTH REDDY
                </h4>
                <p className="text-gray-600 text-center">Web Security</p>
              </div>
              {/* <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/Sahithya.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  SAHITHYA K
                </h4>
                <p className="text-gray-600 text-center">Web Security</p>
              </div> */}
              {/* 1st item */}
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/govind.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  GOVIND
                </h4>
                <p className="text-gray-600 text-center">Firmware Analysis</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/karthik.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  KARTHIK G
                </h4>
                <p className="text-gray-600 text-center">Firmware Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/rajask.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  RAJA S K
                </h4>
                <p className="text-gray-600 text-center">Hardware Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/nived.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  NIVED P V
                </h4>
                <p className="text-gray-600 text-center">Hardware Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/drupad.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  DRUPAD DEV
                </h4>
                <p className="text-gray-600 text-center">Automotive Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/avanthika.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  AVANTHIKA RAJESH
                </h4>
                <p className="text-gray-600 text-center">OT Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/swetha.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  SWETHA AJITH
                </h4>
                <p className="text-gray-600 text-center">Wireless Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/roopa.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  ROOPA RAVALI
                </h4>
                <p className="text-gray-600 text-center">Wireless Security</p>
              </div>
            </div>
            <div>
              <h2 className="h2 mt-24 text-center text-white text-3xl ml-4">
                ALUMNI
              </h2>
            </div>
            <div
              className=" mt-28 max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none "
              data-aos="fade-down"
            >
              {/* 2nd item */}
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img
                  src={ashwinnambiar}
                  className="h-64 rounded"
                />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  ASHWIN NAMBIAR
                </h4>
                <p className="text-gray-600 text-center">Hardware Security</p>
                <p className="text-gray-600 text-center">
                  Microarchitectural Attacks
                </p>
              </div>
              {/* 1st item */}
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/season.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  SEASON CHERIAN
                </h4>
                <p className="text-gray-600 text-center">OT Security</p>
                <p className="text-gray-600 text-center">Wireless Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img
                  src="src/images/hariprasad.jpeg"
                  className="h-64 rounded"
                />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  HARIPRASAD
                </h4>
                <p className="text-gray-600 text-center">Firmware Analysis</p>
                <p className="text-gray-600 text-center">Hardware Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/hari.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  HARI
                </h4>
                <p className="text-gray-600 text-center">Embedded Devlopment</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img
                  src="src/images/karthiklade.jpeg"
                  className="h-64 rounded"
                />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  KARTHEEK LADE
                </h4>
                <p className="text-gray-600 text-center">Automotive Security</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/aathira.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  AATHIRA DINESAN
                </h4>
                <p className="text-gray-600 text-center">A.I./M.L.</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/arya.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  ARYA SURENDRAN
                </h4>
                <p className="text-gray-600 text-center">Embedded Devlopment</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5  rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2"
                data-aos="fade-down"
              >
                <img src="src/images/amitha.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  AMITHA DEEP
                </h4>
                <p className="text-gray-600 text-center">Embedded Devlopment</p>
              </div>
              <div
                className="relative flex flex-col items-center p-5 rounded shadow-xl border-gray-700 rounded-tl-lg rounded-br-lg border-2 mb-16"
                data-aos="fade-down"
              >
                <img src="src/images/keerthana.jpeg" className="h-64 rounded" />
                <h4 className="text-xl mt-8 font-bold leading-snug tracking-tight mb-1">
                  KEERTHANA K M
                </h4>
                <p className="text-gray-600 text-center">Automotive Security</p>
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

export default FeaturesBlocks;
