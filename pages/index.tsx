import type { NextPage } from "next";
import Hero from "../components/Home/Hero";
import Layout from "../components/Layout/Layout";
import Modal from "../components/Home/Modal";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Hero />
      <Modal />
    </Layout>
  );
};

export default Home;
