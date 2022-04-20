import React from "react";
import Layout from "../components/Layout/Layout";
import { resources } from "../data/resources";

const ResourcesPage = () => {
  return (
    <Layout title="Resources">
      <div className="container mx-auto md:px-24 px-5 py-8">
        <div className="flex flex-col w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
            Resources
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-base mb-4">
            We at RoboKnights not only focus on accolades and competitions but
            also thrive to help our fellow members and other enthusiasts out
            there to increase their knowledge in the growing field of robotics.
            For this sole purpose, we have made the following resources to
            enrich any and all interested.
          </p>
        </div>
        <div className="flex flex-col">
          {resources.map((resource, index) => (
            <div className="border-2 border-black p-5 mb-4" key={index}>
              <h1 className="title-font sm:text-2xl text-xl mb-2 font-semibold text-gray-900">
                {resource.name}
              </h1>
              <h2 className="mb-2 text-lg">{resource.date}</h2>
              <p className="leading-relaxed text-base mb-2">{resource.desc}</p>
              <a href={resource.link} className="underline text-lg">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ResourcesPage;
