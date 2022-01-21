import React from "react";
import useTitle from "~/hooks/use-title";
import Header from "~/components/Header";

const MembersPage = () => {
  useTitle("Members");
  return (
    <div>
      <Header />
      <section>
        <h1>Members</h1>
        <input
          type="text"
          className="border-2 p-2 border-black "
          placeholder="Search"
        />
      </section>
    </div>
  );
};

export default MembersPage;
