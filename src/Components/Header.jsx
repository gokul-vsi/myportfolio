import React from 'react'
import { useState } from 'react';
import 'animate.css';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
     const [activeLink, setActiveLink] = useState("Home");
  return (
    <div>
            <header className="bg-white navbar">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-purple-600 font-medium md:text-4xl animate__animated animate__fadeInDown" href="#">
              
              Portfolio
              
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex md:mt-2 items-center gap-6 text-base animate__animated animate__fadeInDown">
                {["Home", "About", "Skill", "Project", "Contact"].map((item) => (
                  <li key={item}>
                    <a className="font-medium "  href={`#${item}`} onClick={() => setActiveLink(item)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a className="rounded-md animate__animated animate__fadeInDown bg-purple-600 px-5 py-2.5 text-sm font-medium md:mt-2 text-white shadow-sm" href="#Contact">
                Contact
              </a>

              
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                {isOpen ? (
                  /* Close (X) icon */
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  /* Hamburger (☰) icon */
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="md:hidden">
            <ul className="mt-4 space-y-2 text-center">
              {["Home", "About", "Skill", "Project", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    className="block text-gray-500 transition hover:text-gray-700"
                    href={`#${item}`}
                    onClick={() => setIsOpen(false)} // Close menu when clicking a link
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
    </div>
  )
}
