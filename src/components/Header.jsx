import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/vision-high-resolution-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({
  loginWithRedirect,
  logout,
  isAuthenticated,
  user,
  scrollToSection,
  updateLocomotiveScroll,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate(); // To programmatically navigate

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false); // Close the dropdown if clicked outside
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on unmount
    };
  }, []);

  setTimeout(() => {
    updateLocomotiveScroll();
  });

  // Function to handle link clicks
  const handleLinkClick = (id) => {
    if (location.pathname === "/") {
      // If on the Landing page, scroll to the section
      scrollToSection(id);
    } else {
      // If on any other page, navigate to the Landing page and scroll
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 100); // Add a delay to allow the page to load before scrolling
    }
  };

  return (
    <nav
      data-scroll-section
      className="flex justify-between items-center py-6 px-10 relative z-10"
    >
      <Link to="/" className="text-lg font-bold cursor-pointer">
        <img
          className="h-8"
          src={logo}
          alt="Vision Logo"
          width="auto"
          data-config-id="auto-img-1-7"
        />
      </Link>
      <div className="xl:hidden">
        <button className="navbar-burger focus:outline-none text-indigo-900 hover:text-[#6A00FF]">
          <svg
            className="block h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            data-config-id="auto-svg-1-7"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul className="hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <li>
          <a
            onClick={() => handleLinkClick("#home")}
            className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-[#6A00FF] transition duration-200 cursor-pointer"
            data-config-id="auto-txt-1-7"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => handleLinkClick("#clients")}
            className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-[#6A00FF] transition duration-200 cursor-pointer"
            data-config-id="auto-txt-2-7"
          >
            Clients
          </a>
        </li>
        <li>
          <a
            onClick={() => handleLinkClick("#cta")}
            className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-[#6A00FF] transition duration-200 cursor-pointer"
            data-config-id="auto-txt-3-7"
          >
            Demo
          </a>
        </li>
        <li>
          <a
            onClick={() => handleLinkClick("#footer")}
            className="text-lg font-extrabold hover:text-[#6A00FF] transition duration-200 cursor-pointer"
            data-config-id="auto-txt-4-7"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="hidden xl:flex items-center">
        {isAuthenticated ? (
          <div className="relative border-2 border-[#6A00FF] rounded-full p-1 transition-all duration-200 hover:shadow-sm">
            <button
              className="flex items-center space-x-2"
              onClick={toggleDropdown}
            >
              <img
                src={user.picture}
                alt={user.name}
                className="h-10 w-10 rounded-full"
              />
            </button>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-md rounded-md z-50"
              >
                <div className="px-4 py-2 text-left overflow-hidden">
                  <p className="font-bold truncate">{user.name}</p>
                  <p className="text-sm text-gray-600 truncate">{user.email}</p>
                </div>
                <div className="border-t border-gray-300">
                  <button
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-100 rounded-bl rounded-br transition duration-200"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <a
              className="inline-block mr-6 text-lg font-extrabold hover:text-[#6A00FF] transition duration-200"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </a>
            <a
              className="inline-block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
              onClick={() => loginWithRedirect()}
            >
              Sign Up
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
