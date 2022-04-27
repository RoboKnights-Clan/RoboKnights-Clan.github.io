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
  FaYoutube,
} from "react-icons/fa";
import { useTheme } from "next-themes";

const MembersPage = () => {
  let [shownMembers, setMembers] = React.useState(members);
  let {theme, setTheme} = useTheme();

  const onSearchBarChange = () => {
    const input = document.getElementById("search") as HTMLInputElement;
    if (input.value != "") {
      setMembers(
        members.map((mem) => {
          return {
            year: mem.year,
            members: mem.members.filter((m) =>
              m.name.toLowerCase().includes(input.value.toLowerCase())
            ),
          };
        })
      );
    } else setMembers(members);
  };

  const memberElement = (mem: any, index: number) => {
    return (
      <div
        className="p-2 lg:w-1/4 md:w-1/2 w-full border-2 border-black dark:border-white px-3 m-2 py-4 rounded-md"
        key={index}
      >
        <div className="flex flex-row space-x-4 items-center">
          <img
            className="rounded-full aspect-square object-cover object-center w-1/2"
            src={mem.src}
            alt={mem.name}
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-medium text-dark dark:text-white font-sanssm">{mem.name}</h3>
            <p className="text-gray-600 dark:text-gray-200">{mem.role}</p>
            <div className="grid-cols-4 inline-grid grid-flow-row">
              {mem.socials ? (
                mem.socials.map((social: any, index: number) => {
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark text-xl"
                    >
                      {social.type == "github" ? (
                        <FaGithub fill={theme == "dark" ? "white" : "black"}/>
                      ) : social.type == "instagram" ? (
                        <FaInstagram fill={theme == "dark" ? "white" : "black"}/>
                      ) : social.type == "facebook" ? (
                        <FaFacebook fill={theme == "dark" ? "white" : "black"}/>
                      ) : social.type == "behance" ? (
                        <FaBehance fill={theme == "dark" ? "white" : "black"}/>
                      ) : social.type == "medium" ? (
                        <FaMedium fill={theme == "dark" ? "white" : "black"}/>
                      ) : social.type == "youtube" ? (
                        <FaYoutube fill={theme == "dark" ? "white" : "black"}/>
                      ) : social.type == "linkedin" ? (
                        <FaLinkedin fill={theme == "dark" ? "white" : "black"}/>
                      ) : (
                        <></>
                      )}
                    </a>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Members">
      <div className="container mx-auto md:px-24 px-5 py-12">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-dark dark:text-white font-sanssm">
            Members
          </h1>
          <div className="container">
            <div className="relative">
              <div className="absolute top-4 left-3">
                {" "}
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
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
              </div>{" "}
              <input
                id="search"
                type="text"
                className="h-14 w-60 pl-10 pr-20 z-0 focus:shadow focus:outline-none border-2 p-2 rounded-md border-black dark:border-white"
                placeholder="Search"
                onInput={onSearchBarChange}
              />
            </div>
          </div>
        </div>
        {shownMembers
          .filter((m) => m.members.length > 0)
          .map((mem, index) => {
            return (
              <div key={index}>
<<<<<<< HEAD
                <h2
                  className={
                    "text-dark font-medium text-3xl pb-6 pt-12 font-sansm"
                  }
                >
=======
                <h2 className={"text-dark dark:text-gray-200 font-medium text-3xl pb-6 pt-12 font-sansm"}>
>>>>>>> 4a0323a2e60eaef84461b8ef47c3cca0e2acdff2
                  {mem.year}
                </h2>
                <div className="flex flex-wrap -m-2">
                  {mem.members.map((mem, index) => {
                    return memberElement(mem, index);
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default MembersPage;
