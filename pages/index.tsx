import type { NextPage } from "next";
import Hero from "../components/Home/Hero";
import Video from "../components/Home/Video";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Hero />
      <Video />
    </Layout>
  );
};

export default Home;
