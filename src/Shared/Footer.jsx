import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaHome, FaInfoCircle, FaSuitcase, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-3xl font-semibold text-white">Your Logo</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a
                href="#"
                className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a
                href="#"
                className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a
                href="#"
                className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden -mr-2">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 text-white hover:bg-gray-800 focus:outline-none">
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition duration-100 ease-in"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Footer;
