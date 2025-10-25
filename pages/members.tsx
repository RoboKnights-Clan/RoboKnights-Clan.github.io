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
  trait?: string;
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
      key={index}
      className="relative group w-[95%] h-48 border-2 border-black dark:border-white m-2 rounded-xl
                 cursor-pointer perspective-[1000px] overflow-hidden"
      onMouseMove={(e) => {
        const card = e.currentTarget.querySelector('.card-inner') as HTMLDivElement;
        if (!card) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = (y - rect.height / 2) / 7;
        const rotateY = (rect.width / 2 - x) / 7;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const light = e.currentTarget.querySelector('.light') as HTMLDivElement;
        if (light) light.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.55), rgba(0,0,0,0.05) 80%)`;
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget.querySelector('.card-inner') as HTMLDivElement;
        if (card) card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        const light = e.currentTarget.querySelector('.light') as HTMLDivElement;
        if (light) light.style.background = 'none';
      }}
    >
      {/* Lighting overlay */}
      <div className="light absolute inset-0 rounded-xl pointer-events-none transition-all duration-200 mix-blend-screen opacity-80"></div>

      {/* Flip container */}
      <div className="card-inner relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
        {/* Front face */}
        <div className="absolute inset-0 backface-hidden flex flex-row items-center space-x-4 px-4">
          <div className="flex flex-col">
            <h3 className="text-xl font-medium text-dark dark:text-white font-sanssm">{mem.name}</h3>
            <p className="text-gray-600 dark:text-gray-e9 font-sansm">{mem.role}</p>
            <div className="grid-cols-4 inline-grid grid-flow-row mt-2">
              {mem.socials?.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="text-dark text-xl">
                  {social.type === "github" && <FaGithub className="fill-black dark:fill-white" />}
                  {social.type === "instagram" && <FaInstagram className="fill-black dark:fill-white" />}
                  {social.type === "facebook" && <FaFacebook className="fill-black dark:fill-white" />}
                  {social.type === "behance" && <FaBehance className="fill-black dark:fill-white" />}
                  {social.type === "medium" && <FaMedium className="fill-black dark:fill-white" />}
                  {social.type === "youtube" && <FaYoutube className="fill-black dark:fill-white" />}
                  {social.type === "linkedin" && <FaLinkedin className="fill-black dark:fill-white" />}
                  {social.type === "spotify" && <FaSpotify className="fill-black dark:fill-white" />}
                  {social.type === "artstation" && <FaArtstation className="fill-black dark:fill-white" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-xl shadow-inner px-3">
          <p className="text-center text-base italic font-light">
            “{mem.trait ?? 'Driven by innovation and teamwork.'}”
          </p>
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
