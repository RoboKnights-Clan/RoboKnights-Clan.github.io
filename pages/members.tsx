/* eslint-disable @next/next/no-img-element */
import React from "react";
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
  name: string;
  role: string;
  src: string;
  socials?: Social[];
}

interface MemberGroup {
  year: string;
  members: Member[];
}

const MembersPage: NextPage = () => {
  const [shownMembers, setMembers] = React.useState<MemberGroup[]>(members);
  const { theme, setTheme } = useTheme();

  const onSearchBarChange = () => {
    const input = document.getElementById("search") as HTMLInputElement;
    if (input.value !== "") {
      setMembers(
        members.map((mem) => ({
          year: mem.year,
          members: Array.isArray(mem.members)
            ? mem.members.filter((m) =>
                m.name.toLowerCase().includes(input.value.toLowerCase())
              )
            : [],
        }))
      );
    } else {
      setMembers(members);
    }
  };

  const memberElement = (mem: Member, index: number) => {
    return (
      <div
         className="p-2 w-[95%] border-2 border-black dark:border-white px-3 m-2 py-4 rounded-md
             transition-transform duration-300 ease-out
             hover:border-blue-500 dark:hover:border-blue-400
             hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]
             dark:hover:shadow-[0_8px_25px_rgba(255,255,255,0.1)]"
  onMouseMove={(e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / 15;
    const rotateY = (rect.width / 2 - x) / 15;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
  }}
        key={index}
      > 
        <div className="flex flex-row space-x-4 items-center">
          <div className="flex flex-col">
            <h3 className="text-xl font-medium text-dark dark:text-white font-sanssm">
              {mem.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-e9 font-sansm">{mem.role}</p>
            <div className="grid-cols-4 inline-grid grid-flow-row">
              {mem.socials?.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark text-xl mt-2"
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
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Members">
      <div className="container mx-auto md:px-10 px-5 py-12">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-dark dark:text-gray-e9 font-sanssm">
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
                className="h-14 w-64 pl-10 pr-20 z-0 focus:shadow focus:outline-none border-2 p-2 rounded-md border-black dark:border-white text-gray-bf font-sansm"
                placeholder="Search members"
                onInput={onSearchBarChange}
              />
            </div>
          </div>
        </div>
        {shownMembers
          .filter((m) => m.members?.length > 0)
          .map((mem, index) => (
            <div key={index}>
              <h2 className="text-dark dark:text-gray-e9 font-medium text-3xl pb-6 pt-12 font-sansm">
                {mem.year}
              </h2>
              <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 -m-2">
                {mem.members?.map((mem, index) => memberElement(mem, index))}
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default MembersPage;
