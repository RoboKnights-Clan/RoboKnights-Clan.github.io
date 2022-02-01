import React, { useState } from "react";
import useTitle from "~/hooks/use-title";
import Header from "~/components/Header";
import "~/data/alumni";
import { alumni } from "~/data/alumni";

const AlumniPage = () => {
  useTitle("Alumni");

  const [search, setSearch] = useState("");

  const alum = alumni.map((alum) => {
    return (
      <div>
        <h2 className={"text-black text-3xl pb-6 pt-12"}>
          Batch of {alum.batch}
        </h2>
        <div className="flex flex-wrap -m-2">
          {alum.people.map((mem) => {
            return (
              <div className="p-2 lg:w-1/5 md:w-1/2 w-full">
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
  });

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
          />
        </div>
        {alum}
      </div>
    </div>
  );
};

export default AlumniPage;
