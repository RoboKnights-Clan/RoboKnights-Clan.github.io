import React from "react";

const Footer = () => {
  return (
    <div className="container px-5 py-12 mx-auto md:px-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap bg-black flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center py-12 text-gray-900">
          <img src="/images/traced_logo.png" className="w-full" alt="ok" />
        </a>
      </div>
      <div className="flex-grow flex flex-row md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/2 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">
            Get in touch
          </h2>
          <nav className="list-none mb-10 text-sm text-white">
            Delhi Public School, R. K. Puram roboknights@dpsrkp.net
            ajithkumarkg@dpsrkp.net
          </nav>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">
            Our Socials
          </h2>
          <div className="flex flew-row"></div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">
            Links
          </h2>
          <nav className="list-none mb-10 text-sm text-white">
            Delhi Public School, R. K. Puram roboknights@dpsrkp.net
            ajithkumarkg@dpsrkp.net
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
