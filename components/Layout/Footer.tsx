import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { links } from "./Header";

const socials: { icon: React.ReactFragment; url: string }[] = [
  {
    icon: <FaGithub />,
    url: "https://github.com/RoboKnights-Clan",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com",
  },
  {
    icon: <FaFacebook />,
    url: "https://facebook.com",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com",
  },
];

const Footer = () => {
  return (
    <div className="p-5 bg-dark dark:bg-footerdark text-center flex items-center lg:text-left">
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
        <div className="mb-6 lg:mr-24 sm:mx-auto flex items-center justify-center">
          <img src="/images/traced_logo.svg" alt="" />
        </div>

        <div className="mb-6 sm:mx-auto flex flex-col items-center justify-center">
          <h5 className="font-bold mb-2.5 text-lg text-white w-full font-sanssm">
            Get in Touch
          </h5>
          <p className="text-gray-e5">Delhi Public School, R. K. Puram</p>
          <p className="text-gray-e5 w-full mt-2"> roboknights@dpsrkp.net</p>
          <p className="text-gray-e5 w-full mt-2">ajithkumarkg@dpsrkp.net</p>
        </div>

        <div className="mb-6 lg:pr-12 sm:mx-auto flex flex-col items-center justify-center">
          <h5 className="font-bold mb-2.5 text-lg block text-white w-full font-sanssm">
            Our Socials
          </h5>
          <div className="flex space-x-4 flex-row">
            {socials.map((social, index) => {
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-e5 text-xl"
                >
                  {social.icon}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <h5 className="font-bold mb-2.5 text-lg text-white font-sanssm">Links</h5>
          <div className="flex flex-col space-y-1">
            <Link href="/resources">
              <a className="text-gray-e5">Resources</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-e5">Blog</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
