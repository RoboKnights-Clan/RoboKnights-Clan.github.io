/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/Layout/Layout";
import { contacts, socials } from "../data/contact";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaBehance,
  FaMedium,
  FaArtstation,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";
import { useTheme } from "next-themes";
import type { NextPage } from "next";

interface Social {
  type: string;
  url: string;
}

interface ContactPerson {
  name: string;
  role: string;
  email: string;
  remark?: string;
}

const ContactPage: NextPage = () => {
  const [shownContacts, setContacts] = React.useState<ContactPerson[]>(contacts);
  const { theme } = useTheme();

  const contactElement = (person: ContactPerson, index: number) => {
    return (
      <div
        key={index}
        className="p-2 w-[95%] border-2 border-black dark:border-white px-3 m-2 py-4 rounded-md"
      >
        <div className="flex flex-col space-y-1">
          <h3 className="text-xl font-medium text-dark dark:text-white font-sanssm">
            {person.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-e9 font-sansm">
            {person.role}
          </p>
          {person.remark && (
            <p className="text-gray-500 dark:text-gray-400 italic text-sm font-sansm">
              {person.remark}
            </p>
          )}
          <a
            href={`mailto:${person.email}`}
            className="text-primary dark:text-primary-dark font-sansm hover:underline"
          >
            {person.email}
          </a>
        </div>
      </div>
    );
  };

  const socialIcon = (social: Social, index: number) => {
    return (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark text-2xl mx-2"
      >
        {social.type === "github" ? (
          <FaGithub className="fill-black dark:fill-white" />
        ) : social.type === "instagram" ? (
          <FaInstagram className="fill-black dark:fill-white" />
        ) : social.type === "facebook" ? (
          <FaFacebook className="fill-black dark:fill-white" />
        ) : social.type === "behance" ? (
          <FaBehance className="fill-black dark:fill-white" />
        ) : social.type === "medium" ? (
          <FaMedium className="fill-black dark:fill-white" />
        ) : social.type === "youtube" ? (
          <FaYoutube className="fill-black dark:fill-white" />
        ) : social.type === "linkedin" ? (
          <FaLinkedin className="fill-black dark:fill-white" />
        ) : social.type === "spotify" ? (
          <FaSpotify className="fill-black dark:fill-white" />
        ) : social.type === "artstation" ? (
          <FaArtstation className="fill-black dark:fill-white" />
        ) : (
          <></>
        )}
      </a>
    );
  };

  return (
    <Layout title="Contact Us">
      <div className="container mx-auto md:px-10 px-5 py-12">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-dark dark:text-gray-e9 font-sanssm">
            Contact Us
          </h1>
        </div>

        <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 -m-2">
          {shownContacts.map((person, index) => contactElement(person, index))}
        </div>

        {/* Social Section */}
        <div className="pt-12">
          <h2 className="text-dark dark:text-gray-e9 font-medium text-3xl pb-6 font-sansm">
            Follow Us
          </h2>
          <div className="flex flex-wrap items-center mt-2">
            {socials.map((social, index) => socialIcon(social, index))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
