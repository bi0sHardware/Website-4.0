import { useState } from "react";
import { HiMenuAlt2, RxCross2 } from "react-icons/all";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#111827] backdrop-blur-sm md:bg-opacity-90 transition shadow-lg fixed top-0 left-0 right-0 z-50 text-white font-mono">
      <div className="justify-between px-8 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:block">
            <a href="/">
              <div className="flex flex-row gap-2">
                <img src="src/images/bios.png" alt={"logo"} className="w-32" />
              </div>
            </a>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <RxCross2 className="w-6 h-6" />
                ) : (
                  <HiMenuAlt2 className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isOpen ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out hover:scale-110">
                <a href="/about" onClick={() => setIsOpen(!isOpen)}>
                  About
                </a>
              </li>
              <li className="font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out hover:scale-110">
                <a
                  href="/research"
                  scroll={false}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Research
                </a>
              </li>
              <li className="font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out hover:scale-110">
                <a href="/members" onClick={() => setIsOpen(!isOpen)}>
                  Members
                </a>
              </li>
              {/* <li className="whitespace-nowrap  text-lg font-bold ">
                <Link
                  to="/signin"
                  className="font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out hover:scale-110"
                >
                  Sign In
                  <svg
                    className="w-3 h-3 fill-current text-[#111827] flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
