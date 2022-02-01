import React from "react";
import useTitle from "~/hooks/use-title";
import Header from "~/components/Header";

const MembersPage = () => {
  useTitle("Members");
  return (
    <div>
      <Header />
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-1 text-gray-900">
            Members
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-base mb-8">
            Roboknights has an extensive, well connected alumni network which
            guides and mentors its members into the right path.
          </p>
          <input
            id={"search"}
            type="text"
            className="border-2 p-2 border-black w-60"
            placeholder="Search Members"
          />
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
