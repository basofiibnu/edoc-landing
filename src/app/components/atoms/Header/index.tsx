import React from 'react';

const Header = () => {
  return (
    <header className="container mx-auto py-8 flex justify-between items-center">
      <div>
        <img
          src="/logo.svg"
          alt="logo"
          className="w-full max-w-[135px] h-auto"
        />
      </div>
      <nav>
        <div className="flex space-x-10 items-center">
          {[
            'Home',
            'About Us',
            'Our Services',
            'Pricings',
            'Blogs',
          ].map((item, index) => (
            <div
              key={index}
              className={`${
                index !== 0
                  ? 'text-[#6B7280] font-normal'
                  : 'font-semibold'
              } tracking-wider text-base transition-all duration-100 ease-in-out hover:text-[#000]`}
            >
              <a href="#">{item}</a>
            </div>
          ))}
          <div>
            <button className="bg-[#DEE9F3] py-2 px-4 rounded-lg text-base text-[#312D47] uppercase font-semibold tracking-wider">
              Free Trial Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
