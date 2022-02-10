import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import Sponsors from "../components/Home/Sponsors";
import useTitle from "../hooks/use-title";

const Home: NextPage = () => {
  useTitle("Home");
  return (
    <div>
      <Header />
      <Hero />
      <Sponsors />
    </div>
  );
};

export default Home;
