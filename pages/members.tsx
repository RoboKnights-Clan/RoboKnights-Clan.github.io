import React from "react";
import useTitle from "../hooks/use-title";
import Header from "../components/Header";
import { members } from "../data/members";

const MembersPage = () => {
  useTitle("Members");

  let [shownMembers, setMembers] = React.useState(members);

  const onSearchBarChange = () => {
      const input = document.getElementById("search") as HTMLInputElement;
      if (input.value != ''){
          setMembers(members.map((mem, index) => {
             return {year: mem.year, members: mem.members.filter(m => m.name.toLowerCase().includes(input.value.toLowerCase()))}
          }));
      }
      else setMembers(members);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto md:px-24 px-5 py-12">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
            Members
          </h1>
          <input
            id={"search"}
            type="text"
            className="border-2 p-2 border-black w-60"
            placeholder="Search"
            onInput={onSearchBarChange}
          />
        </div>
        {shownMembers.filter(m => m.members.length > 0).map((mem, index) => {
          return (
            <div key={index}>
              <h2 className={"text-black text-3xl pb-6 pt-12"}>{mem.year}</h2>
              <div className="flex flex-wrap -m-2">
                {mem.members.map((mem, index) => {
                  return (
                    <div className="p-2 lg:w-1/5 md:w-1/2 w-full" key={index}>
                      <div className="h-32 flex items-center border-black border-2 p-4">
                        <div className="flex-grow p-5">
                          <h2 className="text-gray-900 title-font font-medium text-xl">
                            {mem.name}
                          </h2>
                          <p className="text-gray-500">{mem.role}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MembersPage;
