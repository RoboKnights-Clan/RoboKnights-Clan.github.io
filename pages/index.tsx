import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import useTitle from "../hooks/use-title";

const Home: NextPage = () => {
  useTitle("Home");
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
