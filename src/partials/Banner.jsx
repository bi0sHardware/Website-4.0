import React, { useState } from "react";

function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60 md:p-0 p-3">
          <div className="bg-emerald-600 hover:bg-emerald-400 hover:scale-110 text-slate-50 text-sm p-3 rounded-lg shadow-lg flex justify-between">
            <div className="text-slate-500 inline-flex mx-auto">
              <a
                className="font-medium text-white mx-2"
                href="https://cruip.com/simple/"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
