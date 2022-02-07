import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import Sponsors from "../components/Home/Sponsors";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Sponsors />
    </div>
  );
};

export default Home;
