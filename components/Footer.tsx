/* eslint-disable @next/next/no-img-element */
import React from "react";

const socials = [
  {
    name: "facebook",
    link: "https://www.facebook.com/roboknightsdps",
    src: "/icons/facebook.png",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/roboknights_dpsrkp/",
    src: "/icons/instagram.png",
  },
  {
    name: "github",
    link: "https://github.com/RoboKnights-Clan/",
    src: "/icons/github.png",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/company/roboknights/mycompany/",
    src: "/icons/linkedin.png",
  },
];

const Footer = () => {
  return (
    <div className="container px-5 py-12 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap bg-dark flex-col">
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
          <div className="flex flew-row text-white">
            {socials.map((social) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
                href={social.link}
                className="text-white hover:text-gray-300 mr-2 flex items-center"
              >
                <img src={social.src} className="w-7 h-7" alt={social.name} />
              </a>
            ))}
          </div>
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
