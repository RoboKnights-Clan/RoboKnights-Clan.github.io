/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { members } from "../data/members";
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

interface Member {
  id: string; // Assuming members have unique IDs
  name: string;
  role: string;
  socials?: Social[];
}

interface MemberGroup {
  year: string | number; // Allow both string and number for 'year'
  members: Member[];
}

const MembersPage: NextPage = () => {
  const [shownMembers, setMembers] = useState<MemberGroup[]>(members);
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const socialIcons: { [key: string]: JSX.Element } = {
    github: <FaGithub />,
    instagram: <FaInstagram />,
    facebook: <FaFacebook />,
    behance: <FaBehance />,
    medium: <FaMedium />,
    youtube: <FaYoutube />,
    linkedin: <FaLinkedin />,
    spotify: <FaSpotify />,
    artstation: <FaArtstation />,
  };

  const onSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      setMembers(
        members.map((mem) => ({
          year: mem.year,
          members: mem.members.filter((m) =>
            m.name.toLowerCase().includes(query)
          ),
        }))
      );
    } else {
      setMembers(members); // Reset when input is cleared
    }
  };

  const memberElement = (mem: Member) => (
    <div
      key={mem.id} // Use unique ID instead of index for the key
      className="p-2 w-[95%] border-2 border-black dark:border-white px-3 m-2 py-4 rounded-md"
    >
      <div className="flex flex-row space-x-4 items-center">
        <div className="flex flex-col">
          <h3 className="text-xl font-medium text-dark dark:text-white">
            {mem.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-e9">{mem.role}</p>
          <div className="grid-cols-4 inline-grid grid-flow-row">
            {mem.socials?.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark text-xl mt-2"
              >
                {socialIcons[social.type.toLowerCase()]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout title="Members">
      <div className="container mx-auto md:px-10 px-5 py-12">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-dark dark:text-gray-e9">
            Members
          </h1>
          <div className="container">
            <div className="relative">
              <div className="absolute top-4 left-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={onSearchBarChange}
                className="h-14 w-64 pl-10 pr-20 z-0 focus:shadow focus:outline-none border-2 p-2 rounded-md border-black dark:border-white text-gray-bf"
                placeholder="Search members"
              />
            </div>
          </div>
        </div>

        {shownMembers
          .filter((m) => m.members.length > 0)
          .map((mem) => (
            <div key={mem.year}>
              <h2 className="text-dark dark:text-gray-e9 font-medium text-3xl pb-6 pt-12">
                {mem.year}
              </h2>
              <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 -m-2">
                {mem.members.map(memberElement)}
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default MembersPage;
