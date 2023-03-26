import React from "react";

import Header2 from "../partials/Header2";
import Banner from "../partials/Banner";
import Carousel from "../partials/Carousel";
import Design from "../partials/Design";
import Footer from "../partials/Footer";
function Gallery() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden font-mono bg-[#0f172a] text-white">
      {/*  Site header */}
      <Header2 />
      <div className="w-full h-screen absolute top-0 left-0">
        <Design />
      </div>
      {/*  Page content */}
      <section>
        <br />
        <br />
        <br />
        <br />
        <main className="flex-grow">
          <div className="pb-16">
            <div className="flex justify-center items-center">
              <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                <div className="flex flex-col jusitfy-center items-center space-y-10">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <p className="text-xl leading-5 text-white">
                      bi0s-hardware
                    </p>
                    <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-white">
                      Gallery
                    </h1>
                  </div>
                  <div className="grid max-w-2xl">
                    <Carousel />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 w-full ">
                    <div className="relative group flex justify-center items-center h-full w-full">
                      <img
                        className="object-center object-cover h-full galleryborderleft w-full"
                        src="https://res.cloudinary.com/dhybspk1v/image/upload/v1679671745/bi0shardware/img5_bmnsii.jpg"
                        alt="Circuit Board"
                      />
                    </div>
                    <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0 ">
                      <div className="relative group flex justify-center items-center h-full w-full ">
                        <img
                          className="object-center object-cover h-full  gallerybordercenter w-full"
                          src="https://res.cloudinary.com/dhybspk1v/image/upload/v1679671742/bi0shardware/img1_zclg4m.jpg"
                          alt="shoe-image"
                        />
                      </div>
                      <div className="relative group flex justify-center items-center h-full w-full">
                        <img
                          className="object-center object-cover h-full gallerybordercenterdo w-full"
                          src="https://res.cloudinary.com/dhybspk1v/image/upload/v1679671739/bi0shardware/img3_gukeq0.jpg"
                          alt="watch-image"
                        />
                      </div>
                    </div>
                    <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                      <img
                        className="object-center object-cover h-full galleryborderright w-full"
                        src="https://res.cloudinary.com/dhybspk1v/image/upload/v1679671746/bi0shardware/img4_gunf8f.jpg"
                        alt="girl-image"
                      />
                    </div>
                    <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                      <img
                        className="object-center object-cover h-full galleryborderrightw-full hidden md:block"
                        src="https://res.cloudinary.com/dhybspk1v/image/upload/v1679671746/bi0shardware/img4_gunf8f.jpg"
                        alt="girl-image"
                      />
                      <img
                        className="object-center object-cover h-full rgalleryborderright w-full md:hidden"
                        src="https://res.cloudinary.com/dhybspk1v/image/upload/v1679671746/bi0shardware/img4_gunf8f.jpg"
                        alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                      />
                    </div>
                  </div>
                  <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
                    <img
                      className="object-center object-cover h-full galleryborderright w-full hidden md:block"
                      src="https://res.cloudinary.com/dhybspk1v/image/upload/v1679671746/bi0shardware/img4_gunf8f.jpg"
                      alt="girl-image"
                    />
                    <img
                      className="object-center object-cover h-full  galleryborderright w-full sm:hidden"
                      src="https://res.cloudinary.com/dhybspk1v/image/upload/v1679671746/bi0shardware/img4_gunf8f.jpg"
                      alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      <Banner />
      <Footer />
    </div>
  );
}

export default Gallery;
