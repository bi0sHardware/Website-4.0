import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [top, setTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-80 transition duration-300 ease-in-out ${
        !top && "bg-[#0f172a] backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 mb-4 mt-2  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <a href="#">
              <img src="src/images/bios.png" className="w-28" />
            </a>
          </div>
          <div className="visible md:invisible text-white absolute right-12 ">
            <RxHamburgerMenu
              className="w-8 h-8 "
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow invisible md:visible">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#about"
                  className="font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out hover:scale-110"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out hover:scale-110"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="/members"
                  className="font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out hover:scale-110"
                >
                  Members
                </a>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="btn-sm text-gray-200 bg-[#111827] hover:bg-gray-100 hover:text-[#111827] ml-3 hover:scale-110"
                >
                  <span>Sign In</span>
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
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
