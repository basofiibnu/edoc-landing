import { navLinks } from '@/app/lib/constants';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <img
            src="/logo.svg"
            alt="logo"
            className="w-full max-w-[135px] h-auto"
          />
        </div>
        <nav className="hidden xl:flex space-x-10 items-center">
          {navLinks.map((item) => (
            <div
              key={item.id}
              className={`${
                item.id !== 1
                  ? 'text-[#6B7280] font-normal'
                  : 'font-semibold'
              } tracking-wider text-base transition-all duration-100 ease-in-out hover:text-[#000]`}
            >
              <a href={item.link}>{item.name}</a>
            </div>
          ))}
          <div>
            <button className="bg-[#DEE9F3] py-2 px-4 rounded-lg text-base text-[#312D47] uppercase font-semibold tracking-wider">
              Free Trial Now
            </button>
          </div>
        </nav>
        <div className="xl:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="xl:hidden bg-white w-full px-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            layout
          >
            {navLinks.map((item) => (
              <div
                key={item.id}
                className={`${
                  item.id !== 1
                    ? 'text-[#6B7280] font-normal'
                    : 'font-semibold'
                } text-center tracking-wider text-base transition-all duration-100 ease-in-out hover:text-[#000] hover:bg-slate-200 py-2 rounded-md`}
              >
                <a href={item.link}>{item.name}</a>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
