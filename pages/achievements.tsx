import React, { useState } from "react";
import useTitle from "../hooks/use-title";
import Header from "../components/Header";
import { achievements } from "../data/achievements";

const AlumniPage = () => {
  useTitle("Achievements");

  const [search, setSearch] = useState("");

  const ments = achievements.map((ment, index) => {
    return (
      <tr className={"border-y-2 border-black"} key={index}>
        <td className="px-4 py-3">{ment.competition}</td>
        <td className="px-4 pr-0 py-3">{ment.level}</td>
        <td className="px-4 py-3">{ment.year}</td>
        <td className="px-4 py-3 text-lg text-gray-900">{ment.prize}</td>
      </tr>
    );
  });

  return (
    <div>
      <Header />
      <div className="container mx-auto md:px-24 px-5 py-12">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-1 text-gray-900">
            Achievements
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-base mb-8">
            Since 2002, Roboknights has achieved innumerable milestones, winning
            several competitions. Out of this endless line of accomplishments,
            we have managed to list as many as possible.
          </p>
        </div>
        <div className="w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Competition
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Level
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Year
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Prize
                </th>
              </tr>
            </thead>
            <tbody>{ments}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
