import React from "react";
import { Link } from "react-router-dom";

import Header2 from "../partials/Header2";
import Banner from "../partials/Banner";

function SignIn() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden font-mono  ">
      {/*  Site header */}

      {/*  Page content */}
      <main className="flex md:flex-row-reverse flex-grow sm:flex-col-reverse">
        <section className="bg-gradient-to-b from-gray-100 to-white md:w-1/2  ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
            <div className="pt-32 pb-12 md:pt-40 sm:pt-10 md:pb-20 ">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center  md:pb-8 w-72 ">
                <h1 class="text-[#111827] font-bold text-4xl mb-12 text-center rounded-tr-xl rounded-bl-xl outline outline-offset-4 outline-2  ">
                  Sign In
                </h1>
                <h1 class="text-[#111827] font-bold text-2xl mb-1">
                  Hello Again!
                </h1>
                <p class="text-sm font-normal text-[#111827] ">
                  Welcome Back To Bi0s Hardware CMS
                </p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <Link
                          to="/reset-password"
                          className="text-sm font-medium text-emerald-500 hover:underline"
                        >
                          Having trouble signing in?
                        </Link>
                      </div>
                      <input
                        id="password"
                        type="password"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-600 ml-2">
                            Keep me signed in
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <button className=" w-full bg-[#10b981] mt-4 py-2 rounded-lg text-white  font-semibold mb-2 hover:bg-[#34d399] ">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-[#111827] md:w-1/2 flex justify-around items-center ">
          <img
            src="src/images/image2.png"
            className="sm:h-96 
          "
          />
        </div>
      </main>

      <Banner />
    </div>
  );
}

export default SignIn;
