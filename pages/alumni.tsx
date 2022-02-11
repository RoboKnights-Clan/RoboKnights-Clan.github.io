import React, { useState } from "react";
import useTitle from "../hooks/use-title";
import Header from "../components/Header";
import { alumni } from "../data/alumni";

const AlumniPage = () => {
  useTitle("Alumni");

  const [shownAlumni, setAlumni] = useState(alumni);

  const onSearchBarChange = () => {
    const input = document.getElementById("search") as HTMLInputElement;
    if (input.value != "") {
      setAlumni(
        alumni.map((alum, index) => {
          return {
            batch: alum.batch,
            people: alum.people.filter((a) =>
              a.name.toLowerCase().includes(input.value.toLowerCase())
            ),
          };
        })
      );
    } else setAlumni(alumni);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto md:px-24 px-5 py-12">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-900">
            Alumni
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-base mb-8">
            Roboknights has an extensive, well connected alumni network which
            guides and mentors its members into the right path.
          </p>
          <input
            id={"search"}
            type="text"
            className="border-2 p-2 border-black w-60"
            placeholder="Search"
            onInput={onSearchBarChange}
          />
        </div>
        {shownAlumni
          .filter((a) => a.people.length > 0)
          .map((alum, index) => {
            return (
              <div key={index}>
                <h2 className={"text-black text-3xl pb-6 pt-12"}>
                  {alum.batch}
                </h2>
                <div className="flex flex-wrap -m-2">
                  {alum.people.map((alum, index) => {
                    return (
                      <div className="p-2 lg:w-1/5 md:w-1/2 w-full" key={index}>
                        <div className="h-32 flex items-center border-black border-2 p-4">
                          <div className="flex-grow p-5">
                            <h2 className="text-gray-900 title-font font-medium text-xl">
                              {alum.name}
                            </h2>
                            <p className="text-gray-500">{alum.role}</p>
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

export default AlumniPage;
